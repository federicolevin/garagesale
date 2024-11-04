import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ images, currentIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(currentIndex);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X size={48} /> {/* Larger X button */}
      </button>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl">
          &lt;
        </button>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-h-screen" />
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl">
          &gt;
        </button>
      </div>
    </div>
  );
};