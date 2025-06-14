
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  college_name TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('traveler', 'operator', 'rental', 'ambassador', 'admin')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create campus ambassadors table
CREATE TABLE public.campus_ambassadors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  college_name TEXT NOT NULL,
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending', 'approved', 'rejected')),
  total_referrals INTEGER DEFAULT 0,
  total_earnings DECIMAL(10,2) DEFAULT 0,
  monthly_referrals INTEGER DEFAULT 0,
  monthly_earnings DECIMAL(10,2) DEFAULT 0,
  rank INTEGER,
  performance_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create referrals table
CREATE TABLE public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ambassador_id UUID REFERENCES public.campus_ambassadors(id) ON DELETE CASCADE,
  referred_user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  referral_code TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'registered' CHECK (status IN ('registered', 'first_booking', 'active_user')),
  reward_amount DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tour packages table
CREATE TABLE public.tour_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  destination TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration_days INTEGER NOT NULL,
  max_participants INTEGER,
  images TEXT[],
  inclusions TEXT[],
  exclusions TEXT[],
  difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'moderate', 'difficult')),
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  package_id UUID REFERENCES public.tour_packages(id) ON DELETE CASCADE,
  ambassador_id UUID REFERENCES public.campus_ambassadors(id),
  booking_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  travel_date DATE NOT NULL,
  participants INTEGER NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  commission_amount DECIMAL(10,2) DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rental vehicles table
CREATE TABLE public.rental_vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  vehicle_type TEXT NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER,
  price_per_day DECIMAL(10,2) NOT NULL,
  location TEXT NOT NULL,
  images TEXT[],
  features TEXT[],
  is_available BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rental bookings table
CREATE TABLE public.rental_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  vehicle_id UUID REFERENCES public.rental_vehicles(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'active', 'completed', 'cancelled')),
  pickup_location TEXT,
  dropoff_location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create travel reels table
CREATE TABLE public.travel_reels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  location TEXT,
  tags TEXT[],
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('booking', 'referral', 'earning', 'system')),
  is_read BOOLEAN DEFAULT false,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_ambassadors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_reels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for campus ambassadors
CREATE POLICY "Ambassadors can view their own data" ON public.campus_ambassadors FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Ambassadors can update their own data" ON public.campus_ambassadors FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Users can create ambassador profile" ON public.campus_ambassadors FOR INSERT WITH CHECK (user_id = auth.uid());

-- RLS Policies for referrals
CREATE POLICY "Ambassadors can view their referrals" ON public.referrals FOR SELECT USING (
  ambassador_id IN (SELECT id FROM public.campus_ambassadors WHERE user_id = auth.uid())
);
CREATE POLICY "Ambassadors can create referrals" ON public.referrals FOR INSERT WITH CHECK (
  ambassador_id IN (SELECT id FROM public.campus_ambassadors WHERE user_id = auth.uid())
);

-- RLS Policies for tour packages
CREATE POLICY "Everyone can view active packages" ON public.tour_packages FOR SELECT USING (is_active = true);
CREATE POLICY "Operators can manage their packages" ON public.tour_packages FOR ALL USING (operator_id = auth.uid());

-- RLS Policies for bookings
CREATE POLICY "Users can view their bookings" ON public.bookings FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Operators can view bookings for their packages" ON public.bookings FOR SELECT USING (
  package_id IN (SELECT id FROM public.tour_packages WHERE operator_id = auth.uid())
);

-- RLS Policies for rental vehicles
CREATE POLICY "Everyone can view available vehicles" ON public.rental_vehicles FOR SELECT USING (is_available = true);
CREATE POLICY "Owners can manage their vehicles" ON public.rental_vehicles FOR ALL USING (owner_id = auth.uid());

-- RLS Policies for rental bookings
CREATE POLICY "Users can view their rental bookings" ON public.rental_bookings FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create rental bookings" ON public.rental_bookings FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Vehicle owners can view bookings" ON public.rental_bookings FOR SELECT USING (
  vehicle_id IN (SELECT id FROM public.rental_vehicles WHERE owner_id = auth.uid())
);

-- RLS Policies for travel reels
CREATE POLICY "Everyone can view reels" ON public.travel_reels FOR SELECT USING (true);
CREATE POLICY "Users can manage their reels" ON public.travel_reels FOR ALL USING (user_id = auth.uid());

-- RLS Policies for notifications
CREATE POLICY "Users can view their notifications" ON public.notifications FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can update their notifications" ON public.notifications FOR UPDATE USING (user_id = auth.uid());

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, user_type)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'traveler')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX idx_campus_ambassadors_user_id ON public.campus_ambassadors(user_id);
CREATE INDEX idx_referrals_ambassador_id ON public.referrals(ambassador_id);
CREATE INDEX idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX idx_bookings_package_id ON public.bookings(package_id);
CREATE INDEX idx_tour_packages_operator_id ON public.tour_packages(operator_id);
CREATE INDEX idx_rental_vehicles_owner_id ON public.rental_vehicles(owner_id);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
