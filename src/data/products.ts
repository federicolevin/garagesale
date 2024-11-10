import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rack de TV',
    price: 120000,
    currency: 'ars',
    description: 'Medidas: 147cm ancho x 50cm alto x 40cm profundidad<br><br>• Material: Melamina<br>• Sin tornillos a la vista<br>• Cajón correderas metálicas<br>• Tiene patines plásticos en la base para evitar el contacto directo con el piso<br>• Las puertas abren y cierran con bisagras metálicas',
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
    name: 'Mesa de comedor',
    price: 170000,
    currency: 'ars',
    description: 'Medidas: 135cm x 80cm x 75cm<br><br>• Mesa en hierro y madera<br>• Madera: enchapado en paraiso<br>• Estructura de caño 30cm x 30cm<br>• No incluye sillas',
    condition: 'like new',
    status: 'available',
    images: [
      'images/2/image1.jpg',
      'images/2/image2.jpg'
    ]
  },
  {
    id: '3',
    name: 'Sillas x6',
    price: 420000,
    currency: 'ars',
    description: '',
    condition: 'like new',
    status: 'available',
    images: [
      'images/3/image1.jpg',
      'images/3/image2.jpg'
    ]
  },
  {
    id: '4',
    name: 'Mesa ratona',
    price: 50000,
    currency: 'ars',
    description: 'Medidas: 90cm ancho x 37cm alto x 45cm profundidad<br><br>• Material: Melamina<br>• Sin tornillos a la vista<br>• Tiene patines plásticos en la base para evitar el contacto directo con el piso',
    condition: 'good',
    status: 'available',
    images: [
      'images/4/image1.jpg',
      'images/4/image2.jpg',
      'images/4/image3.jpg'
    ]
  },
  {
    id: '5',
    name: 'Alfombra',
    price: 60000,
    currency: 'ars',
    description: 'Medidas: 180cm x 150cm<br><br>• Material: hilo de algodo',
    condition: 'regular',
    status: 'available',
    images: [
      'images/5/image1.jpg',
      'images/5/image2.jpg'
    ]
  },
  {
    id: '6',
    name: 'Recibidor zapatero',
    price: 80000,
    currency: 'ars',
    description: 'Medidas: 70cm ancho x 25cm profundidad x 92cm alto<br><br>• Materiales: Hierro y madera<br>• Madera enchapada en paraiso<br>',
    condition: 'like new',
    status: 'available',
    images: [
      'images/6/image1.jpg',
      'images/6/image2.jpg'
    ]
  },
  {
    id: '7',
    name: 'Mesa + sillas Acapulco',
    price: 120000,
    currency: 'ars',
    description: 'Juego de exterior compuesto por una mesa y dos sillas Acapulco.<br><br>• Material: Hierro y PVC<br>• Medidas aproximadas mesa: 55cm de altura x 58cm de diametro<br>• Vidrio de 4mm',
    condition: 'like new',
    status: 'available',
    images: [
      'images/7/image1.jpg',
      'images/7/image2.jpg',
      'images/7/image3.jpg'
    ],
  },
  {
    id: '8',
    name: 'Samsung Galaxy S22',
    price: 650,
    currency: 'usd',
    description: '• Color: Phantom Black<br>• 128GB de almacenamiento<br>• 8GB de memoria RAM<br>• MUY cuidado<br>• Se entrega con: caja, cable original sin estrenar, pin para bandeja SIM, funda transparente<br><br>Para más información: <a href="https://www.samsung.com/ar/smartphones/galaxy-s/galaxy-s22-phantom-black-128gb-sm-s901ezklaro/" target="_blank">Samsung Argentina</a>',
    condition: 'like new',
    status: 'available',
    images: [
      'images/8/image1.jpg',
      'images/8/image2.jpg',
      'images/8/image3.jpg',
      'images/8/image4.jpg',
      'images/8/image5.jpg',
    ],
  },
  {
    id: '9',
    name: 'Xiaomi Mi Band 6',
    price: 30000,
    currency: 'ars',
    description: '• Color de la malla: Black<br>• La malla es nueva y te doy una extra<br>• Material de la malla: TPU<br>• Versión del smartwatch: Sport<br>• Memoria interna de 16GB y RAM de 2MB<br>• Resiste hasta 50m bajo el agua<br>• Conectividad por Bluetooth<br>• Con pantalla AMOLED de 152px x 486px<br><br>Para más información: <a href="https://www.mercadolibre.com.ar/xiaomi-mi-smart-band-6-smart-watch-reloj-inteligente-color-malla-black/p/MLA17796174" target="_blank">Xiaomi Mi Smart Band 6 Smart Watch</a>',
    condition: 'good',
    status: 'available',
    images: [
      'images/9/image1.jpg',
      'images/9/image2.jpg',
      'images/9/image3.jpg',
      'images/9/image4.jpg'
    ],
  },
  {
    id: '10',
    name: 'Vodka Absolut Miniatura x 5 Botellitas',
    price: 20000,
    currency: 'ars',
    description: '5 botellitas de 50cl cada una con su caja de exhibición.<br>Los gustos son: Vanilia, Ruby Red, Pear, Raspberry y Citron.',
    condition: 'like new',
    status: 'available',
    images: [
      'images/10/image1.jpg'
    ],
  },
]