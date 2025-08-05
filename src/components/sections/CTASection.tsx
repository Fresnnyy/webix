import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPhone, FaEnvelope } from 'react-icons/fa';

/**
 * Sección de llamado a la acción final de la página de inicio
 */
const CTASection: React.FC = () => {
  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark -skew-y-2 origin-top-left -z-10">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para impulsar tu negocio en línea?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </motion.p>

          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <FaRocket className="mr-2" />
              Comenzar proyecto
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <FaPhone className="mr-2" />
              Llamar ahora
            </a>
          </motion.div>

          {/* Información de contacto */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-medium mb-2">Envíanos un correo</h4>
              <a href="mailto:hola@webix.com" className="text-gray-200 hover:text-white transition-colors">
                hola@webix.com
              </a>
            </div>

            {/* Teléfono */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-medium mb-2">Llámanos</h4>
              <a href="tel:+1234567890" className="text-gray-200 hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            {/* Horario */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Horario de atención</h4>
              <p className="text-gray-200">Lun - Vie: 9am - 6pm</p>
              <p className="text-gray-200">Sábados: 10am - 2pm</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formulario de contacto flotante */}
      <motion.div 
        id="contact-form"
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 -mb-40 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cuéntanos sobre tu proyecto</h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés</label>
            <select 
              id="service" 
              name="service" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none bg-white"
            >
              <option value="">Selecciona un servicio</option>
              <option value="web">Diseño Web</option>
              <option value="mobile">Aplicaciones Móviles</option>
              <option value="seo">SEO y Marketing Digital</option>
              <option value="branding">Diseño de Marca</option>
              <option value="other">Otro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Cuéntanos más sobre tu proyecto..."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="privacy" 
              name="privacy" 
              required 
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
              Acepto la <a href="/privacidad" className="text-primary hover:underline">política de privacidad</a> y los <a href="/terminos" className="text-primary hover:underline">términos de servicio</a>
            </label>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Enviar mensaje
              <FaRocket className="ml-2" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default CTASection;
