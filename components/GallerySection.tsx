
import React from 'react';
import type { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1581338834647-b5fb373024e2?w=500&h=700&fit=crop', alt: 'Elegant woman in red gown', category: 'Women' },
  { id: 2, src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&h=700&fit=crop', alt: 'Man in traditional attire', category: 'Men' },
  { id: 3, src: 'https://images.unsplash.com/photo-1551803091-e25620473ae8?w=500&h=700&fit=crop', alt: 'Woman in ornate dress', category: 'Women' },
  { id: 4, src: 'https://images.unsplash.com/photo-1611892880974-883a1f2fbf49?w=500&h=700&fit=crop', alt: 'Child in festive clothing', category: 'Children' },
  { id: 5, src: 'https://images.unsplash.com/photo-1594382176233-a885e353841e?w=500&h=700&fit=crop', alt: 'Woman in a vibrant saree', category: 'Women' },
  { id: 6, src: 'https://images.unsplash.com/photo-1599763242946-8a712f3e8f80?w=500&h=700&fit=crop', alt: 'Man in a formal sherwani', category: 'Men' },
  { id: 7, src: 'https://images.unsplash.com/photo-1617137968429-936b8a8b9c6d?w=500&h=700&fit=crop', alt: 'Detailed embroidery on a dress', category: 'Women' },
  { id: 8, src: 'https://images.unsplash.com/photo-1603792228532-6c731424b47c?w=500&h=700&fit=crop', alt: 'Couple in wedding attire', category: 'Women' },
];

const GalleryImage: React.FC<{ item: GalleryItem }> = ({ item }) => (
    <div className="group relative overflow-hidden rounded-md cursor-pointer">
        <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 p-3">
            <span className="bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
        </div>
    </div>
);

const GallerySection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A glimpse into the world of Aalok International. Designs for women, men, and children.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map(item => <GalleryImage key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
