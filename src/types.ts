export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  condition: 'Like New' | 'Good' | 'Fair';
  images: string[];
  category: string;
}