
import { supabase } from '@/integrations/supabase/client';

export class SupabaseService {
  // Authentication helpers
  static async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  }

  static async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  }

  // Campus Ambassador helpers
  static async getCampusAmbassador(userId: string) {
    const { data, error } = await supabase
      .from('campus_ambassadors')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  static async createCampusAmbassador(userId: string, collegeData: any) {
    const { data, error } = await supabase
      .from('campus_ambassadors')
      .insert([{
        user_id: userId,
        college_name: collegeData.collegeName,
        verification_status: 'pending'
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  // Referral helpers
  static async validateReferralCode(code: string) {
    const { data, error } = await supabase
      .from('referrals')
      .select(`
        *,
        campus_ambassadors!inner(
          user_id,
          college_name,
          profiles!inner(
            full_name
          )
        )
      `)
      .eq('referral_code', code.toUpperCase())
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  static async applyReferralCode(userId: string, referralCode: string) {
    const referral = await this.validateReferralCode(referralCode);
    if (!referral) return null;

    // Create referral record
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        ambassador_id: referral.ambassador_id,
        referred_user_id: userId,
        referral_code: referralCode.toUpperCase(),
        status: 'registered'
      }])
      .select()
      .single();
    
    if (error) throw error;
    return { referral: data, ambassador: referral.campus_ambassadors };
  }

  // Travel Reels helpers
  static async getTravelReels() {
    const { data, error } = await supabase
      .from('travel_reels')
      .select(`
        *,
        profiles:user_id (
          full_name,
          avatar_url
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }

  static async createTravelReel(reelData: any) {
    const user = await this.getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('travel_reels')
      .insert([{ ...reelData, user_id: user.id }])
      .select(`
        *,
        profiles:user_id (
          full_name,
          avatar_url
        )
      `)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateReelViews(reelId: string) {
    const { error } = await supabase
      .from('travel_reels')
      .update({ views_count: supabase.raw('views_count + 1') })
      .eq('id', reelId);
    
    if (error) throw error;
  }

  static async updateReelLikes(reelId: string, increment: boolean = true) {
    const { error } = await supabase
      .from('travel_reels')
      .update({ 
        likes_count: increment 
          ? supabase.raw('likes_count + 1') 
          : supabase.raw('likes_count - 1') 
      })
      .eq('id', reelId);
    
    if (error) throw error;
  }
}
