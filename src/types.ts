export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  condition: 'Como nuevo' | 'Buen estado' | 'No tan bien';
  status: 'available' | 'sold' | 'reserved';
  images: string[];
  category: string;
}