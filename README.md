# AgroCultivo IA - Guía de Ejecución Local

Esta aplicación está construida con **React**, **TypeScript** y **Vite**. Sigue estos pasos para ejecutarla en tu computadora:

## 1. Requisitos Previos
Asegúrate de tener instalado **Node.js** (versión 18 o superior). Puedes descargarlo en [nodejs.org](https://nodejs.org/).

## 2. Instalación
Una vez que descargues y extraigas los archivos del proyecto, abre una terminal (CMD, PowerShell o Terminal de VS Code) en la carpeta raíz del proyecto y ejecuta:

```bash
npm install
```

Esto descargará todas las librerías necesarias (React, Tailwind, Framer Motion, Lucide, etc.).

## 3. Ejecución en Desarrollo
Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

La terminal te mostrará una dirección (usualmente `http://localhost:3000` o `http://localhost:5173`). Abre ese enlace en tu navegador.

## 4. Comandos Útiles
*   `npm run build`: Genera los archivos listos para producción en la carpeta `dist/`.
*   `npm run lint`: Verifica que no haya errores de código o de tipos (TypeScript).

## 5. Estructura del Proyecto
*   `/src/components`: Contiene todas las vistas y elementos visuales.
*   `/src/App.tsx`: Es el corazón de la aplicación donde se maneja la navegación.
*   `/src/types.ts`: Definiciones de datos basadas en tu esquema SQL.
*   `/src/index.css`: Configuraciones de estilos y Tailwind CSS.

---
**Nota:** Para ver la aplicación como si fuera un celular en tu navegador, presiona `F12`, y haz clic en el icono de "Dispositivos móviles" (Toggle device toolbar).
