
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          A Legacy of Style
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to AaLOK International, New England's first Indian boutique.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            We are a fusion-wear powerhouse dedicated to providing one-of-a-kind evening gowns for weddings, proms, galas, and any special event for women, men, and children.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Our passion is to blend traditional Indian artistry with contemporary fashion, creating timeless pieces that make you shine. This website showcases our portfolio of designs and the breadth of services we proudly offer.
          </p>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/woman in red gray saree.png" alt="Colorful Indian Fabrics" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
