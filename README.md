# 🎸 Guitar Store

Guitar Store es una aplicación web de comercio electrónico especializada en la venta de guitarras. Permite a los usuarios explorar un catálogo de guitarras, agregar productos al carrito de compras, gestionar cantidades y persistir el carrito en el almacenamiento local del navegador.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **CSS Modules**: Para el estilado modular y evitar conflictos de nombres
- **LocalStorage**: Para persistir el estado del carrito de compras
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## 📁 Estructura del Proyecto

- **src/**
  - **components/**: Componentes reutilizables
    - `Guitar.tsx`: Componente para mostrar una guitarra individual
    - `GuitarCartItem.tsx`: Componente para mostrar un item del carrito
    - `Header.tsx`: Componente del encabezado con el carrito
  - **hooks/**
    - `useCart.ts`: Hook personalizado para la lógica del carrito
  - **data/**
    - `guitars.ts`: Array con la información de las guitarras
  - **types/**
    - `index.ts`: Tipos y interfaces compartidos
  - `App.tsx`: Componente principal
  - `main.tsx`: Punto de entrada

## 🚀 Características Principales

- Catálogo de guitarras con imágenes y detalles
- Carrito de compras con persistencia local
- Gestión de cantidades en el carrito (mínimo 1, máximo 5)
- Interfaz responsiva
- Tipado estricto con TypeScript
- Manejo de estado local con React hooks
- Despliegue automático a GitHub Pages

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/GuitarLA-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/GuitarLA-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas
- Asegúrate de que tu código sigue las convenciones del proyecto
- Incluye tests si es necesario
- Actualiza la documentación según corresponda

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
