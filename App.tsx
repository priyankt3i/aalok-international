import React, { useState } from 'react';
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
import Chatbot from './components/Chatbot';
import StoryModal from './components/StoryModal'; // Import StoryModal

const storyContent = (
  <>
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
      The Thread That Connects Generations: Pushpa Karna's Journey with Aalok Fashion
    </h2>
    <p className="text-base text-gray-700 mb-4 leading-relaxed">
      In the bustling heart of Waltham, Massachusetts, amidst a vibrant tapestry of cultures, stands{' '}
      <strong>Aalok Fashion</strong> – more than just a store, it's a testament to the enduring power of tradition,
      community, and the vision of one remarkable woman, <strong>Pushpa Karna</strong>. For a quarter-century, since
      the year 2000, Pushpa has poured her soul into creating a space where fashion transcends mere clothing,
      becoming a celebration of identity, confidence, and new beginnings.
    </p>
    <p className="text-base text-gray-700 mb-4 leading-relaxed">
      Pushpa’s journey to becoming the guiding force behind Aalok Fashion wasn't a straightforward one. Before
      envisioning rows of shimmering <strong>anarkalis</strong>, elegant <strong>sarees</strong>, and intricately
      designed <strong>ghagras</strong>, she honed a different kind of precision as a technician at{' '}
      <strong>Ophthalmic Consultants of Boston</strong>. This background, while seemingly disparate, speaks to a
      meticulous nature and a dedication to detail that she would later seamlessly weave into her true calling.
    </p>
    <p className="text-base text-gray-700 mb-4 leading-relaxed">
      The genesis of Aalok Fashion was deeply personal. With daughters in their early twenties, Pushpa observed a
      gap in the market – a scarcity of authentic yet contemporary <em>desi</em> (cultural) attire that truly
      resonated with the younger generation. It was a simple observation, but it sparked a profound realization:
      fashion is not just about what you wear, but how it makes you feel. It's about confidence, expression, and a
      connection to one's roots. This "necessity" blossomed into the "invention" of Aalok International, a place
      where people of all backgrounds could find a form of expression in beauty and style.
    </p>
    <p className="text-base text-gray-700 mb-4 leading-relaxed">
      Walk into Aalok Fashion today, and you'll discover a treasure trove of traditional and contemporary Indian
      clothing, from party-ready ensembles to comfortable casual wear. Beyond the exquisite garments, the store
      offers a range of beauty services, including expert <strong>threading</strong>, transformative{' '}
      <strong>makeup</strong>, and intricate <strong>henna application</strong>. This holistic approach reflects
      Pushpa's understanding that true beauty is multifaceted.
    </p>
    <p className="text-base text-gray-700 mb-4 leading-relaxed">
      For Pushpa, Aalok Fashion is far more than a retail establishment; it's a community hub. It's where brides
      and grooms find their perfect attire for a new life chapter, where individuals discover pieces that bring a
      sense of culture to their globally-minded perspectives, and where simple threading appointments can lead to
      moments of joy and connection. As her granddaughter beautifully puts it, Pushpa is on "quite a mission."
      Aalok Fashion has become a "beginning for so many people’s livelihoods and moments of happiness," empowering
      countless women who started there to build their own ventures.
    </p>
    <p className="text-base text-gray-700 leading-relaxed">
      Pushpa's story is a powerful reminder that following your passion, no matter how winding the path, can lead
      to incredible impact. Her dedication to blending tradition with modern sensibilities, her commitment to her
      community, and her unwavering belief in the empowering nature of fashion have made Aalok Fashion a true
      cornerstone in Waltham. It is a place where every stitch tells a story, and every customer leaves feeling
      intelligent, peaceful, and beautiful.
    </p>
  </>
);

const Home: React.FC<{ openStoryModal: () => void }> = ({ openStoryModal }) => (
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
    <Contact openStoryModal={openStoryModal} /> {/* Pass openStoryModal to Contact */}
  </>
);

const App: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const openStoryModal = () => setIsStoryModalOpen(true);
  const closeStoryModal = () => setIsStoryModalOpen(false);

  return (
    <Router>
      <div className="antialiased text-gray-800">
        <div className="container mx-auto max-w-7xl bg-white my-8 shadow-lg">
          <Header openStoryModal={openStoryModal} /> {/* Pass openStoryModal to Header */}
          <Ticker />
          <main>
            <Routes>
              <Route path="/" element={<Home openStoryModal={openStoryModal} />} /> {/* Pass openStoryModal to Home */}
              <Route path="/fashion-show-gallery" element={<FashionShowGallery />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </div>
      <StoryModal isOpen={isStoryModalOpen} onClose={closeStoryModal}>
        {storyContent}
      </StoryModal>
    </Router>
  );
};

export default App;
