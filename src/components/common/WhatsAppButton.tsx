import { FaWhatsapp } from 'react-icons/fa';

/**
 * Botón flotante de WhatsApp que se muestra en todas las páginas
 */
const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Reemplazar con el número de teléfono real
  const message = 'Hola, me gustaría obtener más información sobre sus servicios';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
