
import React from 'react';

interface IconProps {
  src: string;
  alt: string;
}

const ServiceIcon: React.FC<IconProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-8 w-8 text-gray-400" />
);

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { icon: <ServiceIcon src="/icons/DesignerCollections.png" alt="Designer Collections" />, title: 'Designer Collections', description: 'Exquisite, ready-to-wear gowns for women, men, and children for any formal occasion.' },
    { icon: <ServiceIcon src="/icons/CustomTailoring.png" alt="Custom Tailoring" />, title: 'Custom Tailoring', description: 'Bespoke designs created from raw saree fabrics, tailored to your exact style and fit preferences.' },
    { icon: <ServiceIcon src="/icons/ExpertAlterations.png" alt="Expert Alterations" />, title: 'Expert Alterations', description: 'Perfecting the fit of your cherished garments to ensure you look and feel your best.' },
    { icon: <ServiceIcon src="/icons/Threading.png" alt="Threading" />, title: 'Threading', description: 'Specialty in threading eyebrows, face, etc.' },
    { icon: <ServiceIcon src="/icons/Waxing.png" alt="Waxing" />, title: 'Waxing', description: 'Professional waxing services for smooth skin.' },
    { icon: <ServiceIcon src="/icons/SkinTreatments.png" alt="Skin Treatments" />, title: 'Skin Treatments', description: 'Rejuvenating facials and skin treatments by our licensed beauticians, available by appointment.' },
    { icon: <ServiceIcon src="/icons/Makeup.png" alt="Makeup" />, title: 'Makeup', description: 'Professional makeup application for your special day.' },
    { icon: <ServiceIcon src="/icons/henna.png" alt="Henna" />, title: 'Henna', description: 'Intricate, beautiful Henna artistry for your special day.' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">One stop for all your fashion and beauty needs. Ready to make your day even more special.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
