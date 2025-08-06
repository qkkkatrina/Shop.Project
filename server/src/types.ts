// Shop.Project/server/src/types.ts

export interface IProduct {
  id?: number; 
  title: string;
  description: string;
  price: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IRelatedProductLink {
  product_id: number;
  related_product_id: number;
}

export interface IComment {
    id?: number;
    productId: number;
    title: string;
    email: string;
    text: string;
    created_at?: string;
}