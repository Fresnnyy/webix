import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaSmile, FaRocket, FaTrophy } from 'react-icons/fa';

const metrics = [
  {
    icon: <FaGlobe className="w-8 h-8" />,
    value: 150,
    suffix: "+",
    label: "Proyectos Completados"
  },
  {
    icon: <FaSmile className="w-8 h-8" />,
    value: 98,
    suffix: "%",
    label: "Clientes Satisfechos"
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    value: 10,
    suffix: "x",
    label: "Crecimiento Promedio"
  },
  {
    icon: <FaTrophy className="w-8 h-8" />,
    value: 15,
    suffix: "+",
    label: "Premios y Reconocimientos"
  }
];

/**
 * Sección que muestra métricas y logros de Webix
 */
const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {metric.value}
                <span className="text-yellow-300">{metric.suffix}</span>
              </div>
              <div className="text-lg text-gray-200">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Impulsando el éxito de nuestros clientes</h3>
          <p className="text-gray-200">
            En Webix, nos enorgullece haber ayudado a cientos de negocios a crecer en el mundo digital. 
            Nuestro enfoque centrado en el cliente y resultados medibles nos ha permitido construir una reputación de excelencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
