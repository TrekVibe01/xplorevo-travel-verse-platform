export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      community_group_posts: {
        Row: {
          content: string
          created_at: string
          group_id: string
          id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          group_id: string
          id?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          group_id?: string
          id?: string
          updated_at?: string
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
        ]
      }
      community_groups: {
        Row: {
          category: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          image: string | null
          is_verified: boolean | null
          location: string | null
          name: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_verified?: boolean | null
          location?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_verified?: boolean | null
          location?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      community_messages: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          message: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_messages_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "community_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      emergency_alerts: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          created_at: string | null
          id: string
          latitude: number
          longitude: number
          notes: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          created_at?: string | null
          id?: string
          latitude: number
          longitude: number
          notes?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          created_at?: string | null
          id?: string
          latitude?: number
          longitude?: number
          notes?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      forum_replies: {
        Row: {
          content: string
          created_at: string | null
          id: string
          language: string | null
          post_id: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          language?: string | null
          post_id: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          language?: string | null
          post_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      organisations: {
        Row: {
          about: string | null
          created_at: string
          documents: Json | null
          id: string
          kyc_status: string | null
          logo_url: string | null
          name: string
          owner_id: string
          socials: Json | null
          updated_at: string
        }
        Insert: {
          about?: string | null
          created_at?: string
          documents?: Json | null
          id?: string
          kyc_status?: string | null
          logo_url?: string | null
          name: string
          owner_id: string
          socials?: Json | null
          updated_at?: string
        }
        Update: {
          about?: string | null
          created_at?: string
          documents?: Json | null
          id?: string
          kyc_status?: string | null
          logo_url?: string | null
          name?: string
          owner_id?: string
          socials?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          emergency_contacts: Json | null
          full_name: string | null
          id: string
          phone: string | null
          preferences: Json | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          emergency_contacts?: Json | null
          full_name?: string | null
          id: string
          phone?: string | null
          preferences?: Json | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          emergency_contacts?: Json | null
          full_name?: string | null
          id?: string
          phone?: string | null
          preferences?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      reel_comments: {
        Row: {
          created_at: string
          id: string
          reel_id: string
          status: string | null
          text: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          reel_id: string
          status?: string | null
          text: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          reel_id?: string
          status?: string | null
          text?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reel_comments_reel_id_fkey"
            columns: ["reel_id"]
            isOneToOne: false
            referencedRelation: "travel_reels"
            referencedColumns: ["id"]
          },
        ]
      }
      reel_likes: {
        Row: {
          created_at: string
          id: string
          reel_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          reel_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          reel_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reel_likes_reel_id_fkey"
            columns: ["reel_id"]
            isOneToOne: false
            referencedRelation: "travel_reels"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_bookings: {
        Row: {
          created_at: string
          dropoff_location: string | null
          end_date: string
          id: string
          pickup_location: string | null
          start_date: string
          status: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string
          dropoff_location?: string | null
          end_date: string
          id?: string
          pickup_location?: string | null
          start_date: string
          status?: string | null
          total_amount: number
          updated_at?: string
          user_id?: string | null
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string
          dropoff_location?: string | null
          end_date?: string
          id?: string
          pickup_location?: string | null
          start_date?: string
          status?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
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
          created_at: string
          features: Json | null
          id: string
          images: Json | null
          is_available: boolean | null
          location: string
          model: string
          owner_id: string | null
          price_per_day: number
          rating: number | null
          total_reviews: number | null
          updated_at: string
          vehicle_type: string
          year: number | null
        }
        Insert: {
          brand: string
          created_at?: string
          features?: Json | null
          id?: string
          images?: Json | null
          is_available?: boolean | null
          location: string
          model: string
          owner_id?: string | null
          price_per_day: number
          rating?: number | null
          total_reviews?: number | null
          updated_at?: string
          vehicle_type: string
          year?: number | null
        }
        Update: {
          brand?: string
          created_at?: string
          features?: Json | null
          id?: string
          images?: Json | null
          is_available?: boolean | null
          location?: string
          model?: string
          owner_id?: string | null
          price_per_day?: number
          rating?: number | null
          total_reviews?: number | null
          updated_at?: string
          vehicle_type?: string
          year?: number | null
        }
        Relationships: []
      }
      saved_itineraries: {
        Row: {
          budget: number | null
          created_at: string | null
          days: number
          destination: string
          id: string
          itinerary_data: Json
          user_id: string | null
        }
        Insert: {
          budget?: number | null
          created_at?: string | null
          days: number
          destination: string
          id?: string
          itinerary_data: Json
          user_id?: string | null
        }
        Update: {
          budget?: number | null
          created_at?: string | null
          days?: number
          destination?: string
          id?: string
          itinerary_data?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      tour_bookings: {
        Row: {
          created_at: string
          end_date: string
          id: string
          invoice_url: string | null
          payment_ref: string | null
          start_date: string
          status: string | null
          ticket_url: string | null
          total_amount: number
          tour_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          invoice_url?: string | null
          payment_ref?: string | null
          start_date: string
          status?: string | null
          ticket_url?: string | null
          total_amount: number
          tour_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          invoice_url?: string | null
          payment_ref?: string | null
          start_date?: string
          status?: string | null
          ticket_url?: string | null
          total_amount?: number
          tour_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tour_bookings_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "tour_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      tour_packages: {
        Row: {
          capacity: number | null
          created_at: string
          description: string | null
          destination: string | null
          difficulty: string | null
          end_date: string | null
          exclusions: Json | null
          id: string
          images: Json | null
          inclusions: Json | null
          itinerary: string | null
          organisation_id: string | null
          price: number
          rating: number | null
          start_date: string | null
          status: string | null
          title: string
          total_reviews: number | null
          updated_at: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          destination?: string | null
          difficulty?: string | null
          end_date?: string | null
          exclusions?: Json | null
          id?: string
          images?: Json | null
          inclusions?: Json | null
          itinerary?: string | null
          organisation_id?: string | null
          price: number
          rating?: number | null
          start_date?: string | null
          status?: string | null
          title: string
          total_reviews?: number | null
          updated_at?: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          destination?: string | null
          difficulty?: string | null
          end_date?: string | null
          exclusions?: Json | null
          id?: string
          images?: Json | null
          inclusions?: Json | null
          itinerary?: string | null
          organisation_id?: string | null
          price?: number
          rating?: number | null
          start_date?: string | null
          status?: string | null
          title?: string
          total_reviews?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tour_packages_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
        ]
      }
      travel_reels: {
        Row: {
          caption: string | null
          comments_count: number | null
          created_at: string
          creator_id: string
          creator_type: string
          id: string
          likes_count: number | null
          linked_trip_id: string | null
          status: string | null
          tags: Json | null
          thumbnail_url: string | null
          updated_at: string
          video_url: string
          views_count: number | null
        }
        Insert: {
          caption?: string | null
          comments_count?: number | null
          created_at?: string
          creator_id: string
          creator_type: string
          id?: string
          likes_count?: number | null
          linked_trip_id?: string | null
          status?: string | null
          tags?: Json | null
          thumbnail_url?: string | null
          updated_at?: string
          video_url: string
          views_count?: number | null
        }
        Update: {
          caption?: string | null
          comments_count?: number | null
          created_at?: string
          creator_id?: string
          creator_type?: string
          id?: string
          likes_count?: number | null
          linked_trip_id?: string | null
          status?: string | null
          tags?: Json | null
          thumbnail_url?: string | null
          updated_at?: string
          video_url?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "travel_reels_linked_trip_id_fkey"
            columns: ["linked_trip_id"]
            isOneToOne: false
            referencedRelation: "tour_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "user" | "organisation" | "superadmin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["user", "organisation", "superadmin"],
    },
  },
} as const
