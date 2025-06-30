import React from 'react';

const Ticker: React.FC = () => {
  const tickerText = "Sale Sale Sale ......... !!! We are celebrating you, the customer, with 20%-50% off on many items (jewelry and clothing). Gift items range from a gorgeous phone purses, scarves, to jumka earrings and elegant sarees! Please note we are closed on Thanksgiving weekend (Thurs & Frid), Christmas Day, and New Years Day.";

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="animate-marquee flex"> {/* Add flex here */}
        <span className="text-lg font-semibold mr-8 flex-shrink-0">{tickerText}</span> {/* Add flex-shrink-0 */}
        <span className="text-lg font-semibold mr-8 flex-shrink-0">{tickerText}</span> {/* Add flex-shrink-0 */}
      </div>
    </div>
  );
};

export default Ticker;
