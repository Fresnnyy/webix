import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactPage: React.FC = () => {
  // Información de contacto
  const contactInfo = [
    {
      icon: <FaPhone className="text-primary w-6 h-6" />,
      title: "Teléfono",
      value: "+52 123 456 7890",
      link: "tel:+521234567890",
    },
    {
      icon: <FaEnvelope className="text-primary w-6 h-6" />,
      title: "Correo electrónico",
      value: "contacto@webix.com",
      link: "mailto:contacto@webix.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-primary w-6 h-6" />,
      title: "Ubicación",
      value: "Ciudad de México, MX",
      link: "https://goo.gl/maps/xxxxx",
    },
    {
      icon: <FaWhatsapp className="text-primary w-6 h-6" />,
      title: "WhatsApp",
      value: "+52 123 456 7890",
      link: "https://wa.me/521234567890",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h1>
      <p className="text-gray-700 mb-12">
        Nos encantaría saber de ti. Completa el formulario o utiliza los medios
        de contacto que te dejamos a continuación.
      </p>

      {/* Información de contacto */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {contactInfo.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Formulario de contacto */}
      <form
        action="#"
        method="POST"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactPage;