import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

/**
 * Página de Contacto con formulario y detalles de contacto
 */
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'sending' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: 'Enviando mensaje...' });

    try {
      // Aquí iría la lógica para enviar el formulario a tu backend o servicio de email
      // Por ahora simulamos un envío exitoso después de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ 
        status: 'success', 
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({ status: 'idle', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setFormStatus({ 
        status: 'error', 
        message: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
      title: 'Ubicación',
      content: 'Av. Principal 1234, Oficina 501, Ciudad, País',
      link: 'https://maps.google.com',
      linkText: 'Ver en el mapa'
    },
    {
      icon: <FaPhone className="w-6 h-6 text-primary" />,
      title: 'Teléfono',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      linkText: 'Llamar ahora'
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary" />,
      title: 'Correo Electrónico',
      content: 'hola@webix.com',
      link: 'mailto:hola@webix.com',
      linkText: 'Enviar correo'
    },
    {
      icon: <FaClock className="w-6 h-6 text-primary" />,
      title: 'Horario de Atención',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM',
      subcontent: 'Sábados: 10:00 AM - 2:00 PM',
      link: 'https://calendly.com/webix/consulta',
      linkText: 'Agendar cita'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulario de Contacto */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h2>
                <p className="text-gray-600 mb-8">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
                
                {formStatus.status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none bg-white"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="consulta">Consulta general</option>
                        <option value="cotizacion">Cotización de servicios</option>
                        <option value="soporte">Soporte técnico</option>
                        <option value="trabajo">Oportunidad laboral</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-gray-600">
                        Acepto la <a href="/privacidad" className="text-primary hover:underline">política de privacidad</a> y los <a href="/terminos" className="text-primary hover:underline">términos de servicio</a>.
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus.status === 'sending'}
                      className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus.status === 'sending' ? (
                        'Enviando...'
                      ) : (
                        <>
                          <span>Enviar mensaje</span>
                          <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">¿Prefieres el chat en vivo?</h3>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chatear por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Información de Contacto */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                        {item.subcontent && <p className="text-gray-600">{item.subcontent}</p>}
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-1 text-primary hover:underline"
                        >
                          {item.linkText}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Síguenos</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', url: 'https://facebook.com/webix', icon: 'FaFacebook' },
                      { name: 'Instagram', url: 'https://instagram.com/webix', icon: 'FaInstagram' },
                      { name: 'LinkedIn', url: 'https://linkedin.com/company/webix', icon: 'FaLinkedin' },
                      { name: 'Twitter', url: 'https://twitter.com/webix', icon: 'FaTwitter' }
                    ].map((social, index) => (
                      <a 
                        key={social.name}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label={social.name}
                      >
                        {[
  { name: 'Facebook', url: 'https://facebook.com/webix', icon: <FaFacebook className="w-5 h-5" /> },
  { name: 'Instagram', url: 'https://instagram.com/webix', icon: <FaInstagram className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/webix', icon: <FaLinkedin className="w-5 h-5" /> },
  { name: 'Twitter', url: 'https://twitter.com/webix', icon: <FaTwitter className="w-5 h-5" /> }
].map((social) => (
  <a 
    key={social.name}
    href={social.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
    aria-label={social.name}
  >
    {social.icon}
  </a>
))}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="h-96 w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152090566!2d-73.98784468459377!3d40.75798567932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ubicación de Webix"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
