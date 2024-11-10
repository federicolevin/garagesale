export interface Product {
  id: string;
  name: string;
  price: number;
  currency: 'ars' | 'usd';
  description: string;
  condition: 'like new' | 'good' | 'regular';
  status: 'available' | 'reserved' | 'sold';
  images: string[];
}

export type ProductStatus = 'available' | 'reserved' | 'sold';