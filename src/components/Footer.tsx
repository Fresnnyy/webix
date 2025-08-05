import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

/**
 * Componente de pie de página con información de contacto y enlaces
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/webix', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com/webix', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/webix', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/webix', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '#servicios' },
        { name: 'Portafolio', path: '#portafolio' },
        { name: 'Precios', path: '#precios' },
        { name: 'Contacto', path: '#contacto' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Diseño Web', path: '#diseno-web' },
        { name: 'Marketing Digital', path: '#marketing-digital' },
        { name: 'Redes Sociales', path: '#redes-sociales' },
        { name: 'Branding', path: '#branding' },
        { name: 'SEO', path: '#seo' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos y Condiciones', path: '/terminos' },
        { name: 'Política de Privacidad', path: '/privacidad' },
        { name: 'Aviso Legal', path: '/aviso-legal' },
        { name: 'Cookies', path: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Logo y descripción */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/images/logo-white.png" 
                alt="Webix Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-white">Webix</span>
            </div>
            <p className="text-gray-300 mb-4">
              Soluciones digitales a medida para potenciar tu presencia en línea y hacer crecer tu negocio.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span className="text-gray-300">Av. Principal 1234, Ciudad, País</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:hola@webix.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  hola@webix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Webix. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Términos de servicio
              </Link>
              <Link to="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de privacidad
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
