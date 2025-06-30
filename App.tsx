import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TailoringSection from './components/TailoringSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FashionShowGallery from './pages/FashionShowGallery';

const Home: React.FC = () => (
  <>
    <Hero />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <TailoringSection />
    {/* Button to redirect to Fashion Show Gallery */}
    <div className="text-center py-8">
      <Link to="/fashion-show-gallery" className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        View Full Gallery
      </Link>
    </div>
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="antialiased text-gray-800">
        <div className="container mx-auto max-w-7xl bg-white my-8 shadow-lg">
          <Header />
          <Ticker />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fashion-show-gallery" element={<FashionShowGallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
