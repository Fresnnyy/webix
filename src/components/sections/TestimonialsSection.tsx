import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'CEO, Tienda de Moda',
    content: 'Increíble el trabajo de Webix. Nuestro sitio web ha aumentado las ventas en un 200% desde su lanzamiento. El equipo fue profesional, atento y muy talentoso.',
    rating: 5,
    image: '/assets/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Dueño de Restaurante',
    content: 'La mejor inversión que hemos hecho para nuestro negocio. El diseño es impresionante y la funcionalidad es perfecta. ¡Nuestros clientes lo aman!',
    rating: 5,
    image: '/assets/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Ana Ramírez',
    role: 'Emprendedora',
    content: 'Trabajar con Webix ha sido una experiencia excepcional. Entendieron perfectamente mi visión y la superaron con creces. ¡Altamente recomendados!',
    rating: 5,
    image: '/assets/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    role: 'Director de Marketing',
    content: 'El equipo de Webix transformó nuestra presencia en línea. Su enfoque estratégico y atención al detalle son inigualables. ¡Los resultados hablan por sí solos!',
    rating: 5,
    image: '/assets/images/testimonial-4.jpg'
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, role, content, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para imágenes que no se carguen
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=AF4D98&color=fff`;
            }}
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <div className="ml-auto flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
            />
          ))}
        </div>
      </div>
      
      <div className="relative flex-grow">
        <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-1 left-0" />
        <p className="text-gray-700 pl-10 relative z-10">{content}</p>
      </div>
    </div>
  );
};

/**
 * Sección que muestra testimonios de clientes satisfechos
 */
const TestimonialsSection: React.FC = () => {
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
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Más de 150 negocios confían en nosotros para su presencia digital
          </motion.p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Logos de clientes */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-center text-gray-500 mb-8">Confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={`/assets/images/logo-${i}.png`} 
                  alt={`Logo de cliente ${i}`}
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    // Mostrar un placeholder si la imagen no se carga
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/150x50?text=Cliente+${i}`;
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
