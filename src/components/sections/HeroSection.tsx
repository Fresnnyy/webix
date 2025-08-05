import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaPlay } from 'react-icons/fa';

/**
 * Sección Hero principal de la página de inicio
 */
const HeroSection: React.FC = () => {
  const features = [
    'Diseño profesional',
    'Desarrollo a medida',
    'Optimización SEO',
    'Soporte 24/7'
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Fondo con elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <span className="text-yellow-300 font-medium">¡Promoción especial!</span>
            <span className="ml-2 text-sm">Web desde $333/mes</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Impulsa tu negocio en el mundo digital
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
          >
            Soluciones web personalizadas que generan resultados. Diseñamos y desarrollamos experiencias digitales que convierten visitantes en clientes.
          </motion.p>

          {/* Características */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <FaCheckCircle className="text-green-300 mr-2" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Comenzar proyecto
              <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Video demo */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img 
                src="/assets/images/hero-demo.jpg" 
                alt="Demo de nuestros trabajos" 
                className="w-full h-auto"
              />
              <button 
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Ver video demo"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </button>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-dark blur-2xl opacity-30 -z-10 rounded-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
