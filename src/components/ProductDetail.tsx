import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MessageCircle } from 'lucide-react';
import '../styles/carousel.css'; // Import custom styles
import { products } from '../data/products';
import { ImageGalleryModal } from './ImageGalleryModal'; // Import the modal component

const WHATSAPP_NUMBER = '+5491162943172';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === id);

  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Estoy interesado en ${product.name} publicado a $${product.price}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const getConditionText = (condition: string) => {
    switch (condition) {
      case 'like new':
        return 'Como nuevo';
      case 'good':
        return 'Buen estado';
      case 'regular':
        return 'Aceptable';
      default:
        return condition;
    }
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">← Volver al listado</Link>
      </nav>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-4 relative">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="custom-carousel desktop-height">
          {product.images.map((image, index) => (
            <div key={index} className="carousel-image-container" onClick={() => handleImageClick(index)}>
              <img src={image} alt={product.name} className={`carousel-image ${product.status === 'sold' ? 'sold' : ''}`} />
            </div>
          ))}
        </Carousel>
        <span
          className={`absolute top-2 left-2 px-2 py-1 rounded-full text-sm font-medium ${
            product.status === 'available' ? 'bg-green-600 text-white' : product.status === 'reserved' ? 'bg-yellow-400 text-black' : 'bg-gray-400 text-black'
          }`}
        >
          {product.status === 'available' ? 'Disponible' : product.status === 'reserved' ? 'Reservado' : 'Vendido'}
        </span>
        <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
          {getConditionText(product.condition)}
        </span>
        <p className="mt-4 text-xl font-bold text-gray-700">${product.price}</p>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <button
          onClick={handleWhatsAppClick}
          className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            product.status === 'sold' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
          }`}
          disabled={product.status === 'sold'}
          style={{ float: 'right' }}
        >
          <MessageCircle size={18} />
          Me interesa!
        </button>
      </div>
      {showGallery && (
        <ImageGalleryModal
          images={product.images}
          currentIndex={currentImageIndex}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
};
