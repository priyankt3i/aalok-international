
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Visit Us</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    We invite you to our boutique to experience the elegance of Aalok International. For beauty services, appointments are recommended.
                </p>

                <div className="mt-12 max-w-md mx-auto">
                    <div className="space-y-4 text-left text-base text-gray-700">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>404 Moody St, Waltham, MA 02453</span>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>(781) 642-1200​</span>
                        </div>
                        <div className="flex items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>support@aalokfashion.com ; aalokfashion@yahoo.com</span>
                        </div>
                    </div>
                     <button className="mt-8 w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-md text-base hover:bg-gray-900 transition-colors duration-300">
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
