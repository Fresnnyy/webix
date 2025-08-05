import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaArrowLeft } from 'react-icons/fa';

/**
 * Página 404 personalizada que se muestra cuando no se encuentra una ruta
 */
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 text-red-600 mb-6">
          <svg 
            className="w-12 h-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">¡Ups! Página no encontrada</h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida. Por favor, verifica la URL o navega a una de las siguientes opciones:
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            <FaHome className="mr-2" />
            Ir al Inicio
          </Link>
          
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Contactar Soporte
          </Link>
        </div>
        
        <div className="text-center">
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Volver a la página anterior
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-16 text-center text-gray-500 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p>¿Crees que esto es un error? Por favor, <a href="mailto:soporte@webix.com" className="text-primary hover:underline">notifícanoslo</a>.</p>
        <p className="mt-2">Código de error: 404 - Página no encontrada</p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
