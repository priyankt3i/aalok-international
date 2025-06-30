
import React from 'react';
import type { Service } from '../types';

const FashionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 11V3m0 8h.01M4 21h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1zM4 11h16" /></svg>
);
const BeautyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v11.494m-6.253-5.747h12.506" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.247 3.5a4.5 4.5 0 017.506 0" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.247 20.5a4.5 4.5 0 007.506 0" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 15.753a4.5 4.5 0 010-7.506" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.5 15.753a4.5 4.5 0 000-7.506" /></svg>
);
const HennaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.665 11.583A8.468 8.468 0 0012 5.5c-4.686 0-8.485 3.799-8.485 8.485v.015A8.47 8.47 0 0012 22.5c2.973 0 5.618-1.52 7.14-3.835" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.532 17.52a.5.5 0 11-.998.056l.998-.056zm-2.03-1.02a.5.5 0 11-.943.33l.943-.33zM4.5 13.985a.5.5 0 11.224.947l-.224-.947zm13.5-3a.5.5 0 11.33.943l-.33-.943zM15 4.5a.5.5 0 11.947-.224L15 4.5zM3.4 8.5a.5.5 0 11.947.224L3.4 8.5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9.5a1 1 0 11-2 0 1 1 0 012 0zm5-2a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
);
const TailorIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>);
const AlterationsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v8" /></svg>);
const SkinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const fashionServices: Service[] = [
    { icon: <FashionIcon />, title: 'Designer Collections', description: 'Exquisite, ready-to-wear gowns for women, men, and children for any formal occasion.' },
    { icon: <TailorIcon />, title: 'Custom Tailoring', description: 'Bespoke designs created from raw saree fabrics, tailored to your exact style and fit preferences.' },
    { icon: <AlterationsIcon />, title: 'Expert Alterations', description: 'Perfecting the fit of your cherished garments to ensure you look and feel your best.' },
  ];

  const beautyServices: Service[] = [
    { icon: <BeautyIcon />, title: 'Threading & Waxing', description: 'Specialty in threading eyebrows, face, etc., alongside professional waxing services.' },
    { icon: <SkinIcon />, title: 'Skin Treatments', description: 'Rejuvenating facials and skin treatments by our licensed beauticians, available by appointment.' },
    { icon: <HennaIcon />, title: 'Makeup & Henna', description: 'Professional makeup application and intricate, beautiful Henna artistry for your special day.' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">One stop for all your fashion and beauty needs. Ready to make your day even more special.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionServices.map(service => <ServiceCard key={service.title} {...service} />)}
            {beautyServices.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
