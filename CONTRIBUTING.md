# Guía de Contribución

¡Gracias por tu interés en contribuir al sitio web de Webix! Apreciamos tu tiempo y esfuerzo. Por favor, tómate un momento para revisar las siguientes pautas antes de hacer una contribución.

## 📋 Tabla de Contenidos

- [Cód de Conducta](#-código-de-conducta)
- [¿Cómo Contribuir?](#-cómo-contribuir)
- [Reportar Errores](#-reportar-errores)
- [Solicitar Funcionalidades](#-solicitar-funcionalidades)
- [Primeros Pasos](#-primeros-pasos)
- [Proceso de Pull Request](#-proceso-de-pull-request)
- [Guía de Estilo](#-guía-de-estilo)
- [Pruebas](#-pruebas)
- [Preguntas Frecuentes](#-preguntas-frecuentes)

## 📜 Código de Conducta

Este proyecto y todos los participantes se rigen por nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código. Por favor, reporta cualquier comportamiento inaceptable a [soporte@webix.com](mailto:soporte@webix.com).

## 🤝 ¿Cómo Contribuir?

### 🐛 Reportar Errores

¿Encontraste un error? ¡Nos encantaría saberlo! Por favor:

1. **Busca problemas existentes** para evitar duplicados.
2. Crea un nuevo issue con una **descripción clara** del problema.
3. Incluye **pasos para reproducir** el error.
4. Especifica el **comportamiento esperado** vs. **comportamiento actual**.
5. Incluye capturas de pantalla o GIFs si es relevante.
6. Especifica la versión del navegador y sistema operativo.

### 🚀 Solicitar Funcionalidades

¿Tienes una idea para mejorar el sitio? ¡Genial! Por favor:

1. Revisa si ya existe una solicitud similar.
2. Crea un nuevo issue con una **descripción detallada** de la funcionalidad.
3. Explica por qué esta funcionalidad sería útil.
4. Si es posible, incluye ejemplos o enlaces a implementaciones similares.

## 🚀 Primeros Pasos

### Configuración del Entorno de Desarrollo

1. Haz un fork del repositorio.
2. Clona tu fork localmente:
   ```bash
   git clone https://github.com/tuusuario/webix-marketing.git
   cd webix-marketing
   ```
3. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```
4. Crea una rama para tu contribución:
   ```bash
   git checkout -b feature/nombre-de-tu-funcionalidad
   # o
   git checkout -b fix/descripcion-del-error
   ```
5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🔄 Proceso de Pull Request

1. Asegúrate de que tu rama esté actualizada con la rama principal:
   ```bash
   git pull origin main
   ```
2. Haz commit de tus cambios con mensajes descriptivos:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   # o
   git commit -m "fix: corregir error en el formulario de contacto"
   ```
3. Sube tus cambios a tu fork:
   ```bash
   git push origin tu-rama
   ```
4. Abre un Pull Request (PR) contra la rama `main`.
5. Completa la plantilla de PR con toda la información solicitada.
6. Espera la revisión del equipo. Podríamos pedirte hacer algunos cambios.

## 🎨 Guía de Estilo

### Convención de Commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de errores
- `docs:` Cambios en la documentación
- `style:` Cambios de formato (puntuación, espacios, etc.)
- `refactor:` Cambios en el código que no corrigen errores ni agregan funcionalidades
- `perf:` Cambios que mejoran el rendimiento
- `test:` Agregar o corregir pruebas
- `chore:` Cambios en las herramientas o configuraciones

Ejemplo:
```
feat: añadir formulario de contacto
fix: corregir error de validación en el formulario
docs: actualizar documentación de la API
```

### Estilo de Código

- Usamos [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/) para mantener la consistencia del código.
- Ejecuta `npm run lint` para verificar problemas de estilo.
- Ejecuta `npm run format` para formatear automáticamente el código.

### Estructura de Archivos

Mantén la estructura de archivos existente:

```
src/
├── assets/            # Recursos estáticos
├── components/        # Componentes reutilizables
│   ├── common/        # Componentes comunes
│   ├── layouts/       # Componentes de diseño
│   └── sections/      # Secciones de la página
├── pages/             # Componentes de página
├── styles/            # Estilos globales
└── utils/             # Utilidades y helpers
```

## 🧪 Pruebas

- Asegúrate de que todas las pruebas pasen antes de enviar un PR.
- Agrega pruebas para nuevas funcionalidades o correcciones de errores.
- Ejecuta las pruebas con:
  ```bash
  npm test
  # o
  yarn test
  ```

## ❓ Preguntas Frecuentes

### ¿Cómo puedo empezar si soy nuevo en el proyecto?

Revisa los issues etiquetados como `good first issue` o `help wanted` para encontrar tareas adecuadas para principiantes.

### ¿Cómo sé si mi contribución será aceptada?

No podemos garantizar que todas las contribuciones sean aceptadas, pero valoramos mucho el tiempo y esfuerzo de todos los colaboradores. Asegúrate de seguir las pautas y de que tu contribución esté alineada con los objetivos del proyecto.

### ¿Necesito firmar un CLA (Acuerdo de Licencia de Colaborador)?

Actualmente no requerimos un CLA, pero todas las contribuciones estarán sujetas a la licencia del proyecto.

### ¿Dónde puedo obtener ayuda adicional?

Si tienes preguntas, no dudes en abrir un issue o contactar al equipo de desarrollo en [soporte@webix.com](mailto:soporte@webix.com).

---

¡Gracias por contribuir a Webix! Tu ayuda es muy valiosa para nosotros. 💜
