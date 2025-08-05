import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/assets/images/logo.png" alt="Webix Logo" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-bold text-primary">Webix</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-primary hover:text-accent">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-primary hover:text-accent">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-primary hover:text-accent">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;