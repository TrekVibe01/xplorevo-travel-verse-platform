
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface RentalVehicle {
  id: string;
  vehicle_type: string;
  brand: string;
  model: string;
  year: number | null;
  location: string;
  price_per_day: number;
  images: string[] | null;
  features: string[] | null;
  rating: number | null;
  total_reviews: number | null;
  is_available: boolean;
  owner_id: string | null;
  created_at: string;
}

export interface RentalBooking {
  id: string;
  user_id: string | null;
  vehicle_id: string | null;
  start_date: string;
  end_date: string;
  total_amount: number;
  status: string;
  pickup_location: string | null;
  dropoff_location: string | null;
  created_at: string;
}

export const useRentals = () => {
  const [vehicles, setVehicles] = useState<RentalVehicle[]>([]);
  const [bookings, setBookings] = useState<RentalBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchVehicles = async () => {
    try {
      const { data, error } = await supabase
        .from('rental_vehicles')
        .select('*')
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      toast({
        title: "Error",
        description: "Failed to fetch vehicles",
        variant: "destructive",
      });
    }
  };

  const fetchUserBookings = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('rental_bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching rental bookings:', error);
    }
  };

  const createRentalBooking = async (bookingData: {
    vehicle_id: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    pickup_location?: string;
    dropoff_location?: string;
  }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('rental_bookings')
        .insert([{ ...bookingData, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      
      setBookings(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Rental booking created successfully!",
      });
      
      return data;
    } catch (error) {
      console.error('Error creating rental booking:', error);
      toast({
        title: "Error",
        description: "Failed to create rental booking",
        variant: "destructive",
      });
      throw error;
    }
  };

  const searchVehicles = async (query: string) => {
    try {
      const { data, error } = await supabase
        .from('rental_vehicles')
        .select('*')
        .eq('is_available', true)
        .or(`brand.ilike.%${query}%,model.ilike.%${query}%,vehicle_type.ilike.%${query}%,location.ilike.%${query}%`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error searching vehicles:', error);
      toast({
        title: "Error",
        description: "Failed to search vehicles",
        variant: "destructive",
      });
    }
  };

  const filterVehiclesByType = async (vehicleType: string) => {
    try {
      const { data, error } = await supabase
        .from('rental_vehicles')
        .select('*')
        .eq('is_available', true)
        .eq('vehicle_type', vehicleType)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error filtering vehicles:', error);
      toast({
        title: "Error",
        description: "Failed to filter vehicles",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchVehicles().finally(() => setLoading(false));
    fetchUserBookings();
  }, []);

  return {
    vehicles,
    bookings,
    loading,
    fetchVehicles,
    fetchUserBookings,
    createRentalBooking,
    searchVehicles,
    filterVehiclesByType,
  };
};
