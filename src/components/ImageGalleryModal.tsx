import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryModalProps {
  images: string[];
  currentIndex: number;
  productId: string; // Add productId prop
  onClose: () => void;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ images, currentIndex, productId, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };
  }, []);

  // Disable modal on desktop
  if (window.innerWidth >= 1024) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X size={48} /> {/* Larger X button */}
      </button>
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl">
          &lt;
        </button>
        <img src={`images/${productId}/${images[currentImageIndex]}`} alt={`Image ${currentImageIndex + 1}`} className="max-h-screen" />
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl">
          &gt;
        </button>
      </div>
    </div>
  );
};