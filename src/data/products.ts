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
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
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
      'image1.jpg',
      'image2.jpg'
    ]
  },
  {
    id: '3',
    name: 'Sillas x6',
    price: 420000,
    currency: 'ars',
    description: 'Medidas: 92cm alto x 43cm ancho x 63cm profundidad<br><br>• Altura al asiento: 52cm<br>• Material: Soga<br>• Apilable: No<br>',
    condition: 'like new',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg'
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
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
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
      'image1.jpg',
      'image2.jpg'
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
      'image1.jpg',
      'image2.jpg'
    ]
  },
  {
    id: '7',
    name: 'Cava de vinos con 2 estantes',
    price: 130000,
    currency: 'ars',
    description: 'Medidas: 110cm alto x 50cm ancho x 35cm profundidad<br><br>• Materiales: hierro y madera<br>• Capacidad para 20 botellas de vino<br>• Cuenta con un estante de chapa negra y otro de madera',
    condition: 'good',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg'
    ],
  },
  {
    id: '8',
    name: 'Mesa + sillas Acapulco',
    price: 120000,
    currency: 'ars',
    description: 'Juego de exterior compuesto por una mesa y dos sillas Acapulco.<br><br>• Material: Hierro y PVC<br>• Medidas aproximadas mesa: 55cm de altura x 58cm de diametro<br>• Vidrio de 4mm',
    condition: 'like new',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ],
  },
  {
    id: '9',
    name: 'Samsung Galaxy S22',
    price: 650,
    currency: 'usd',
    description: '• Color: Phantom Black<br>• 128GB de almacenamiento<br>• 8GB de memoria RAM<br>• MUY cuidado<br>• Se entrega con: caja, cable original sin estrenar, pin para bandeja SIM, funda transparente<br><br>Para más información: <a href="https://www.samsung.com/ar/smartphones/galaxy-s/galaxy-s22-phantom-black-128gb-sm-s901ezklaro/" target="_blank">Samsung Argentina</a>',
    condition: 'like new',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
    ],
  },
  {
    id: '10',
    name: 'Xiaomi Mi Band 6',
    price: 30000,
    currency: 'ars',
    description: '• Color de la malla: Black<br>• La malla es nueva y te doy una extra<br>• Material de la malla: TPU<br>• Versión del smartwatch: Sport<br>• Memoria interna de 16GB y RAM de 2MB<br>• Resiste hasta 50m bajo el agua<br>• Conectividad por Bluetooth<br>• Con pantalla AMOLED de 152px x 486px<br><br>Para más información: <a href="https://www.mercadolibre.com.ar/xiaomi-mi-smart-band-6-smart-watch-reloj-inteligente-color-malla-black/p/MLA17796174" target="_blank">Xiaomi Mi Smart Band 6 Smart Watch</a>',
    condition: 'good',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
    ],
  },
  {
    id: '11',
    name: 'Vodka Absolut Miniatura x 5 Botellitas',
    price: 20000,
    currency: 'ars',
    description: '5 botellitas de 50cl cada una con su caja de exhibición.<br>Los gustos son: Vanilia, Ruby Red, Pear, Raspberry y Citron.',
    condition: 'like new',
    status: 'available',
    images: [
      'image1.jpg'
    ],
  },
  {
    id: '12',
    name: 'Coctelera acero inoxidable',
    price: 10000,
    currency: 'ars',
    description: 'Capacidad 550ml aprox<br>• Accesorios: jigger, filtro y colador',
    condition: 'good',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ],
  },
  {
    id: '13',
    name: 'Cinta caminadora Ranbak 501',
    price: 500000,
    currency: 'ars',
    description: 'Muy poco uso, en caja original. Incluye manual de instrucciones<br><br>• Peso máximo soportado: 100kg.<br>• Alcanza una velocidad máxima de 6km/h.<br>• Su potencia es de 1.5hp.<br>• Con display. Información en pantalla: Calorías, Distancia, Tiempo, Velocidad.<br>• Cuenta con ruedas que facilitan su traslado.<br>• Accesorios: control remoto y llave de seguridad (apagado automático cuando se desconecta)<br>• Dimensiones: 100cm x 36cm<br>• Voltaje: 220V',
    condition: 'like new',
    status: 'available',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ],
  },
  {
    id: '14',
    name: 'Parrilla eléctrica Tromen Angus E480',
    price: 0,
    currency: 'ars',
    description: 'Medidas: 25cm alto x 48cm alto x 50cm profundidad<br><br>• Peso total 15kg<br>• Potencia: 1800W<br>• Consumo: 1,8kw/hora<br>• Accesorios: Módulo de plancha y parrilla enlozado',
    condition: 'like new',
    status: 'reserved',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
    ],
  }
]