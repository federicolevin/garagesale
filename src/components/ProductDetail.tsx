import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MessageCircle } from 'lucide-react';
import '../styles/carousel.css'; // Import custom styles
import { products } from '../data/products';

const WHATSAPP_NUMBER = '+5491162943172';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Estoy interesado en ${product.name} publicado a $${product.price}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Products</Link>
      </nav>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-4">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="custom-carousel">
          {product.images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img src={image} alt={product.name} className="carousel-image" />
            </div>
          ))}
        </Carousel>
        <p className="mt-4 text-xl text-gray-700">${product.price}</p>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-2 text-gray-600">Condition: {product.condition}</p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={18} />
          Me interesa!
        </button>
      </div>
    </div>
  );
};
