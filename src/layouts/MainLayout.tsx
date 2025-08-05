import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de la aplicación que incluye el encabezado, contenido principal y pie de página
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <Header />
      
      {/* Contenido principal */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Pie de página */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
