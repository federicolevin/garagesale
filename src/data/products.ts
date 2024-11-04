import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Leather Jacket',
    price: 89.99,
    description: 'Classic brown leather jacket, barely worn. Perfect condition with authentic patina.',
    condition: 'like new',
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800&h=400'
    ]
  },
  {
    id: '2',
    name: 'Mechanical Keyboard',
    price: 45.00,
    description: 'Cherry MX Blue switches, great tactile feedback. Includes original keycaps.',
    condition: 'good',
    status: 'reserved',
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800&h=400'
    ]
  },
  {
    id: '3',
    name: 'Vintage Camera',
    price: 120.00,
    description: 'Classic film camera from the 70s. Fully functional with minor cosmetic wear.',
    condition: 'regular',
    status: 'sold',
    images: [
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=800&h=400'
    ]
  },
  {
    id: '4',
    name: 'Mountain Bike',
    price: 300.00,
    description: '21-speed mountain bike with front suspension. Lightly used, excellent condition.',
    condition: 'like new',
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1517430816045-df4b7de1d1c0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517430816045-df4b7de1d1c0?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1517430816045-df4b7de1d1c0?auto=format&fit=crop&q=80&w=800&h=400'
    ]
  },
  {
    id: '5',
    name: 'Electric Guitar',
    price: 250.00,
    description: 'Electric guitar with maple neck and rosewood fretboard. Comes with a gig bag.',
    condition: 'like new',
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800&h=400'
    ]
  },
  {
    id: '6',
    name: 'Smartphone',
    price: 150.00,
    description: 'Latest model smartphone with 128GB storage. Minor scratches on the screen.',
    condition: 'like new',
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&h=400'
    ],
  }
]