
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home">
      <div className="w-full bg-gray-100">
        <img 
          src="/madhubani art.png" 
          alt="Indian folk art of a peacock" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center space-x-2 py-4 border-b border-gray-200">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 w-2 rounded-full transition-colors ${i === 2 ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
