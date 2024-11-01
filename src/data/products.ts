import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Leather Jacket',
    price: 89.99,
    description: 'Classic brown leather jacket, barely worn. Perfect condition with authentic patina.',
    condition: 'Like New',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800&h=400'
    ],
    category: 'Clothing'
  },
  {
    id: '2',
    name: 'Mechanical Keyboard',
    price: 45.00,
    description: 'Cherry MX Blue switches, great tactile feedback. Includes original keycaps.',
    condition: 'Good',
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800&h=400'
    ],
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Vintage Camera',
    price: 120.00,
    description: 'Classic film camera from the 70s. Fully functional with minor cosmetic wear.',
    condition: 'Good',
    images: [
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800&h=400'
    ],
    category: 'Electronics'
  }
];