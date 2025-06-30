import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We'd love to hear from you! Reach out with any questions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-700">
                            <p><strong>Phone:</strong></p>
                            <p><a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-500">+1 (234) 567-890</a></p>                         
                            <p><strong>Email:</strong></p>
                            <p><a href="mailto:info@aalokfashion.com" className="text-indigo-600 hover:text-indigo-500">info@aalokfashion.com</a></p>
                            <p><a href="mailto:aalokfashion@yahoo.com" className="text-indigo-600 hover:text-indigo-500">aalokfashion@yahoo.com</a></p>

            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Hours</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Tuesdays - Saturdays:</strong> 11 AM - 8 PM</p>
              <p><strong>Sundays:</strong> 1 PM - 7 PM</p>
              <p>Closed Mondays, all state & federal holidays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;