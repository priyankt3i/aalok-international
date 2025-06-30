
import React from 'react';

const TailoringSection: React.FC = () => {
  return (
    <section id="tailoring" className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Your Vision, Our Craft
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      In addition to our designer fashion, AaLOK offers tailored designs that are created based on your unique preferences. We begin with raw, exquisite saree fabrics and cut them to the style and fit you request.
                  </p>
                   <p className="text-gray-600 leading-relaxed mb-8">
                      Our master tailors work with you every step of the way to bring your dream outfit to life, ensuring a perfect fit and a one-of-a-kind design.
                  </p>
                  <a href="#contact" className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-md text-base hover:bg-gray-900 transition-colors duration-300">
                      Consult Our Designers
                  </a>
              </div>
               <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop" alt="Tailor working on a garment" className="w-full h-full object-cover"/>
              </div>
          </div>
      </div>
    </section>
  );
};

export default TailoringSection;
