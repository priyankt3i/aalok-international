import React from 'react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 text-3xl font-bold bg-transparent hover:text-gray-900 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="prose max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
