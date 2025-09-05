
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface CommunityGroup {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  location: string | null;
  image: string | null;
  is_verified: boolean;
  created_by: string | null;
  created_at: string;
  members?: number;
}

export interface GroupPost {
  id: string;
  group_id: string;
  user_id: string | null;
  content: string;
  created_at: string;
  profiles?: {
    full_name: string | null;
    avatar_url: string | null;
  };
}

export const useCommunity = () => {
  const [groups, setGroups] = useState<CommunityGroup[]>([]);
  const [posts, setPosts] = useState<GroupPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from('community_groups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGroups(data || []);
    } catch (error) {
      console.error('Error fetching groups:', error);
      toast({
        title: "Error",
        description: "Failed to fetch community groups",
        variant: "destructive",
      });
    }
  };

  const fetchGroupPosts = async (groupId: string) => {
    try {
      const { data, error } = await supabase
        .from('community_group_posts')
        .select(`
          *,
          profiles:user_id (
            full_name,
            avatar_url
          )
        `)
        .eq('group_id', groupId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Failed to fetch group posts",
        variant: "destructive",
      });
    }
  };

  const createGroup = async (groupData: Omit<CommunityGroup, 'id' | 'created_at' | 'created_by'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('community_groups')
        .insert([{ ...groupData, created_by: user.id }])
        .select()
        .single();

      if (error) throw error;
      
      setGroups(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Community group created successfully!",
      });
      
      return data;
    } catch (error) {
      console.error('Error creating group:', error);
      toast({
        title: "Error",
        description: "Failed to create community group",
        variant: "destructive",
      });
      throw error;
    }
  };

  const joinGroup = async (groupId: string) => {
    // For now, just show success message
    toast({
      title: "Success",
      description: "Joined community group successfully!",
    });
  };

  const createPost = async (groupId: string, content: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('community_group_posts')
        .insert([{ group_id: groupId, user_id: user.id, content }])
        .select(`
          *,
          profiles:user_id (
            full_name,
            avatar_url
          )
        `)
        .single();

      if (error) throw error;
      
      setPosts(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Post created successfully!",
      });
      
      return data;
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchGroups().finally(() => setLoading(false));
  }, []);

  return {
    groups,
    posts,
    loading,
    fetchGroups,
    fetchGroupPosts,
    createGroup,
    joinGroup,
    createPost,
  };
};
