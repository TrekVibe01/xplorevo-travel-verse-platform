export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          ambassador_id: string | null
          booking_date: string | null
          commission_amount: number | null
          created_at: string | null
          id: string
          package_id: string | null
          participants: number
          special_requests: string | null
          status: string | null
          total_amount: number
          travel_date: string
          user_id: string | null
        }
        Insert: {
          ambassador_id?: string | null
          booking_date?: string | null
          commission_amount?: number | null
          created_at?: string | null
          id?: string
          package_id?: string | null
          participants: number
          special_requests?: string | null
          status?: string | null
          total_amount: number
          travel_date: string
          user_id?: string | null
        }
        Update: {
          ambassador_id?: string | null
          booking_date?: string | null
          commission_amount?: number | null
          created_at?: string | null
          id?: string
          package_id?: string | null
          participants?: number
          special_requests?: string | null
          status?: string | null
          total_amount?: number
          travel_date?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_ambassador_id_fkey"
            columns: ["ambassador_id"]
            isOneToOne: false
            referencedRelation: "campus_ambassadors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "tour_packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campus_ambassadors: {
        Row: {
          college_name: string
          created_at: string | null
          id: string
          monthly_earnings: number | null
          monthly_referrals: number | null
          performance_score: number | null
          rank: number | null
          total_earnings: number | null
          total_referrals: number | null
          user_id: string | null
          verification_status: string | null
        }
        Insert: {
          college_name: string
          created_at?: string | null
          id?: string
          monthly_earnings?: number | null
          monthly_referrals?: number | null
          performance_score?: number | null
          rank?: number | null
          total_earnings?: number | null
          total_referrals?: number | null
          user_id?: string | null
          verification_status?: string | null
        }
        Update: {
          college_name?: string
          created_at?: string | null
          id?: string
          monthly_earnings?: number | null
          monthly_referrals?: number | null
          performance_score?: number | null
          rank?: number | null
          total_earnings?: number | null
          total_referrals?: number | null
          user_id?: string | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campus_ambassadors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      community_group_posts: {
        Row: {
          content: string
          created_at: string | null
          group_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          group_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          group_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_group_posts_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "community_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_group_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      community_groups: {
        Row: {
          category: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          image: string | null
          is_verified: boolean | null
          location: string | null
          name: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_verified?: boolean | null
          location?: string | null
          name: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_verified?: boolean | null
          location?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          college_name: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
          user_type: string
        }
        Insert: {
          avatar_url?: string | null
          college_name?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
          user_type: string
        }
        Update: {
          avatar_url?: string | null
          college_name?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
          user_type?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          ambassador_id: string | null
          created_at: string | null
          id: string
          referral_code: string
          referred_user_id: string | null
          reward_amount: number | null
          status: string | null
        }
        Insert: {
          ambassador_id?: string | null
          created_at?: string | null
          id?: string
          referral_code: string
          referred_user_id?: string | null
          reward_amount?: number | null
          status?: string | null
        }
        Update: {
          ambassador_id?: string | null
          created_at?: string | null
          id?: string
          referral_code?: string
          referred_user_id?: string | null
          reward_amount?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_ambassador_id_fkey"
            columns: ["ambassador_id"]
            isOneToOne: false
            referencedRelation: "campus_ambassadors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referred_user_id_fkey"
            columns: ["referred_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_bookings: {
        Row: {
          created_at: string | null
          dropoff_location: string | null
          end_date: string
          id: string
          pickup_location: string | null
          start_date: string
          status: string | null
          total_amount: number
          user_id: string | null
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string | null
          dropoff_location?: string | null
          end_date: string
          id?: string
          pickup_location?: string | null
          start_date: string
          status?: string | null
          total_amount: number
          user_id?: string | null
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string | null
          dropoff_location?: string | null
          end_date?: string
          id?: string
          pickup_location?: string | null
          start_date?: string
          status?: string | null
          total_amount?: number
          user_id?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rental_bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rental_bookings_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "rental_vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_vehicles: {
        Row: {
          brand: string
          created_at: string | null
          features: string[] | null
          id: string
          images: string[] | null
          is_available: boolean | null
          location: string
          model: string
          owner_id: string | null
          price_per_day: number
          rating: number | null
          total_reviews: number | null
          vehicle_type: string
          year: number | null
        }
        Insert: {
          brand: string
          created_at?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          location: string
          model: string
          owner_id?: string | null
          price_per_day: number
          rating?: number | null
          total_reviews?: number | null
          vehicle_type: string
          year?: number | null
        }
        Update: {
          brand?: string
          created_at?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          location?: string
          model?: string
          owner_id?: string | null
          price_per_day?: number
          rating?: number | null
          total_reviews?: number | null
          vehicle_type?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rental_vehicles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tour_packages: {
        Row: {
          created_at: string | null
          description: string | null
          destination: string
          difficulty_level: string | null
          duration_days: number
          exclusions: string[] | null
          id: string
          images: string[] | null
          inclusions: string[] | null
          is_active: boolean | null
          max_participants: number | null
          operator_id: string | null
          price: number
          rating: number | null
          title: string
          total_reviews: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          destination: string
          difficulty_level?: string | null
          duration_days: number
          exclusions?: string[] | null
          id?: string
          images?: string[] | null
          inclusions?: string[] | null
          is_active?: boolean | null
          max_participants?: number | null
          operator_id?: string | null
          price: number
          rating?: number | null
          title: string
          total_reviews?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          destination?: string
          difficulty_level?: string | null
          duration_days?: number
          exclusions?: string[] | null
          id?: string
          images?: string[] | null
          inclusions?: string[] | null
          is_active?: boolean | null
          max_participants?: number | null
          operator_id?: string | null
          price?: number
          rating?: number | null
          title?: string
          total_reviews?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tour_packages_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      travel_reels: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_featured: boolean | null
          likes_count: number | null
          location: string | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          user_id: string | null
          video_url: string
          views_count: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          likes_count?: number | null
          location?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          user_id?: string | null
          video_url: string
          views_count?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          likes_count?: number | null
          location?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          user_id?: string | null
          video_url?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "travel_reels_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
