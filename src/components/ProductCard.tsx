import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';
import { ImageGalleryModal } from './ImageGalleryModal';

interface ProductCardProps {
  product: Product;
  phoneNumber: string;
}

export function ProductCard({ product, phoneNumber }: ProductCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Estoy interesado en ${product.name} publicado a $${product.price}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  const displayPrice = product.currency === 'usd' ? `US$${formattedPrice}` : `$${formattedPrice}`;

  return (
    <>
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${product.status === 'sold' ? 'filter grayscale' : ''}`}>
        <div className="relative h-48 overflow-hidden">
          <Link to={`/${product.id}`}>
            <img
              src={`images/${product.id}/${product.images[0]}`}
              alt={product.name}
              className={`w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity ${product.status === 'sold' ? 'sold' : ''}`}
            />
          </Link>
          <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
            {getConditionText(product.condition)}
          </span>
          <span
            className={`absolute top-2 left-2 px-2 py-1 rounded-full text-sm font-medium ${
              product.status === 'available' ? 'bg-green-600 text-white' : product.status === 'reserved' ? 'bg-yellow-400 text-black' : 'bg-gray-400 text-black'
            }`}
          >
            {product.status === 'available' ? 'Disponible' : product.status === 'reserved' ? 'Reservado' : 'Vendido'}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            <Link to={`/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: product.description }}></p>
          <Link to={`/${product.id}`} className="text-blue-500 hover:underline text-sm">Ver más</Link>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">{displayPrice}</span>
            <button
              onClick={handleWhatsAppClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                product.status === 'sold' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
              }`}
              disabled={product.status === 'sold'}
            >
              <MessageCircle size={18} />
              Me interesa!
            </button>
          </div>
        </div>
      </div>

      {showGallery && (
        <ImageGalleryModal
          images={product.images}
          currentIndex={0} // or any appropriate index
          productId={product.id} // Pass productId prop
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}