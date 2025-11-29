-- Create emergency_alerts table
CREATE TABLE IF NOT EXISTS public.emergency_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'acknowledged', 'resolved')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  acknowledged_at TIMESTAMPTZ,
  acknowledged_by UUID REFERENCES auth.users(id)
);

-- Create forum_replies table
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  content TEXT NOT NULL,
  language TEXT DEFAULT 'en' CHECK (language IN ('en', 'hi', 'mr')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create community_messages table for real-time chat
CREATE TABLE IF NOT EXISTS public.community_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES public.community_groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create saved_itineraries table
CREATE TABLE IF NOT EXISTS public.saved_itineraries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  destination TEXT NOT NULL,
  days INTEGER NOT NULL,
  budget DECIMAL(10, 2),
  itinerary_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.emergency_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_itineraries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for emergency_alerts
CREATE POLICY "Users can create own alerts" ON public.emergency_alerts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own alerts" ON public.emergency_alerts
  FOR SELECT USING (auth.uid() = user_id OR has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can update alerts" ON public.emergency_alerts
  FOR UPDATE USING (has_role(auth.uid(), 'superadmin'));

-- RLS Policies for forum_replies
CREATE POLICY "Anyone can read forum replies" ON public.forum_replies
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create replies" ON public.forum_replies
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own replies" ON public.forum_replies
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for community_messages
CREATE POLICY "Anyone can read community messages" ON public.community_messages
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can send messages" ON public.community_messages
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for saved_itineraries
CREATE POLICY "Users can view own itineraries" ON public.saved_itineraries
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own itineraries" ON public.saved_itineraries
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own itineraries" ON public.saved_itineraries
  FOR DELETE USING (auth.uid() = user_id);

-- Enable realtime for community messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.community_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.forum_replies;