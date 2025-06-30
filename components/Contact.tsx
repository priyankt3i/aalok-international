import React, { useState } from 'react';
import StoryModal from './StoryModal';

const Contact: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const openStoryModal = () => setIsStoryModalOpen(true);
  const closeStoryModal = () => setIsStoryModalOpen(false);

  const storyContent = (
    <>
<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
  The Thread That Connects Generations: Pushpa Karna's Journey with Aalok Fashion
</h2>

<div class="image-with-text-container">
  <figure class="float-image-container">
    <img src="../pushpa.png" alt="Founder: Aalok International" class="rounded-lg shadow-md mb-2" />
    <figcaption class="text-sm text-gray-600 text-center">
      * Pushpa Karna, the visionary behind Aalok Fashion.
    </figcaption>
  </figure>
  <p class="text-base text-gray-700 mb-4 leading-relaxed">
    <br>
    </br>In the bustling heart of Waltham, Massachusetts, amidst a vibrant tapestry of cultures, stands
    <strong>Aalok Fashion</strong> – more than just a store, it's a testament to the enduring power of tradition,
    community, and the vision of one remarkable woman, <strong>Pushpa Karna</strong>. For a quarter-century, since
    the year 2000, Pushpa has poured her soul into creating a space where fashion transcends mere clothing,
    becoming a celebration of identity, confidence, and new beginnings. Pushpa’s journey to becoming the guiding force behind Aalok Fashion wasn't a straightforward one. Before
  envisioning rows of shimmering <strong>anarkalis</strong>, elegant <strong>sarees</strong>, and intricately
  designed <strong>ghagras</strong>.
  </p>
</div>

<p class="text-base text-gray-700 mb-4 leading-relaxed">
  She honed a different kind of precision as a technician at
  <strong> Ophthalmic Consultants of Boston</strong>. This background, while seemingly disparate, speaks to a
  meticulous nature and a dedication to detail that she would later seamlessly weave into her true calling.
</p>
<p class="text-base text-gray-700 mb-4 leading-relaxed">
  The genesis of Aalok Fashion was deeply personal. With daughters in their early twenties, Pushpa observed a
  gap in the market – a scarcity of authentic yet contemporary <em>desi</em> (cultural) attire that truly
  resisted with the younger generation. It was a simple observation, but it sparked a profound realization:
  fashion is not just about what you wear, but how it makes you feel. It's about confidence, expression, and a
  connection to one's roots. This "necessity" blossomed into the "invention" of Aalok International, a place
  where people of all backgrounds could find a form of expression in beauty and style.
</p>
<p class="text-base text-gray-700 mb-4 leading-relaxed">
  Walk into Aalok Fashion today, and you'll discover a treasure trove of traditional and contemporary Indian
  clothing, from party-ready ensembles to comfortable casual wear. Beyond the exquisite garments, the store
  offers a range of beauty services, including expert <strong> threading</strong>, transformative
  <strong> makeup</strong>, and intricate <strong> henna application</strong>. This holistic approach reflects
  Pushpa's understanding that true beauty is multifaceted.
</p>
<p class="text-base text-gray-700 mb-4 leading-relaxed">
  For Pushpa, Aalok Fashion is far more than a retail establishment; it's a community hub. It's where brides
  and grooms find their perfect attire for a new life chapter, where individuals discover pieces that bring a
  sense of culture to their globally-minded perspectives, and where simple threading appointments can lead to
  moments of joy and connection. As her granddaughter beautifully puts it, Pushpa is on "quite a mission."
  Aalok Fashion has become a "beginning for so many people’s livelihoods and moments of happiness," empowering
  countless women who started there to build their own ventures.
</p>
<p class="text-base text-gray-700 leading-relaxed">
  Pushpa's story is a powerful reminder that following your passion, no matter how winding the path, can lead
  to incredible impact. Her dedication to blending tradition with modern sensibilities, her commitment to her
  community, and her unwavering belief in the empowering nature of fashion have made <strong>Aalok Fashion</strong> a true
  cornerstone in Waltham. It is a place where every stitch tells a story, and every customer leaves feeling
  intelligent, peaceful, and beautiful.
</p>
    </>
  );

  return (
    <section id="contact" className="bg-gray-50 py-16 lg:py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        {/* The Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Story</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto mb-8">
            Discover the inspiring journey behind Aalok International.
          </p>
          <button
            onClick={openStoryModal}
            className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read Our Story
          </button>
        </div>

        {/* Contact Us Section */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We'd love to hear from you! Reach out with any questions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Phone:</strong>
              </p>
              <p>
                <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-500">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <strong>Email:</strong>
              </p>
              <p>
                <a href="mailto:info@aalokfashion.com" className="text-indigo-600 hover:text-indigo-500">
                  info@aalokfashion.com
                </a>
              </p>
              <p>
                <a href="mailto:aalokfashion@yahoo.com" className="text-indigo-600 hover:text-indigo-500">
                  aalokfashion@yahoo.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Hours</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Tuesdays - Saturdays:</strong> 11 AM - 8 PM
              </p>
              <p>
                <strong>Sundays:</strong> 1 PM - 7 PM
              </p>
              <p>Closed Mondays, All State & Federal Holidays</p>
            </div>
          </div>
        </div>
      </div>
      <StoryModal isOpen={isStoryModalOpen} onClose={closeStoryModal}>
        {storyContent}
      </StoryModal>
    </section>
  );
};

export default Contact;
