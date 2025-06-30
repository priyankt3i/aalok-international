
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-500 border-t border-gray-200">
            <div className="container mx-auto px-6 py-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Aalok International. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
