export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  condition: 'Como nuevo' | 'Buen estado' | 'No tan bien';
  images: string[];
  category: string;
}