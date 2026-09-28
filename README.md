# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

# CloudWiki

## 1. ¿Qué es CloudWiki?

CloudWiki es una página educativa de una sola página sobre computación en la nube. Presenta conceptos básicos, modelos de servicio y despliegue, proveedores y temas relacionados. Su objetivo es organizar esa información en secciones fáciles de recorrer.

## 2. Tecnologías utilizadas

- **React 19** y **React DOM**: construyen y muestran la interfaz mediante componentes.
- **Vite 8.3.1**: servidor de desarrollo y herramienta de compilación. El `package.json` solicita `^8.3.0` y el lockfile instalado registra `8.3.1`.
- **JavaScript (ES modules) y JSX**: contienen los componentes y los datos de la página.
- **CSS**: define estilos, distribución, estados hover y adaptación a distintos anchos de pantalla.
- **Oxlint**: revisa el código con las reglas configuradas en `.oxlintrc.json`.
- **Git y GitHub**: el repositorio local tiene un remoto GitHub configurado.
- **Vercel**: puede publicar el resultado de producción; la configuración del proyecto en la cuenta de Vercel no está guardada en este repositorio.
- **`@vitejs/plugin-react`**: integra el soporte de React con Vite.
- **`@types/react` y `@types/react-dom`**: paquetes de tipos incluidos como dependencias de desarrollo; el código de la aplicación está escrito en JavaScript, no TypeScript.

No se declaran bibliotecas de rutas, estado global, iconos ni cliente de API.

## 3. Requisitos

- Node.js **20.19 o posterior de la rama 20**, o **22.12 o posterior**. El proyecto no define `engines` en `package.json`; este requisito se deduce de Vite 8.3.1 en `package-lock.json`.
- npm, que normalmente se instala junto con Node.js.
- Git para clonar y sincronizar el repositorio.
- Un navegador moderno.

Comprueba tus versiones con `node --version` y `npm --version`.

## 4. Instalación

En una terminal:

```bash
git clone https://github.com/rgarzona1/CloudWiki.git
cd CloudWiki
npm install
```

`npm install` instala las dependencias declaradas y usa `package-lock.json` para mantener versiones reproducibles.

## 5. Ejecutar en desarrollo

```bash
npm run dev
```

Este comando ejecuta el script `dev` de `package.json` y arranca el servidor local de Vite. La terminal muestra una dirección local para abrir en el navegador. En desarrollo, Vite sirve el proyecto y actualiza los módulos al guardar cambios; no es todavía el paquete optimizado que se publica como producción.

## 6. Crear una versión de producción

```bash
npm run build
```

Vite genera los archivos estáticos optimizados en `dist/`. Esa carpeta es un resultado generado; está excluida de Git y se puede volver a crear ejecutando el build.

Para probar localmente una compilación:

```bash
npm run preview
```

`preview` sirve localmente el contenido ya compilado de `dist/`. No reemplaza `npm run dev` y tampoco publica el sitio en internet.

## 7. Despliegue en Vercel

El flujo habitual, si el proyecto de Vercel está conectado al repositorio, es:

**GitHub → Vercel → instalación y build → `dist/` → sitio publicado**

En los ajustes de compilación de Vercel se usarían `npm run build` como comando de build y `dist` como directorio de salida. No hay `vercel.json` en el repositorio, por lo que esos valores y el dominio no se pueden confirmar aquí.

Al ejecutar:

```bash
git add .
git commit -m "mensaje"
git push
```

Git prepara los cambios, crea un commit local y envía los commits al remoto GitHub. Si la integración de Vercel está activa, Vercel detecta el nuevo commit y empieza una compilación; según su configuración puede publicar una vista previa o actualizar producción. `git push` por sí solo no compila ni publica el sitio.

## 8. Estructura del proyecto

```text
cloud-wiki/
├── README.md                  # Guía práctica del proyecto
├── MANUAL_REACT_CLOUDWIKI.md  # Manual educativo de React
├── index.html                 # Documento HTML y elemento raíz de React
├── package.json               # Dependencias y scripts npm
├── package-lock.json          # Versiones exactas instaladas
├── vite.config.js             # Configuración de Vite y plugin de React
├── .oxlintrc.json             # Plugins y reglas de Oxlint
├── .gitignore                 # Archivos que Git debe ignorar
├── public/                    # Recursos públicos, como favicon.svg e icons.svg
└── src/
	├── main.jsx               # Punto de entrada que monta React
	├── App.jsx                # Composición principal de la página
	├── App.css                # Estilos de la interfaz
	├── index.css              # Estilos globales y responsive
	├── assets/                # hero.png y SVG de React/Vite
	├── data/siteContent.js    # Arrays de navegación y contenido
	└── components/            # Secciones reutilizables de la página
```

Los nueve componentes de `src/components/` son `Navbar`, `Hero`, `Introduction`, `ServiceModels`, `DeploymentModels`, `CloudProviders`, `WikiTopics`, `CallToAction` y `Footer`. No todos los recursos presentes en `assets/` se usan actualmente en el código de la página.

## 9. Comandos principales

| Comando | Qué hace | Cuándo utilizarlo |
| --- | --- | --- |
| `npm install` | Instala dependencias descritas por el proyecto. | Después de clonar o cuando cambian las dependencias. |
| `npm run dev` | Inicia el servidor local de Vite. | Para desarrollar y ver cambios en el navegador. |
| `npm run lint` | Ejecuta Oxlint. | Para revisar reglas estáticas del código. |
| `npm run build` | Compila el sitio y genera `dist/`. | Antes de publicar o comprobar el build de producción. |
| `npm run preview` | Sirve localmente el build existente. | Para inspeccionar `dist/` antes del despliegue. |

Para aprender cómo se conectan estos archivos y cómo funciona React en este proyecto, continúa con [MANUAL_REACT_CLOUDWIKI.md](MANUAL_REACT_CLOUDWIKI.md).
