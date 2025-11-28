-- Create app_role enum for role-based access control
CREATE TYPE public.app_role AS ENUM ('user', 'organisation', 'superadmin');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  bio TEXT,
  preferences JSONB DEFAULT '{}'::jsonb,
  emergency_contacts JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create user_roles table (CRITICAL: separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Create security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create organisations table
CREATE TABLE public.organisations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  about TEXT,
  logo_url TEXT,
  socials JSONB DEFAULT '{}'::jsonb,
  kyc_status TEXT DEFAULT 'pending',
  documents JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create tour_packages table
CREATE TABLE public.tour_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organisation_id UUID REFERENCES public.organisations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  destination TEXT,
  difficulty TEXT,
  start_date DATE,
  end_date DATE,
  capacity INTEGER DEFAULT 0,
  price DECIMAL(10,2) NOT NULL,
  inclusions JSONB DEFAULT '[]'::jsonb,
  exclusions JSONB DEFAULT '[]'::jsonb,
  itinerary TEXT,
  status TEXT DEFAULT 'draft',
  images JSONB DEFAULT '[]'::jsonb,
  rating DECIMAL(3,2),
  total_reviews INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create tour_bookings table
CREATE TABLE public.tour_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  tour_id UUID REFERENCES public.tour_packages(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_ref TEXT,
  invoice_url TEXT,
  ticket_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create community_groups table
CREATE TABLE public.community_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  location TEXT,
  image TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create community_group_posts table
CREATE TABLE public.community_group_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES public.community_groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create rental_vehicles table
CREATE TABLE public.rental_vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_type TEXT NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER,
  location TEXT NOT NULL,
  price_per_day DECIMAL(10,2) NOT NULL,
  images JSONB DEFAULT '[]'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  rating DECIMAL(3,2),
  total_reviews INTEGER DEFAULT 0,
  is_available BOOLEAN DEFAULT TRUE,
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create rental_bookings table
CREATE TABLE public.rental_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  vehicle_id UUID REFERENCES public.rental_vehicles(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  pickup_location TEXT,
  dropoff_location TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create travel_reels table (Instagram-style)
CREATE TABLE public.travel_reels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_type TEXT NOT NULL,
  creator_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  caption TEXT,
  tags JSONB DEFAULT '[]'::jsonb,
  linked_trip_id UUID REFERENCES public.tour_packages(id) ON DELETE SET NULL,
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create reel_comments table
CREATE TABLE public.reel_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reel_id UUID NOT NULL REFERENCES public.travel_reels(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create reel_likes table
CREATE TABLE public.reel_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reel_id UUID NOT NULL REFERENCES public.travel_reels(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(reel_id, user_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_group_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_reels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reel_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reel_likes ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (TRUE);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User roles policies
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Superadmins can manage all roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'superadmin'));

-- Organisations policies
CREATE POLICY "Everyone can view organisations"
  ON public.organisations FOR SELECT
  USING (TRUE);

CREATE POLICY "Organisation owners can update own org"
  ON public.organisations FOR UPDATE
  USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Organisations can create"
  ON public.organisations FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'organisation'));

-- Tour packages policies
CREATE POLICY "Everyone can view approved tours"
  ON public.tour_packages FOR SELECT
  USING (status = 'approved' OR public.has_role(auth.uid(), 'organisation') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Organisations can manage own tours"
  ON public.tour_packages FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.organisations
      WHERE id = tour_packages.organisation_id
      AND owner_id = auth.uid()
    ) OR public.has_role(auth.uid(), 'superadmin')
  );

-- Tour bookings policies
CREATE POLICY "Users can view own bookings"
  ON public.tour_bookings FOR SELECT
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'organisation') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Users can create bookings"
  ON public.tour_bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Community groups policies
CREATE POLICY "Everyone can view groups"
  ON public.community_groups FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can create groups"
  ON public.community_groups FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- Community posts policies
CREATE POLICY "Everyone can view posts"
  ON public.community_group_posts FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can create posts"
  ON public.community_group_posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Rental vehicles policies
CREATE POLICY "Everyone can view available vehicles"
  ON public.rental_vehicles FOR SELECT
  USING (is_available = TRUE OR auth.uid() = owner_id OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Organisations can manage vehicles"
  ON public.rental_vehicles FOR ALL
  USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'superadmin'));

-- Rental bookings policies
CREATE POLICY "Users can view own rental bookings"
  ON public.rental_bookings FOR SELECT
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Users can create rental bookings"
  ON public.rental_bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Travel reels policies
CREATE POLICY "Everyone can view active reels"
  ON public.travel_reels FOR SELECT
  USING (status = 'active' OR auth.uid() = creator_id OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Authenticated users can create reels"
  ON public.travel_reels FOR INSERT
  WITH CHECK (auth.uid() = creator_id);

CREATE POLICY "Creators can update own reels"
  ON public.travel_reels FOR UPDATE
  USING (auth.uid() = creator_id OR public.has_role(auth.uid(), 'superadmin'));

-- Reel comments policies
CREATE POLICY "Everyone can view active comments"
  ON public.reel_comments FOR SELECT
  USING (status = 'active');

CREATE POLICY "Authenticated users can create comments"
  ON public.reel_comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Reel likes policies
CREATE POLICY "Everyone can view likes"
  ON public.reel_likes FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can like"
  ON public.reel_likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike"
  ON public.reel_likes FOR DELETE
  USING (auth.uid() = user_id);

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers to all tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_organisations_updated_at BEFORE UPDATE ON public.organisations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tour_packages_updated_at BEFORE UPDATE ON public.tour_packages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tour_bookings_updated_at BEFORE UPDATE ON public.tour_bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_community_groups_updated_at BEFORE UPDATE ON public.community_groups
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_community_group_posts_updated_at BEFORE UPDATE ON public.community_group_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_rental_vehicles_updated_at BEFORE UPDATE ON public.rental_vehicles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_rental_bookings_updated_at BEFORE UPDATE ON public.rental_bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_travel_reels_updated_at BEFORE UPDATE ON public.travel_reels
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  
  -- Assign default 'user' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();