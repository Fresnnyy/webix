import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaRocket className="w-8 h-8 text-primary" />,
    title: "Rápido y Eficiente",
    description: "Entregamos proyectos en tiempo récord sin comprometer la calidad. Tu sitio web estrá listo para funcionar en menos de lo que imaginas."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Enfocado en Resultados",
    description: "No solo creamos sitios web bonitos, diseñamos estrategias digitales que generan conversiones y crecimiento para tu negocio."
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
    title: "Totalmente Responsivo",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo móvil, tableta o computadora de escritorio."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    title: "Seguro y Confiable",
    description: "Implementamos las mejores prácticas de seguridad para proteger tu sitio web y los datos de tus clientes."
  }
];

/**
 * Sección que muestra los beneficios de trabajar con Webix
 */
const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            ¿Por qué elegir Webix?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ofrecemos soluciones digitales que realmente generan impacto en tu negocio.
          </motion.p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para llevar tu presencia digital al siguiente nivel?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Comencemos tu proyecto
            <FaRocket className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
