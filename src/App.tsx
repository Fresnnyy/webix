import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import ScrollToTop from './components/common/ScrollToTop';
import PageTransition from './components/common/PageTransition';

// Componente para manejar las rutas con animación
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <MainLayout>
            <PageTransition>
              <HomePage />
            </PageTransition>
          </MainLayout>
        } />
        
        <Route path="/nosotros" element={
          <MainLayout>
            <PageTransition>
              <AboutPage />
            </PageTransition>
          </MainLayout>
        } />
        
        <Route path="/servicios" element={
          <MainLayout>
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          </MainLayout>
        } />
        
        <Route path="/contacto" element={
          <MainLayout>
            <PageTransition>
              <ContactPage />
            </PageTransition>
          </MainLayout>
        } />
        
        {/* 404 - Not Found */}
        <Route path="*" element={
          <MainLayout>
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          </MainLayout>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>Webix - Soluciones Digitales a Medida</title>
          <meta name="description" content="Agencia de marketing digital especializada en diseño web, redes sociales y publicidad digital. Creamos experiencias digitales excepcionales." />
          <meta name="keywords" content="diseño web, marketing digital, redes sociales, publicidad, desarrollo web, agencia digital" />
          <meta name="theme-color" content="#AF4D98" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://webix.com/" />
          <meta property="og:title" content="Webix - Soluciones Digitales a Medida" />
          <meta property="og:description" content="Agencia de marketing digital especializada en diseño web, redes sociales y publicidad digital." />
          <meta property="og:image" content="https://webix.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://webix.com/" />
          <meta property="twitter:title" content="Webix - Soluciones Digitales a Medida" />
          <meta property="twitter:description" content="Agencia de marketing digital especializada en diseño web, redes sociales y publicidad digital." />
          <meta property="twitter:image" content="https://webix.com/og-image.jpg" />
        </Helmet>
        
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
