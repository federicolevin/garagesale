import React, { useState } from 'react';
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
      `Hi! I'm interested in your ${product.name} listed for $${product.price}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setShowGallery(true)}
          />
          <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
            {product.condition}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              Contact
            </button>
          </div>
        </div>
      </div>

      {showGallery && (
        <ImageGalleryModal
          images={product.images}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}