export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  condition: 'like new' | 'good' | 'regular';
  status: 'available' | 'reserved' | 'sold';
  images: string[];
}