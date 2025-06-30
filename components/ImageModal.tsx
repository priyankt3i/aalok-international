import React from 'react';

interface ImageModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  if (!src) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
