import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import MetricsSection from '../components/sections/MetricsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import ServicesSection from '../components/sections/ServicesSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

/**
 * Página principal de la aplicación Webix
 */
const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Sección Hero */}
      <HeroSection />
      
      {/* Beneficios */}
      <BenefitsSection />
      
      {/* Métricas */}
      <MetricsSection />
      
      {/* Cómo funciona */}
      <HowItWorksSection />
      
      {/* Servicios */}
      <ServicesSection />
      
      {/* Precios */}
      <PricingSection />
      
      {/* Testimonios */}
      <TestimonialsSection />
      
      {/* Llamado a la acción */}
      <CTASection />
    </div>
  );
};

export default HomePage;
