import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPenFancy, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="w-6 h-6" />,
    title: "1. Análisis",
    description: "Analizamos tus necesidades y objetivos para entender cómo podemos ayudarte a alcanzar el éxito en línea.",
    color: "text-blue-500"
  },
  {
    icon: <FaPenFancy className="w-6 h-6" />,
    title: "2. Diseño",
    description: "Creamos diseños personalizados que reflejan la identidad de tu marca y cautivan a tu audiencia.",
    color: "text-purple-500"
  },
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "3. Desarrollo",
    description: "Desarrollamos tu sitio web con las últimas tecnologías, asegurando un rendimiento óptimo.",
    color: "text-green-500"
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "4. Lanzamiento",
    description: "Lanzamos tu proyecto y realizamos seguimiento para garantizar que todo funcione perfectamente.",
    color: "text-yellow-500"
  }
];

/**
 * Sección que muestra el proceso de trabajo de Webix
 */
const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
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
            Nuestro Proceso
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Un enfoque probado para garantizar el éxito de tu proyecto digital
          </motion.p>
        </div>

        {/* Proceso en pasos */}
        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2"></div>
          
          {/* Pasos */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Contenido del paso */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className={`w-12 h-12 rounded-full ${step.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Punto en la línea de tiempo */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                
                {/* Espacio para el paso par */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Llamado a la acción */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Solicitar cotización
            <FaRocket className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
