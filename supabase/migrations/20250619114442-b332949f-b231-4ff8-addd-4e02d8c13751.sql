
-- Community Groups Table
CREATE TABLE public.community_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  location TEXT,
  image TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community Group Posts Table
CREATE TABLE public.community_group_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES public.community_groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.community_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_group_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Community Groups 
CREATE POLICY "Anyone can view groups"
  ON public.community_groups
  FOR SELECT
  USING (true);

CREATE POLICY "Group creator can insert group"
  ON public.community_groups
  FOR INSERT
  WITH CHECK (created_by = auth.uid());

CREATE POLICY "Group creator can update group"
  ON public.community_groups
  FOR UPDATE
  USING (created_by = auth.uid());

CREATE POLICY "Group creator can delete group"
  ON public.community_groups
  FOR DELETE
  USING (created_by = auth.uid());

-- RLS Policies: Community Group Posts
CREATE POLICY "Anyone can view group posts"
  ON public.community_group_posts
  FOR SELECT
  USING (true);

CREATE POLICY "User can create post in group"
  ON public.community_group_posts
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "User can update own post"
  ON public.community_group_posts
  FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "User can delete own post"
  ON public.community_group_posts
  FOR DELETE
  USING (user_id = auth.uid());

-- Add helpful indexes for performance
CREATE INDEX idx_community_groups_created_by ON public.community_groups(created_by);
CREATE INDEX idx_group_posts_group_id ON public.community_group_posts(group_id);
CREATE INDEX idx_group_posts_user_id ON public.community_group_posts(user_id);
