import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaSearchDollar, FaBullhorn, FaPalette, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
    title: "Diseño Web",
    description: "Sitios web atractivos y funcionales diseñados para convertir visitantes en clientes.",
    features: [
      "Diseño personalizado",
      "Optimización móvil",
      "Integración de contenido"
    ]
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
    title: "Aplicaciones Móviles",
    description: "Aplicaciones nativas e híbridas que ofrecen una experiencia de usuario excepcional.",
    features: [
      "iOS y Android",
      "Diseño intuitivo",
      "Alto rendimiento"
    ]
  },
  {
    icon: <FaSearchDollar className="w-8 h-8 text-primary" />,
    title: "SEO Avanzado",
    description: "Mejoramos tu visibilidad en los motores de búsqueda para atraer más clientes calificados.",
    features: [
      "Investigación de palabras clave",
      "Optimización técnica",
      "Estrategia de contenido"
    ]
  },
  {
    icon: <FaBullhorn className="w-8 h-8 text-primary" />,
    title: "Publicidad Digital",
    description: "Campañas publicitarias efectivas que generan resultados medibles.",
    features: [
      "Google Ads",
      "Redes sociales",
      "Remarketing"
    ]
  },
  {
    icon: <FaPalette className="w-8 h-8 text-primary" />,
    title: "Diseño de Marca",
    description: "Creamos una identidad de marca única que destaca sobre la competencia.",
    features: [
      "Diseño de logo",
      "Manual de marca",
      "Materiales de marketing"
    ]
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Analítica Web",
    description: "Toma decisiones basadas en datos con nuestros informes detallados y análisis.",
    features: [
      "Google Analytics",
      "Informes personalizados",
      "Recomendaciones"
    ]
  }
];

/**
 * Sección que muestra los servicios ofrecidos por Webix
 */
const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluciones digitales integrales para hacer crecer tu negocio en línea
          </motion.p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: Math.floor(index / 3) * 0.2 + (index % 3) * 0.1
              }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                >
                  Saber más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Contáctanos para una solución personalizada.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Solicitar cotización
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
