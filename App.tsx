
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TailoringSection from './components/TailoringSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Make sure the path below matches the actual location of globals.css
// import '../styles/globals.css'; // Updated import path
// import '../styles/globals.css'; // Updated import path
import './styles/globals.css'; // Adjust the path if 'globals.css' is in 'styles' at the project root

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800">
      <div className="container mx-auto max-w-7xl bg-white my-8 shadow-lg">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <GallerySection />
          <TailoringSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
