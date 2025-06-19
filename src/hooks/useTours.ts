
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface TourPackage {
  id: string;
  title: string;
  description: string | null;
  destination: string;
  duration_days: number;
  price: number;
  max_participants: number | null;
  difficulty_level: string | null;
  images: string[] | null;
  inclusions: string[] | null;
  exclusions: string[] | null;
  rating: number | null;
  total_reviews: number | null;
  is_active: boolean;
  operator_id: string | null;
  created_at: string;
}

export interface Booking {
  id: string;
  user_id: string | null;
  package_id: string | null;
  travel_date: string;
  participants: number;
  total_amount: number;
  status: string;
  special_requests: string | null;
  booking_date: string;
  created_at: string;
}

export const useTours = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchTours = async () => {
    try {
      const { data, error } = await supabase
        .from('tour_packages')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTours(data || []);
    } catch (error) {
      console.error('Error fetching tours:', error);
      toast({
        title: "Error",
        description: "Failed to fetch tours",
        variant: "destructive",
      });
    }
  };

  const fetchUserBookings = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const createBooking = async (bookingData: {
    package_id: string;
    travel_date: string;
    participants: number;
    total_amount: number;
    special_requests?: string;
  }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('bookings')
        .insert([{ ...bookingData, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      
      setBookings(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Booking created successfully!",
      });
      
      return data;
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Error",
        description: "Failed to create booking",
        variant: "destructive",
      });
      throw error;
    }
  };

  const searchTours = async (query: string) => {
    try {
      const { data, error } = await supabase
        .from('tour_packages')
        .select('*')
        .eq('is_active', true)
        .or(`title.ilike.%${query}%,destination.ilike.%${query}%,description.ilike.%${query}%`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTours(data || []);
    } catch (error) {
      console.error('Error searching tours:', error);
      toast({
        title: "Error",
        description: "Failed to search tours",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchTours().finally(() => setLoading(false));
    fetchUserBookings();
  }, []);

  return {
    tours,
    bookings,
    loading,
    fetchTours,
    fetchUserBookings,
    createBooking,
    searchTours,
  };
};
