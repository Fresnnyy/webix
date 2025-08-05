import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

/**
 * Componente de encabezado con navegación responsiva
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Portafolio', path: '#portafolio' },
    { name: 'Precios', path: '#precios' },
    { name: 'Contacto', path: '#contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/images/logo.png" 
              alt="Webix Logo" 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-primary">Webix</span>
          </Link>

          {/* Navegación para escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              Contáctanos
            </a>
          </nav>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.item}
                </Link>
              ))}
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
