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
      'images/1/image1.jpg',
      'images/1/image2.jpg',
      'images/1/image3.jpg',
      'images/1/image4.jpg'
    ]
  },
  {
    id: '2',
    name: 'Mechanical Keyboard',
    price: 45.00,
    description: 'Cherry MX Blue switches, great tactile feedback. Includes original keycaps.',
    condition: 'good',
    status: 'available',
    images: [
      'images/2/image1.jpg',
      'images/2/image2.jpg',
      'images/2/image3.jpg'
    ]
  },
  {
    id: '3',
    name: 'Vintage Camera',
    price: 120.00,
    description: 'Classic film camera from the 70s. Fully functional with minor cosmetic wear.',
    condition: 'regular',
    status: 'available',
    images: [
      'images/3/image1.jpg',
      'images/3/image2.jpg',
      'images/3/image3.jpg'
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
      'images/4/image1.jpg',
      'images/4/image2.jpg'
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
      'images/5/image1.jpg',
      'images/5/image2.jpg'
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
      'images/6/image1.jpg',
      'images/6/image2.jpg',
      'images/6/image3.jpg'
    ],
  },
  {
    id: '7',
    name: 'Vodka Absolut Miniatura x 5 Botellitas',
    price: 150.00,
    description: '',
    condition: 'like new',
    status: 'available',
    images: [
      'images/7/image1.jpg'
    ],
  }
]