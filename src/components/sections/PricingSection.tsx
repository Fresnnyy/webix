import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaStar, FaCrown } from 'react-icons/fa';

type BillingCycle = 'monthly' | 'annual';

const pricingPlans = [
  {
    name: 'Básico',
    price: {
      monthly: 299,
      annual: 250
    },
    description: 'Perfecto para emprendedores y pequeñas empresas que comienzan en línea.',
    features: [
      'Sitio web de 5 páginas',
      'Diseño responsivo',
      'Formulario de contacto',
      'Optimización básica SEO',
      'Soporte por correo electrónico',
      '1 Revisión de diseño'
    ],
    popular: false,
    icon: <FaRocket className="w-6 h-6 text-primary" />
  },
  {
    name: 'Profesional',
    price: {
      monthly: 599,
      annual: 500
    },
    description: 'Ideal para negocios en crecimiento que necesitan más funcionalidades.',
    features: [
      'Sitio web de 15 páginas',
      'Diseño personalizado',
      'Blog integrado',
      'Optimización SEO avanzada',
      'Soporte prioritario',
      '3 Revisiones de diseño',
      'Estadísticas básicas',
      'Integración con redes sociales'
    ],
    popular: true,
    icon: <FaStar className="w-6 h-6 text-yellow-400" />
  },
  {
    name: 'Premium',
    price: {
      monthly: 999,
      annual: 850
    },
    description: 'Solución completa para empresas que buscan el máximo rendimiento.',
    features: [
      'Sitio web ilimitado',
      'Diseño premium personalizado',
      'Tienda en línea (hasta 50 productos)',
      'SEO avanzado + SEM',
      'Soporte 24/7',
      'Revisiones ilimitadas',
      'Analíticas avanzadas',
      'Integración con CRM',
      'Copia de seguridad diaria',
      'Certificado SSL incluido'
    ],
    popular: false,
    icon: <FaCrown className="w-6 h-6 text-purple-500" />
  }
];

/**
 * Sección que muestra los planes de precios de Webix
 */
const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
    setIsAnnual(!isAnnual);
  };

  return (
    <section id="precios" className="py-20 bg-white">
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
            Precios Transparentes
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
          </motion.p>
          
          {/* Selector de facturación */}
          <motion.div 
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-gray-500'}`}>
              Mensual
            </span>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={toggleBillingCycle}
              aria-pressed={isAnnual}
              aria-label="Toggle billing cycle"
            >
              <span className="sr-only">Cambiar a facturación {isAnnual ? 'mensual' : 'anual'}</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="ml-4 font-medium">
              <span className={billingCycle === 'annual' ? 'text-primary' : 'text-gray-500'}>
                Anual
              </span>
              {billingCycle === 'annual' && (
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  ¡Ahorra 15%!
                </span>
              )}
            </span>
          </motion.div>
        </div>

        {/* Planes de precios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  isPopular 
                    ? 'border-primary shadow-lg transform scale-105 z-10' 
                    : 'border-gray-200 shadow-sm'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">${price}</span>
                      <span className="ml-1 text-gray-500">/mes</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-gray-500 mt-1">Facturado anualmente (${price * 12}/año)</p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                      isPopular 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Comenzar con {plan.name}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota al pie */}
        <motion.div 
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>¿Necesitas una solución personalizada? <a href="#contacto" className="text-primary hover:underline">Contáctanos</a> para un presupuesto a medida.</p>
          <p className="mt-2">Sin cargos ocultos. Cancela en cualquier momento.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
