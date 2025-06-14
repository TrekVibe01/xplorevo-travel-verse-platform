
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface CampusAmbassador {
  id: string;
  user_id: string;
  college_name: string;
  verification_status: 'pending' | 'approved' | 'rejected';
  total_referrals: number;
  total_earnings: number;
  monthly_referrals: number;
  monthly_earnings: number;
  rank?: number;
  performance_score: number;
  created_at: string;
}

export const useCampusAmbassador = () => {
  const [ambassador, setAmbassador] = useState<CampusAmbassador | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchAmbassadorData();
    } else {
      setAmbassador(null);
      setLoading(false);
    }
  }, [user]);

  const fetchAmbassadorData = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('campus_ambassadors')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching ambassador data:', error);
        toast({
          title: "Error",
          description: "Failed to load ambassador data",
          variant: "destructive",
        });
      } else {
        setAmbassador(data);
      }
    } catch (error) {
      console.error('Error fetching ambassador data:', error);
    } finally {
      setLoading(false);
    }
  };

  const createAmbassadorProfile = async (collegeName: string) => {
    if (!user) return { error: 'No user logged in' };

    try {
      const { data, error } = await supabase
        .from('campus_ambassadors')
        .insert({
          user_id: user.id,
          college_name: collegeName,
        })
        .select()
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create ambassador profile",
          variant: "destructive",
        });
        return { error };
      } else {
        setAmbassador(data);
        toast({
          title: "Success",
          description: "Ambassador profile created successfully",
        });
        return { data };
      }
    } catch (error) {
      console.error('Error creating ambassador profile:', error);
      return { error };
    }
  };

  return {
    ambassador,
    loading,
    createAmbassadorProfile,
    refetch: fetchAmbassadorData
  };
};
