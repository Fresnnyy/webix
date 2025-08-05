import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaBullhorn, FaPenFancy, FaChartLine } from 'react-icons/fa';

/**
 * Página de Servicios que muestra todos los servicios ofrecidos por Webix
 */
const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Diseño Web Profesional',
      description: 'Creamos sitios web atractivos, rápidos y optimizados para conversiones que reflejan la esencia de tu marca.',
      icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Integración de redes sociales',
        'Formularios de contacto',
        'Panel de administración',
        'Certificado SSL incluido'
      ],
      popular: true
    },
    {
      id: 2,
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Aplicaciones nativas e híbridas para iOS y Android que ofrecen una experiencia de usuario excepcional.',
      icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
      features: [
        'Aplicaciones iOS y Android',
        'Diseño UI/UX personalizado',
        'Integración con APIs',
        'Notificaciones push',
        'Publicación en tiendas',
        'Mantenimiento continuo'
      ],
      popular: false
    },
    {
      id: 3,
      title: 'Posicionamiento SEO',
      description: 'Mejoramos tu visibilidad en los motores de búsqueda para atraer tráfico de calidad a tu sitio web.',
      icon: <FaSearch className="w-8 h-8 text-primary" />,
      features: [
        'Investigación de palabras clave',
        'Optimización On-Page',
        'Link Building',
        'Informes mensuales',
        'Optimización técnica',
        'Estrategia de contenido'
      ],
      popular: false
    },
    {
      id: 4,
      title: 'Publicidad Digital',
      description: 'Campañas publicitarias efectivas en Google Ads, Facebook Ads y otras plataformas digitales.',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />,
      features: [
        'Google Ads',
        'Facebook & Instagram Ads',
        'LinkedIn Ads',
        'Campañas de remarketing',
        'Análisis de competencia',
        'Optimización continua'
      ],
      popular: true
    },
    {
      id: 5,
      title: 'Diseño de Marca',
      description: 'Desarrollamos identidades de marca memorables que conectan emocionalmente con tu audiencia.',
      icon: <FaPenFancy className="w-8 h-8 text-primary" />,
      features: [
        'Diseño de logotipo',
        'Manual de marca',
        'Papelería corporativa',
        'Presentaciones',
        'Material publicitario',
        'Diseño de empaques'
      ],
      popular: false
    },
    {
      id: 6,
      title: 'Marketing de Contenidos',
      description: 'Estrategias de contenido que atraen, involucran y convierten a tu audiencia objetivo.',
      icon: <FaChartLine className="w-8 h-8 text-primary" />,
      features: [
        'Estrategia de contenido',
        'Blogging profesional',
        'Redes sociales',
        'Email marketing',
        'Infografías',
        'Videos promocionales'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades y objetivos para crear una estrategia personalizada.'
    },
    {
      step: '02',
      title: 'Planificación',
      description: 'Desarrollamos un plan detallado con plazos, entregables y métricas de éxito.'
    },
    {
      step: '03',
      title: 'Diseño',
      description: 'Creamos diseños atractivos y funcionales que reflejen la identidad de tu marca.'
    },
    {
      step: '04',
      title: 'Desarrollo',
      description: 'Implementamos las soluciones técnicas con los más altos estándares de calidad.'
    },
    {
      step: '05',
      title: 'Pruebas',
      description: 'Realizamos pruebas exhaustivas para garantizar un rendimiento óptimo.'
    },
    {
      step: '06',
      title: 'Lanzamiento',
      description: 'Implementamos la solución y monitoreamos su rendimiento para asegurar el éxito.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Soluciones digitales integrales diseñadas para impulsar el crecimiento de tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluciones a tu Medida</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios digitales para ayudarte a alcanzar tus objetivos comerciales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  {service.popular && (
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      MÁS POPULAR
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contacto"
                    className={`inline-flex items-center font-medium ${
                      service.popular ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    Saber más
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar resultados excepcionales en cada proyecto.
            </p>
          </motion.div>

          <div className="relative">
            {/* Línea de tiempo */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-dark -ml-0.5"></div>
            
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:mt-24'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`md:absolute top-0 ${
                    index % 2 === 0 ? 'md:-right-12' : 'md:-left-12'
                  }`}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 md:mt-0">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Contáctanos
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
