/* eslint-disable */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      listings: {
        Row: {
          create_time: string | null;
          description: string | null;
          id: number;
          image_url: string | null;
          title: string | null;
        };
        Insert: {
          create_time?: string | null;
          description?: string | null;
          id?: never;
          image_url?: string | null;
          title?: string | null;
        };
        Update: {
          create_time?: string | null;
          description?: string | null;
          id?: never;
          image_url?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      listingtags: {
        Row: {
          listing_id: number;
          tag_id: number;
        };
        Insert: {
          listing_id: number;
          tag_id: number;
        };
        Update: {
          listing_id?: number;
          tag_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "listingtags_listing_id_fkey";
            columns: ["listing_id"];
            referencedRelation: "listings";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "listingtags_tag_id_fkey";
            columns: ["tag_id"];
            referencedRelation: "Tag";
            referencedColumns: ["id"];
          },
        ];
      };
      Tag: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
