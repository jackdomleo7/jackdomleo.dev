export interface GumroadProduct {
  success: boolean;
  product: {
    name: string;
    preview_url: string;
    description: string;
    customizable_price: boolean;
    require_shipping: boolean;
    custom_receipt: string;
    custom_permalink: string;
    subscription_duration: null;
    id: string;
    url: string | null;
    price: number;
    currency: string;
    short_url: string;
    thumbnail_url: string | null;
    tags: string[];
    formatted_price: string;
    published: boolean;
    show_on_profile: boolean;
    file_info: Record<string, string>;
    max_purchase_count: number | null;
    deleted: boolean;
    custom_summary: string;
    is_tiered_membership: boolean;
    recurrences: null;
    variants: unknown[];
    release_at: string;
    sales_count: number;
    sales_usd_cents: number;
  }
}