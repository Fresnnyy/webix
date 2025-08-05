# Webix Marketing - Sitio Web de Agencia Digital

![Webix Logo](/public/assets/images/logo.png)

Sitio web moderno y receptivo para Webix, una agencia de marketing digital especializada en diseño web, redes sociales y publicidad digital.

## 🚀 Características

- **Diseño Moderno**: Interfaz de usuario atractiva y moderna con animaciones fluidas
- **Totalmente Responsivo**: Se ve perfecto en todos los dispositivos
- **Optimizado para SEO**: Estructura semántica y metaetiquetas optimizadas
- **Rendimiento Rápido**: Carga rápida gracias a Vite y optimizaciones de rendimiento
- **Tipografía Personalizada**: Integración con fuentes personalizadas (Nunito e Inter)
- **Modo Oscuro**: Soporte para tema oscuro

## 🛠️ Tecnologías Utilizadas

- ⚛️ React 18 con TypeScript
- 🚀 Vite como empaquetador
- 🎨 Tailwind CSS para estilos
- 🎭 Framer Motion para animaciones
- 📱 Diseño responsivo con Tailwind CSS
- 🔄 React Router para la navegación
- 📦 Gestión de estado con React Hooks
- 🔍 Optimización SEO con react-helmet-async

## 📁 Estructura del Proyecto

```
src/
├── assets/            # Recursos estáticos (imágenes, fuentes, etc.)
├── components/        # Componentes reutilizables
│   ├── common/        # Componentes comunes (botones, tarjetas, etc.)
│   ├── layouts/       # Componentes de diseño (encabezado, pie de página)
│   └── sections/      # Secciones de la página de inicio
├── pages/             # Componentes de página
├── styles/            # Estilos globales
└── utils/             # Utilidades y helpers
```

## 🚀 Cómo Empezar

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/webix-marketing.git
   cd webix-marketing
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea una versión de producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier

## 🎨 Personalización

### Variables de Estilo

Puedes personalizar los colores, fuentes y otros estilos modificando el archivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#AF4D98',
        secondary: '#FF7B00',
        accent: '#FFE900',
        dark: '#002A55',
        teal: '#119DA4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
      },
    },
  },
  // ...
};
```

### Configuración de SEO

Puedes personalizar los metadatos SEO en cada página usando el componente `Helmet` de `react-helmet-async`.

## 🌍 Despliegue

### Despliegue en Vercel

1. Instala la CLI de Vercel:
   ```bash
   npm install -g vercel
   ```

2. Inicia sesión en tu cuenta de Vercel:
   ```bash
   vercel login
   ```

3. Despliega la aplicación:
   ```bash
   vercel --prod
   ```

### Despliegue en Netlify

1. Instala la CLI de Netlify:
   ```bash
   npm install -g netlify-cli
   ```

2. Inicia sesión en tu cuenta de Netlify:
   ```bash
   netlify login
   ```

3. Construye y despliega la aplicación:
   ```bash
   npm run build
   netlify deploy --prod
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## ✨ Contribución

¡Las contribuciones son bienvenidas! Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📞 Contacto

¿Tienes preguntas? Envíanos un correo a [hola@webix.com](mailto:hola@webix.com) o visita nuestro sitio web [webix.com](https://webix.com).
