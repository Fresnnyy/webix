import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

/**
 * Página "Nosotros" que muestra información sobre la agencia Webix
 */
const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'María García',
      role: 'Fundadora & CEO',
      bio: 'Especialista en Marketing Digital con más de 10 años de experiencia ayudando a negocios a crecer en línea.',
      image: '/assets/images/team/member1.jpg'
    },
    {
      id: 2,
      name: 'Carlos López',
      role: 'Director Creativo',
      bio: 'Diseñador gráfico y UX/UI con una pasión por crear experiencias digitales memorables.',
      image: '/assets/images/team/member2.jpg'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Desarrolladora Senior',
      bio: 'Ingeniera de software especializada en desarrollo frontend y optimización de rendimiento.',
      image: '/assets/images/team/member3.jpg'
    },
    {
      id: 4,
      name: 'Javier Ruiz',
      role: 'Especialista SEO',
      bio: 'Experto en posicionamiento web y estrategias de contenido para mejorar la visibilidad en buscadores.',
      image: '/assets/images/team/member4.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Siempre buscamos las últimas tendencias y tecnologías para ofrecer soluciones vanguardistas.',
      icon: <FaLightbulb className="w-8 h-8 text-primary" />
    },
    {
      title: 'Transparencia',
      description: 'Mantenemos una comunicación clara y honesta en cada paso del proceso.',
      icon: <FaChartLine className="w-8 h-8 text-primary" />
    },
    {
      title: 'Compromiso',
      description: 'Nos involucramos profundamente en cada proyecto para garantizar el éxito de nuestros clientes.',
      icon: <FaRocket className="w-8 h-8 text-primary" />
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Creemos en la sinergia y colaboración para alcanzar resultados excepcionales.',
      icon: <FaUsers className="w-8 h-8 text-primary" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              En Webix, combinamos creatividad, tecnología y estrategia para crear soluciones digitales que impulsan el crecimiento de tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada en 2018, Webix nació de la pasión por crear experiencias digitales excepcionales que realmente marquen la diferencia para los negocios.
                </p>
                <p>
                  Lo que comenzó como un pequeño equipo de entusiastas del marketing digital ha crecido hasta convertirse en una agencia reconocida que ha ayudado a más de 150 negocios a alcanzar sus objetivos en línea.
                </p>
                <p>
                  Nuestro enfoque centrado en el cliente y nuestra dedicación a la excelencia nos han permitido construir relaciones duraderas y generar resultados tangibles para nuestros clientes.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/assets/images/about-story.jpg" 
                alt="Nuestro equipo trabajando" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principios fundamentales que guían cada decisión que tomamos y cada proyecto que emprendemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conoce a Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertos apasionados por crear soluciones digitales excepcionales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=AF4D98&color=fff&size=400`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu próximo proyecto?</h2>
            <p className="text-xl mb-8 text-white/90">
              Únete a más de 150 negocios que ya confían en nosotros para su transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Contáctanos
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
