
import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const categories = [
  { name: 'Anarkali', path: '/inventory/anarkali' },
  { name: 'Salwaar', path: '/inventory/salwaar' },
  { name: 'Saree', path: '/inventory/saree' },
  { name: 'Ghaghra', path: '/inventory/ghagra' },
];

const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categories[0].name);

  const getImagesForCategory = (categoryPath: string) => {
    switch (categoryPath) {
      case '/inventory/anarkali':
        return [
          '/inventory/anarkali/6daef0_3fc90eea524744b1bea1b3c0b6c64a1b.jpg',
          '/inventory/anarkali/6daef0_74e69e03a4274722b9ca7daa4b1c5b58.jpg',
          '/inventory/anarkali/6daef0_11240e3c856c40b1aba3c4e208adaebe.jpg',
          '/inventory/anarkali/6daef0_d8b0fe3395584803824144d3d2c561c3.jpg',
        ];
      case '/inventory/salwaar':
        return [
          '/inventory/salwaar/6daef0_a151ffc93d21497f8819d2f13330a20e.jpg',
        ];
      case '/inventory/saree':
        return [
          '/inventory/saree/6daef0_667eaac6c4ac403593304d6c03ca0509.jpg',
          '/inventory/saree/6daef0_08928c5806944390a1ff2ce00ff6629f.jpg',
        ];
      case '/inventory/ghagra':
        return [
          '/inventory/ghagra/6daef0_987baf7cdff8455de9d65359bc316f172.jpg',
          '/inventory/ghagra/6daef0_3164b5197e9d43f1b1e2884297c868b3.jpg',
          '/inventory/ghagra/6daef0_f02d25047a4442fa80ca9058077cc635.jpg',
        ];
      default:
        return [];
    }
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A glimpse into the world of Aalok International. Designs for women, men, and children.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`py-2 px-4 text-lg font-medium ${
                  activeTab === category.name
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`${activeTab === category.name ? 'block' : 'hidden'}`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category.name} Collection</h3>
              <ImageCarousel images={getImagesForCategory(category.path)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
