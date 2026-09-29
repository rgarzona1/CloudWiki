# Manual de React con CloudWiki

Este manual enseña React recorriendo el código que existe en CloudWiki. Cuando algo es una función real del sitio lo señalaré como tal; cuando sea una idea para aprender o una ampliación futura, lo marcaré como ejemplo hipotético. Así podemos aprender sin confundir el proyecto actual con una versión que todavía no existe.

## 1. Antes de React

### ¿Qué es una interfaz de usuario?

Una interfaz de usuario (UI) es la parte de un programa que una persona ve y con la que interactúa: títulos, texto, enlaces, botones, imágenes y su distribución. En CloudWiki, la interfaz es la página con la navegación, la introducción a la nube, las tarjetas de modelos y temas, y el pie.

### ¿Qué es una aplicación frontend?

Es el código que se ejecuta en el navegador y presenta la experiencia a la persona usuaria. Puede pedir o enviar información a un servidor, pero CloudWiki, en su versión actual, es una página informativa estática: no tiene backend ni obtiene su contenido desde una API.

### JavaScript en el navegador

HTML describe la estructura del documento, CSS su apariencia y JavaScript permite expresar lógica. El navegador puede ejecutar JavaScript para responder a datos o interacciones y actualizar lo que se ve. React es una forma organizada de construir interfaces con JavaScript.

### ¿Qué es una librería? ¿Qué es React?

Una librería es código reutilizable que resuelve problemas comunes y que una aplicación puede llamar. React es una librería de JavaScript para crear interfaces mediante componentes. Un componente describe qué interfaz corresponde a cierta parte de una aplicación.

React no reemplaza JavaScript: se escribe JavaScript y se usan las herramientas de React. Tampoco reemplaza HTML y CSS. En este proyecto, JSX describe elementos parecidos a HTML dentro de archivos JavaScript, y los archivos CSS definen cómo se ven.

**Conexión con CloudWiki:** sus archivos `.jsx` describen secciones como `Hero` y `Footer`; `App.jsx` las organiza; `siteContent.js` proporciona datos para varias listas; CSS define el diseño. El navegador termina mostrando una página web normal.

## 2. ¿Qué es Vite?

Vite es una herramienta de desarrollo y compilación para proyectos web. CloudWiki lo utiliza junto con el plugin `@vitejs/plugin-react`, configurado en `vite.config.js`, para servir el proyecto durante el desarrollo y crear los archivos de producción.

**React y Vite hacen trabajos distintos.** React ayuda a describir y actualizar la interfaz. Vite prepara los módulos del proyecto, ofrece un servidor local ágil y crea un build publicable. No se puede sustituir uno por el otro: Vite no es la librería de interfaz, y React no es el servidor de desarrollo ni el empaquetador que define los scripts del proyecto.

### Servidor de desarrollo y HMR

El servidor de desarrollo entrega la aplicación al navegador desde el computador del desarrollador. Vite también usa Hot Module Replacement (HMR): cuando guardamos cambios, puede actualizar el módulo afectado sin volver a iniciar todo el flujo manualmente. El comportamiento exacto depende del cambio, pero el objetivo es acortar el ciclo editar-observar.

Al ejecutar `npm run dev` ocurre, en términos sencillos:

1. npm busca el script `dev` de `package.json`, cuyo valor es `vite`.
2. Vite carga `vite.config.js` y activa `@vitejs/plugin-react`.
3. Vite arranca un servidor local y muestra una dirección en la terminal.
4. Al abrirla, el navegador solicita `index.html`.
5. Ese documento carga `/src/main.jsx`; sus imports conectan CSS y `App.jsx`.
6. React monta la aplicación en el elemento HTML `#root`, y el navegador muestra CloudWiki.
7. Mientras el servidor sigue activo, Vite observa cambios y actualiza los módulos.

El modo de desarrollo no es la publicación final. Para producir el paquete optimizado se usa `npm run build`.

## 3. Estructura real del proyecto

```text
cloud-wiki/
├── README.md
├── MANUAL_REACT_CLOUDWIKI.md
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── dist/                      # Salida generada de producción (ignorada por Git)
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   ├── CallToAction.jsx
    │   ├── CloudProviders.jsx
    │   ├── DeploymentModels.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Introduction.jsx
    │   ├── Navbar.jsx
    │   ├── ServiceModels.jsx
    │   └── WikiTopics.jsx
    └── data/
        └── siteContent.js
```

El repositorio también tiene `dist/` como salida generada del build; no es código fuente y está ignorada por Git. No hay directorio `.github`, archivo `vercel.json` ni configuración de TypeScript. Las dependencias instaladas viven en `node_modules/`, que también se ignora en Git.

| Archivo o carpeta | Qué es, para qué sirve y relación con el resto |
| --- | --- |
| `index.html` | Documento HTML inicial. Contiene `<div id="root"></div>` y carga `/src/main.jsx`. Si falta el elemento `root`, `main.jsx` no tendría dónde montar React. Su atributo actual es `lang="en"` y el título es `cloud-wiki`; los componentes visibles están mayormente en español. |
| `src/main.jsx` | Punto de entrada JavaScript. Importa CSS global y `App`, localiza `#root` y monta el árbol de React. Sin él, el HTML no iniciaría la aplicación React. |
| `src/App.jsx` | Componente que importa y ordena las secciones principales. Sin él, la entrada no tendría la composición principal que renderizar. |
| `src/components/` | Componentes de cada sección. Separarlos permite leer y cambiar una parte de la página sin concentrar todo el JSX en `App`. Cada uno lo utiliza `App`, salvo que no hay componentes hijos anidados dentro de estas secciones. |
| `src/data/siteContent.js` | Exporta arrays de navegación y contenido. Los componentes importan estos arrays y crean elementos repetidos con `map()`. Sin esos datos, esos mapas no tendrían contenido que mostrar. |
| `src/index.css` | Estilos globales: fuente, colores, fondo, reglas base, elementos comunes y media queries. Se importa desde `main.jsx`. |
| `src/App.css` | Estilos de la interfaz, como tarjetas, hero, navegación y pie. Se importa desde `App.jsx`. Hay reglas compartidas o repetidas en ambos CSS; no existe un único archivo de estilos por componente. |
| `vite.config.js` | Configura Vite con `@vitejs/plugin-react`. No contiene ajustes de rutas, alias ni despliegue. |
| `package.json` | Identifica el paquete y declara scripts, dependencias y metadatos npm. |
| `package-lock.json` | Registra las versiones resueltas para instalaciones reproducibles. Por ejemplo, fija Vite 8.3.1 aunque `package.json` declara el rango `^8.3.0`. |
| `.oxlintrc.json` | Activa los plugins `react` y `oxc` y define dos reglas de React. |
| `.gitignore` | Evita versionar archivos generados o locales como `node_modules/`, `dist/`, logs y ajustes personales de editores. |
| `public/` | Archivos servidos con una ruta pública. `index.html` enlaza `/favicon.svg`; el repositorio contiene también `icons.svg`, aunque no se ve una referencia a este último en la aplicación. |
| `src/assets/` | Recursos que podrían importarse desde el código. `hero.png`, `react.svg` y `vite.svg` existen, pero no se importan en los componentes actuales. |

Si se elimina un archivo importado, lo normal es que el build falle con un error de importación. Si se elimina un recurso que no tiene referencias, la interfaz actual puede seguir funcionando, aunque dejaría de existir ese recurso para un uso futuro.

## 4. El punto de entrada de React

Este es el contenido esencial de `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Veámoslo por bloques:

- `import` incorpora algo que otro módulo exportó. `StrictMode` y `createRoot` vienen de paquetes; `./index.css` y `./App.jsx` son archivos del propio proyecto.
- `document` es una interfaz del navegador para acceder al documento HTML actual. `getElementById('root')` busca el `<div id="root">` de `index.html`.
- El DOM (Document Object Model) es la representación estructurada del documento HTML que el navegador puede consultar y actualizar.
- `createRoot(...)` crea un punto raíz de React asociado al elemento encontrado. `.render(...)` le indica qué árbol de componentes mostrar ahí.
- `<App />` es JSX que representa el componente `App`. `<StrictMode>` activa comprobaciones adicionales de React durante el desarrollo; no es una sección visual del sitio.

Conceptualmente, `createRoot(elemento).render(<App />)` significa: «React, administra este elemento HTML y muestra dentro de él el árbol de interfaz que comienza en `App`». En CloudWiki esa rama termina incluyendo la navegación, las secciones de contenido y el pie. Si `getElementById` no encuentra el `root` esperado, el punto de montaje no será válido.

## 5. App.jsx

Un componente es una función que devuelve una descripción de interfaz. `App` es un componente porque está definido como función y devuelve JSX:

```jsx
function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <ServiceModels />
        <DeploymentModels />
        <CloudProviders />
        <WikiTopics />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
```

Piensa en un componente como una pieza de construcción con una responsabilidad visible. `App` no necesita contener todos los detalles de cada tarjeta: coloca las piezas grandes en orden. React ejecuta la función para obtener JSX y usa esa descripción para renderizar la interfaz.

JSX se parece a HTML, pero se escribe dentro de JavaScript y sigue reglas de JavaScript/React. Por ejemplo, el atributo de clase se escribe `className`, las expresiones JavaScript se ponen entre llaves y los componentes deben comenzar con mayúscula para que React los distinga de etiquetas HTML. En JSX, un elemento sin contenido se puede cerrar como `<Hero />`.

Un componente puede incluir otros componentes usando JSX. Aquí `App` importa los nueve componentes desde `src/components/` y los dispone dentro de la estructura semántica `<main>`. No hay props pasadas desde `App`: todos esos componentes se usan sin atributos.

## 6. Componentes de CloudWiki

Cada componente actual se declara como una función, no recibe parámetros/props y devuelve JSX. `App` los utiliza para formar una sola página larga. El orden visual es:

```text
Navbar
↓
Hero
↓
Introduction
↓
ServiceModels
↓
DeploymentModels
↓
CloudProviders
↓
WikiTopics
↓
CallToAction
↓
Footer
```

| Componente y ubicación | Problema que resuelve y por qué separarlo | Qué recibe, qué devuelve y dónde se usa |
| --- | --- | --- |
| `Navbar` — `src/components/Navbar.jsx` | Mantiene junta la marca, la navegación y el botón superior. Separarla evita mezclar navegación con el contenido editorial. | No recibe props. Devuelve un `<header>` con enlaces generados desde `navItems` y un botón. `App` la renderiza primero. |
| `Hero` — `src/components/Hero.jsx` | Presenta el mensaje inicial, botones, cifras y una ilustración de nube/servidores. | No recibe props. Devuelve la sección con `id="home"`. `App` la coloca al inicio de `<main>`. La ilustración es HTML vacío con clases CSS, no la imagen `hero.png`. |
| `Introduction` — `src/components/Introduction.jsx` | Agrupa la explicación introductoria y cuatro tarjetas de recursos cloud. | No recibe props; importa `introCards`. Devuelve la sección `#concepts` y artículos generados con `map()`. `App` la coloca después del hero. |
| `ServiceModels` — `src/components/ServiceModels.jsx` | Presenta IaaS, PaaS y SaaS en un patrón de tarjetas consistente. | No recibe props; importa `serviceModels`. Devuelve la sección `#services` y una tarjeta por objeto. `App` la renderiza a continuación de la introducción. |
| `DeploymentModels` — `src/components/DeploymentModels.jsx` | Explica cuatro tipos de despliegue. | No recibe props; importa `deploymentModels`. Devuelve una sección y tarjetas con título, emoji y descripción. `App` la renderiza después de los modelos de servicio. |
| `CloudProviders` — `src/components/CloudProviders.jsx` | Presenta nombres y descripciones de proveedores. | No recibe props; importa `providers`. Devuelve tarjetas desde el array. `App` la incluye tras los modelos de despliegue. |
| `WikiTopics` — `src/components/WikiTopics.jsx` | Muestra temas educativos en una cuadrícula. | No recibe props; importa `wikiTopics`. Devuelve artículos con título, descripción y un enlace «Aprender más» cuyo `href` actual es `#`. `App` la coloca tras proveedores. |
| `CallToAction` — `src/components/CallToAction.jsx` | Cierra el contenido con un mensaje y un botón. | No recibe props. Devuelve una sección CTA con botón. `App` la incluye al final de `<main>`. El botón no tiene handler. |
| `Footer` — `src/components/Footer.jsx` | Reúne la marca, una descripción, enlaces de navegación y el texto de copyright. | No recibe props; vuelve a importar `navItems`. Devuelve `<footer>` con enlaces generados desde datos. `App` lo coloca después de `<main>`. |

Separar una sección no hace que tenga comportamiento automáticamente: el `Navbar` actual, por ejemplo, es un componente React, pero el repositorio no tiene lógica para abrir un menú móvil.

## 7. JSX en la práctica

JSX permite combinar elementos y expresiones JavaScript en una descripción de UI. En `Hero.jsx` hay elementos como `<section>`, `<h1>`, `<p>`, `<button>` y `<ul>`. Son elementos JSX que React transforma en interfaz del navegador.

Un atributo JSX configura el elemento. Por ejemplo, en `Hero`:

```jsx
<section className="hero-section" id="home">
```

`id="home"` proporciona un identificador que puede recibir enlaces `#home`; `className="hero-section"` conecta el elemento con selectores CSS. Se usa `className` y no `class` porque JSX forma parte de JavaScript y `class` es una palabra reservada del lenguaje.

Las llaves permiten insertar expresiones JavaScript. En `Navbar.jsx`:

```jsx
{navItems.map((item) => (
  <a key={item.label} href={item.href}>
    {item.label}
  </a>
))}
```

La expresión `{item.label}` lee una propiedad del objeto actual. No se observa un fragmento `<>...</>` en los componentes: cuando hace falta más de un elemento, usan un contenedor como `<div>`, `<main>` o `<section>`. Tampoco hay condicionales JSX como `condicion && ...` ni operador ternario para decidir qué parte mostrar.

En HTML escrito directamente se suele usar `class="..."`; en JSX de CloudWiki se usa `className="..."`. Y aunque el marcado sea familiar, un componente como `<Navbar />` no es una etiqueta HTML incorporada: es una función definida por el proyecto.

## 8. Arrays y map()

Un array es una lista ordenada de valores. Un objeto agrupa valores con nombres, llamados propiedades. En `siteContent.js`, `providers` es un array de objetos; uno de ellos tiene propiedades `name` y `description`.

`map()` recorre los elementos de un array y produce otro array con el resultado de una función. `CloudProviders.jsx` lo utiliza así:

```jsx
{providers.map((provider) => (
  <article key={provider.name} className="info-card provider-card">
    <div className="provider-logo">{provider.name}</div>
    <p>{provider.description}</p>
  </article>
))}
```

Para cada proveedor, la función devuelve un `<article>`. Como el array actual tiene AWS, Microsoft Azure y Google Cloud, React recibe tres artículos. Cuando se agrega o cambia un objeto en `providers`, los elementos visuales derivados del array cambian también. Así evitamos copiar y pegar el mismo bloque de JSX una vez por proveedor.

El mismo patrón aparece en `Introduction` (`introCards`), `ServiceModels` (`serviceModels`), `DeploymentModels` (`deploymentModels`), `WikiTopics` (`wikiTopics`) y dos veces para navegación (`navItems` en `Navbar` y `Footer`).

### ¿Para qué sirve `key`?

`key` es una pista estable que React usa para identificar cada elemento de una lista cuando vuelve a compararla. En este código son valores como `provider.name`, `service.title` e `item.label`. Sin claves adecuadas, React puede mostrar avisos y reconciliar elementos de forma menos fiable cuando una lista cambia. La clave debe identificar de manera única cada elemento de su lista; no se muestra como texto en la página.

## 9. Props

Una prop es un dato que un componente padre entrega a un componente hijo, como un parámetro de configuración. Las props permiten reutilizar el mismo componente con contenido distinto, sin que este dependa de un único dato escrito dentro de su archivo.

**CloudWiki no pasa props en su versión actual.** Los componentes se invocan como `<Hero />` o `<ServiceModels />`, sin atributos. Las secciones que necesitan arrays importan sus datos directamente desde `siteContent.js`; ese patrón no es lo mismo que pasar props. `key` tampoco es una prop normal que el componente hijo reciba.

Ejemplo hipotético, sin modificar CloudWiki: podríamos hacer que un componente `TopicCard` recibiera el objeto de un tema y dibujara una tarjeta:

```jsx
function TopicCard({ topic }) {
  return (
    <article className="topic-card">
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
    </article>
  )
}
```

El padre podría recorrer `wikiTopics` y usar `<TopicCard key={topic.title} topic={topic} />`. `topic={topic}` pasa el objeto; `{ topic }` en la función lo recibe mediante desestructuración. Este componente y este uso son una propuesta de aprendizaje, no código presente en el repositorio.

## 10. State

El estado (state) es información que puede cambiar durante la vida de un componente y que afecta lo que este muestra. `useState` es un hook de React que permite guardar ese valor en un componente funcional:

```jsx
const [isOpen, setIsOpen] = useState(false)
```

Esto es solo un ejemplo didáctico, no una línea de CloudWiki. `isOpen` es el valor actual y `setIsOpen` solicita un valor nuevo. Cuando React procesa esa actualización, vuelve a renderizar el componente para que la interfaz refleje el estado nuevo. No se debe cambiar el estado mutando el valor directamente.

**La versión actual de CloudWiki no importa ni utiliza `useState` ni otro sistema de estado de React.** Su contenido es fijo durante la visita, por lo que no necesita estado para mostrarlo.

Ejemplos hipotéticos adecuados para practicarlo serían guardar si el menú móvil está abierto, el texto escrito en un buscador o el filtro de temas seleccionado. Si esos valores tuvieran que compartirse entre varios componentes, se podría elevar el estado a un padre común o aprender después un sistema de estado compartido.

## 11. Eventos

Un evento es una notificación de algo que ocurre, como un clic, una escritura o el envío de un formulario. En JSX, los manejadores se expresan con props como `onClick`, `onChange` y `onSubmit`; sus valores son funciones, no texto con código.

- `onClick` respondería, por ejemplo, al pulsar «Explorar la wiki».
- `onChange` podría leer lo que la persona escribe en un campo de búsqueda.
- `onSubmit` podría procesar el envío de un formulario y evitar la navegación tradicional si corresponde.

**No hay manejadores `onClick`, `onChange` ni `onSubmit` en la aplicación actual.** Los botones del hero, la navegación y la llamada a la acción no tienen lógica asociada; los enlaces del menú sí navegan a secciones mediante fragmentos de URL como `#concepts`. Los enlaces «Aprender más» de los temas usan `href="#"`, que es un marcador y no abre un artículo. El proyecto tampoco tiene un menú móvil desplegable ni formularios.

Como ejemplo hipotético, un buscador podría tener `<input value={query} onChange={...} />` y guardar `query` con `useState`; no es una función implementada en CloudWiki.

## 12. React y el DOM

El DOM es el árbol de nodos que representa el documento en el navegador. Renderizar significa calcular qué interfaz corresponde mostrar y reflejarla en ese documento. En el arranque, `createRoot` enlaza React con `#root`; React procesa el árbol de `App` y coloca las secciones dentro de ese elemento.

Cuando los datos o el estado cambian, React compara la nueva descripción con la anterior y actualiza lo necesario. Como desarrolladores normalmente describimos el resultado con JSX en vez de buscar nodos y manipularlos a mano. Eso hace más sencillo mantener la interfaz sincronizada con sus datos.

En CloudWiki el contenido es estático, así que se renderiza la página a partir de los componentes y arrays. No hay código que use `document.querySelector` para crear tarjetas manualmente. `document.getElementById('root')` en `main.jsx` es la conexión inicial necesaria para que React pueda administrar esa raíz.

## 13. CSS en React

React define la estructura y el CSS define la presentación. `main.jsx` importa `index.css`, mientras `App.jsx` importa `App.css`; Vite incluye ambos estilos al procesar el proyecto. Las clases de los elementos JSX coinciden con selectores CSS: por ejemplo, `className="hero-section"` recibe las reglas de `.hero-section`.

Los archivos actuales incluyen:

- **Selectores:** `.hero-shell`, `.topic-card`, `.main-nav a:hover`. Un selector elige los elementos a los que aplicar declaraciones.
- **Variables CSS:** definidas bajo `:root` en `index.css`, por ejemplo `--bg-900`, `--text`, `--primary` y `--shadow`. Se reutilizan con `var(--text)`.
- **Flexbox:** organiza elementos en un eje. Se usa en navegación, botones, estadísticas y pie, con reglas como `display: flex`, `align-items` y `justify-content`.
- **Grid:** organiza filas y columnas. `hero-shell`, `intro-layout` y las cuadrículas de tarjetas usan `display: grid` y `grid-template-columns`.
- **Responsive design:** media queries cambian esas columnas y el acomodo de navegación según el ancho de la ventana.
- **Hover y foco:** `:hover` cambia la presentación al apuntar con mouse; `:focus-visible` da una respuesta visible al foco de teclado en varios enlaces y botones.
- **Transiciones:** propiedades `transition` suavizan cambios de color, borde y posición. No hay reglas `@keyframes` de animación en los estilos actuales.

Hay estilos globales y reglas de componentes repartidos entre `index.css` y `App.css`, y algunas reglas aparecen en ambos archivos. Por eso, al cambiar un selector compartido, conviene comprobar la página en los tamaños de pantalla relevantes: el orden de carga y la especificidad CSS influyen en qué declaración termina aplicándose.

## 14. Diseño responsive

Responsive design significa adaptar una interfaz a distintas dimensiones, en vez de asumir una única pantalla. CloudWiki usa dos breakpoints reales:

- **Hasta 980 px:** `.hero-shell`, `.intro-layout` y `.cta-shell` pasan de varias columnas a una; las cuadrículas de tres, cuatro y cinco columnas pasan a dos; el pie cambia a disposición vertical.
- **Hasta 760 px:** la navegación puede ocupar varias líneas; el botón superior usa el ancho disponible; el hero reduce su espacio superior y la ilustración CSS baja de 440 px a 310 px de altura; las cuadrículas de tarjetas pasan a una columna y se reduce el padding de la llamada a la acción.

No existe un breakpoint separado llamado «tablet». En términos prácticos, los estilos base sirven para pantallas amplias, el cambio a 980 px reorganiza la composición y el cambio a 760 px compacta la experiencia móvil. No hay un menú hamburguesa: en ancho pequeño se muestran los enlaces envueltos en varias líneas. Las media queries están en ambos CSS.

## 15. Imágenes, iconos y assets

Un asset es un recurso estático como una imagen, fuente o SVG. CloudWiki tiene `src/assets/hero.png`, `react.svg` y `vite.svg`, además de `public/favicon.svg` e `icons.svg`.

En la aplicación actual no se importan imágenes desde `src/assets/`. La ilustración del hero se compone con `<div>` que tienen clases como `cloud`, `node`, `line` y `server`; CSS les da tamaño, posición, bordes, sombras y gradientes. Es un ejemplo de ilustración construida con HTML y CSS, no con un archivo de imagen ni SVG.

`index.html` solicita `/favicon.svg`, que corresponde al archivo público. Los elementos de despliegue usan emojis guardados como texto en `siteContent.js`; el nombre de cada proveedor se presenta como texto estilizado, no como logotipo gráfico real. No hay una biblioteca de iconos instalada.

Con Vite, los archivos dentro de `public/` se sirven mediante rutas desde la raíz, mientras los assets de `src/` normalmente se importan desde un módulo para que Vite los incluya en el build. En este proyecto las imágenes de `src/assets/` no forman parte visual de la página porque ningún componente las referencia.

## 16. Imports y exports

Los módulos dividen el código en archivos y permiten reutilizar valores:

- `export default App` en `App.jsx` exporta una cosa principal. Se importa con `import App from './App.jsx'`; el nombre del lado que importa puede elegirse, aunque se mantiene `App` por claridad.
- Cada componente termina con `export default NombreDelComponente`, y `App.jsx` importa esos componentes.
- `siteContent.js` usa exports con nombre, como `export const navItems = [...]`. Se importan usando llaves: `import { navItems } from '../data/siteContent'`.
- `main.jsx` importa CSS por sus efectos sobre la página; no necesita recibir un valor JavaScript de esos archivos.

`import` establece la relación entre módulos. Al eliminar un import pero seguir usando el nombre importado, el módulo deja de compilar. Los componentes importan otros componentes cuando necesitan incluirlos como piezas de la interfaz; en CloudWiki es `App` quien reúne las secciones, y cada sección importa los datos que muestra.

## 17. package.json

`package.json` es el manifiesto que npm lee. En CloudWiki contiene:

- `name`: `cloud-wiki`, nombre interno del paquete.
- `version`: `0.0.0`, versión declarada actualmente.
- `private`: `true`, indica que el paquete no está destinado a publicarse accidentalmente en el registro npm.
- `type`: `module`, habilita la sintaxis de módulos ES en archivos JavaScript como `vite.config.js`.
- `scripts`: accesos cortos para comandos del proyecto.
- `dependencies`: dependencias necesarias para ejecutar la aplicación.
- `devDependencies`: herramientas de desarrollo, build, lint y tipos.

Scripts reales:

| Script | Comando ejecutado |
| --- | --- |
| `npm run dev` | `vite` |
| `npm run build` | `vite build` |
| `npm run lint` | `oxlint` |
| `npm run preview` | `vite preview` |

Dependencias directas:

| Paquete | Declaración | Función en el proyecto |
| --- | --- | --- |
| `react` | `^19.2.8` | Define componentes y la lógica de renderizado. |
| `react-dom` | `^19.2.8` | Conecta React con el DOM del navegador; `main.jsx` usa `createRoot`. |
| `vite` | `^8.3.0` en desarrollo; lockfile `8.3.1` | Servidor y compilación. |
| `@vitejs/plugin-react` | `^6.1.1` en desarrollo | Plugin configurado en `vite.config.js` para React. |
| `oxlint` | `^1.81.0` en desarrollo | Analizador estático invocado por el script `lint`. |
| `@types/react` | `^19.2.18` en desarrollo | Definiciones de tipos para React. No significa que la aplicación esté escrita en TypeScript. |
| `@types/react-dom` | `^19.2.7` en desarrollo | Definiciones de tipos para React DOM; tampoco hay archivos `.ts` o `.tsx` en la aplicación. |

El símbolo `^` permite que npm resuelva versiones compatibles dentro del rango semántico; `package-lock.json` registra lo resuelto. No se declara una propiedad `engines` para Node en `package.json`. Sin embargo, la versión de Vite 8.3.1 fijada por el lockfile declara en su paquete Node `^20.19.0 || >=22.12.0`; conviene instalar una versión que cumpla ese requisito.

## 18. Oxlint

Oxlint es una herramienta de análisis estático: inspecciona el código sin tener que ejecutar la aplicación para encontrar ciertos problemas de estilo o uso. Puede detectar errores probables y patrones no permitidos por las reglas configuradas.

En este proyecto `npm run lint` ejecuta el binario `oxlint`. `.oxlintrc.json` activa los plugins `react` y `oxc`, y define estas reglas:

- `react/rules-of-hooks`: error si se usan hooks fuera de las reglas permitidas.
- `react/only-export-components`: advertencia para ciertos exports que no son componentes, con una excepción para exports constantes.

Un error de lint no siempre significa que el sitio no pueda arrancar; significa que una regla encontró un problema que el proyecto quiere corregir. Una advertencia informa algo que conviene revisar, pero no tiene el mismo nivel que `error`. Por ejemplo, si en el futuro se agrega `useState`, debe invocarse en el nivel superior de un componente o hook, no dentro de un `if` o de un ciclo. Hoy CloudWiki no utiliza hooks.

No se declara un script independiente de formato ni una configuración para TypeScript.

## 19. Git y GitHub

**Git** es un sistema de control de versiones que guarda una historia de cambios en el computador. **GitHub** es un servicio web donde se alojan repositorios Git y se colabora. Git puede utilizarse sin GitHub; GitHub no reemplaza los comandos Git locales.

- **Repositorio:** proyecto y su historial de versiones.
- **Commit:** conjunto de cambios guardado con un mensaje identificador.
- **Branch (rama):** línea de trabajo independiente; la rama local actual se llama `main`.
- **Push:** envía commits locales a un repositorio remoto.
- **Pull:** trae y combina cambios del remoto en la rama actual.

CloudWiki es un repositorio Git y su remoto `origin` apunta a `https://github.com/rgarzona1/CloudWiki`. Para guardar una modificación y enviarla:

```text
Modificar archivos
      ↓
git add .
      ↓
git commit -m "Describe el cambio"
      ↓
git push
      ↓
GitHub recibe el commit
```

`git add .` prepara cambios del directorio actual; `git commit` crea el registro local; `git push` sincroniza commits con el remoto. `git status` permite revisar qué está modificado y qué está preparado. Antes de usar `git add .`, conviene mirar ese estado para no incluir archivos que no se querían versionar.

## 20. Vercel

Vercel es una plataforma que puede compilar y servir aplicaciones web. Un flujo conectado a GitHub normalmente se parece a esto:

```text
GitHub → Vercel → instalar dependencias → npm run build → Vite genera dist/
       → Vercel sirve los archivos → URL pública
```

Al conectar un repositorio, se configura qué comando instala/build y cuál es el directorio de salida. Para este proyecto, los valores apropiados según sus scripts y build son `npm run build` y `dist`. Vite crea archivos estáticos; el servidor de Vercel los entrega cuando el navegador solicita el sitio.

- **Despliegue de producción:** versión destinada al dominio principal del sitio.
- **Despliegue de vista previa:** publicación de prueba asociada normalmente a una rama o cambio, con una URL temporal.
- **Comando de compilación:** para CloudWiki sería `npm run build`.
- **Directorio de salida:** carpeta compilada que se publica; para Vite es `dist`.
- **Variables de entorno:** valores configurados fuera del código, a menudo para API o servicios. CloudWiki no lee variables de entorno ni se conecta a servicios que las requieran.

El repositorio tiene un remoto GitHub, pero no contiene `vercel.json`, carpeta `.vercel` ni workflow de GitHub Actions. Por eso podemos documentar el flujo esperado, pero no verificar desde los archivos si el proyecto ya está conectado a una cuenta Vercel, su dominio, sus ajustes reales, o si están habilitados despliegues automáticos. Si Vercel está conectado, un nuevo `git push` puede disparar un build; la publicación concreta depende de la configuración de esa cuenta.

## 21. Del código al sitio web

1. **El desarrollador escribe React:** define componentes JSX como `Hero` y `WikiTopics`, más arrays de contenido en `siteContent.js`.
2. **Vite procesa el proyecto:** durante desarrollo sirve los módulos al navegador; para producción resuelve imports, JSX y CSS.
3. **El navegador ejecuta React:** a partir de `main.jsx`, React monta `App` en `#root` y crea la interfaz correspondiente.
4. **Vite crea el build:** `npm run build` genera HTML, JavaScript, CSS y recursos optimizados dentro de `dist/`.
5. **Vercel publica archivos:** si está configurado para este repositorio, toma `dist/` y la sirve desde su infraestructura.
6. **El navegador solicita la página:** una persona visita la URL y el navegador descarga los archivos del sitio.
7. **La página se muestra:** el HTML proporciona la raíz; el JavaScript del build ejecuta React y aparece CloudWiki.

CloudWiki es una aplicación renderizada en el navegador: no hay renderizado desde un servidor React ni backend en este repositorio. Es importante diferenciar «Vite compila» de «React crea la interfaz»: son etapas y herramientas distintas.

## 22. ¿Cómo crear otro proyecto?

Estos pasos son una receta genérica para crear `MyReactProject`; describen un proyecto nuevo, no cambios que se hayan hecho en CloudWiki.

### 1. Crear el proyecto y seleccionar React

En una terminal con Node y npm compatibles:

```bash
npm create vite@latest MyReactProject -- --template react
cd MyReactProject
npm install
```

La opción `--template react` selecciona la plantilla React de Vite sin preguntas interactivas. `npm install` descarga las dependencias indicadas por esa plantilla.

### 2. Conocer y ampliar la estructura

La plantilla incluye una entrada, un componente principal, CSS y configuración. Se puede organizar el código propio en carpetas como estas:

```text
src/
├── main.jsx
├── App.jsx
├── index.css
├── components/
└── data/
```

En PowerShell se pueden crear las carpetas si no existen con:

```powershell
New-Item -ItemType Directory -Force src/components, src/data
```

### 3. Crear App, componentes y CSS

`main.jsx` debe montar `<App />`; `App.jsx` puede importar componentes desde `components/` y organizarlos; cada componente puede devolver una sección JSX. Por ejemplo, en el proyecto nuevo podrías crear `src/components/Welcome.jsx`:

```jsx
function Welcome() {
  return (
    <section className="welcome">
      <h1>Mi proyecto</h1>
      <p>Esta es mi primera sección de React.</p>
    </section>
  )
}

export default Welcome
```

Luego, `src/App.jsx` podría reunir esa sección:

```jsx
import Welcome from './components/Welcome.jsx'

function App() {
  return (
    <main className="page">
      <Welcome />
    </main>
  )
}

export default App
```

En el CSS importado por la plantilla, podrías definir `.page` y `.welcome` para controlar ancho, espacio y apariencia. Los nombres concretos del archivo CSS pueden variar según la plantilla. Si una lista de tarjetas comparte estructura, guarda los datos en un array y genera las tarjetas con `map()` y una `key` estable. Los ejemplos de rutas, props o estado se añaden solo cuando el proyecto los necesita.

### 4. Ejecutar localmente y compilar

```bash
npm run dev
npm run build
npm run preview
```

`dev`, `build` y `preview` son los scripts de Vite usados por CloudWiki. Una plantilla recién creada puede tener scripts diferentes; consulta su `package.json`. Ejecuta `npm run lint` solo si esa plantilla declara un script `lint`.

### 5. Guardar el proyecto con Git y subirlo a GitHub

```bash
git init
git add .
git commit -m "Crear proyecto React"
git branch -M main
git remote add origin https://github.com/USUARIO/MyReactProject.git
git push -u origin main
```

Primero crea en GitHub un repositorio vacío llamado `MyReactProject` y reemplaza `USUARIO` por tu nombre de usuario. `git push -u` establece también la rama remota de seguimiento para los siguientes envíos.

### 6. Conectar con Vercel

En Vercel, importa el repositorio de GitHub, confirma el framework Vite y verifica el comando `npm run build` y el directorio `dist`. Pulsa desplegar. Después de conectar la integración, los nuevos pushes pueden generar despliegues según las reglas que configures en Vercel.

## 23. ¿Cómo podría evolucionar CloudWiki?

Las siguientes son ideas educativas, no funcionalidades presentes ni dependencias que ya tenga el proyecto.

### A. React Router

**Problema:** separar una página larga en direcciones navegables como `/`, `/conceptos`, `/servicios`, `/proveedores` y `/temas`. **Tecnología posible:** `react-router-dom`. **Cambio de arquitectura:** añadir rutas, asociar cada dirección a una página/componente y decidir qué elementos compartidos (por ejemplo, navegación y pie) envuelven esas páginas. Hoy CloudWiki solo usa enlaces de fragmento como `#concepts`; no tiene enrutador.

### B. Buscador

**Problema:** encontrar un tema entre los artículos. **Tecnología:** un campo HTML, estado de React (`useState`) y filtrado de arrays con `filter()`; más adelante un servicio de búsqueda si el contenido creciera. **Cambio:** crear un componente de búsqueda, almacenar la consulta y filtrar `wikiTopics` u otra fuente de contenido. Actualmente no hay caja de búsqueda.

### C. Backend/API

**Problema:** administrar o entregar contenido que cambia sin editar y reconstruir el frontend cada vez. **Tecnología:** un servidor que publique una API HTTP, consumida con `fetch` o una biblioteca cliente. **Cambio:** separar frontend y servidor, manejar carga, errores y datos recibidos, y diseñar una interfaz para estados como «cargando». CloudWiki no tiene API ni servidor de aplicación.

### D. Base de datos

**Problema:** guardar de forma persistente muchos artículos y consultarlos. **Tecnología:** una base de datos relacional o documental accesible desde un backend. **Cambio:** el servidor validaría y leería/escribiría datos; no se debería poner una contraseña de base de datos en el JavaScript público del navegador. No hay base de datos en el proyecto.

### E. Login

**Problema:** distinguir usuarios e impedir que cualquiera gestione contenido privado. **Tecnología:** autenticación gestionada o backend seguro con sesiones/tokens. **Cambio:** agregar vistas de inicio/cierre de sesión, rutas protegidas y autorización en el servidor; ocultar un botón en React por sí solo no protege los datos. CloudWiki no tiene cuentas ni login.

### F. CMS

**Problema:** permitir que una persona edite artículos sin modificar archivos de código. **Tecnología:** un CMS alojado o uno integrado con una API y un área de administración. **Cambio:** la web pública cargaría contenido del CMS, y la administración requeriría permisos y una estrategia de publicación. Ahora el contenido es un conjunto de arrays JavaScript en `siteContent.js`.

### G. Markdown

**Problema:** escribir artículos largos con encabezados, enlaces y listas de una manera legible. **Tecnología:** archivos Markdown y un parser/renderizador compatible con React, o soporte Markdown proporcionado por un CMS. **Cambio:** convertir el texto a contenido visible y definir cómo validar enlaces y contenido permitido. CloudWiki no contiene artículos Markdown ni parser.

## 24. Errores comunes de principiante en React

- **Confundir React con Vite:** React construye la interfaz; Vite la sirve en desarrollo y compila el proyecto.
- **Poner todo en `App.jsx`:** funciona al principio, pero hace más difícil entender y cambiar una página grande. CloudWiki separa secciones en componentes.
- **Repetir el mismo JSX:** crea mantenimiento repetido. Para datos similares, CloudWiki usa arrays y `map()`.
- **No crear componentes cuando hay responsabilidades separadas:** hace difícil reutilizar y leer secciones. Cada sección principal tiene un componente propio.
- **Usar `class` en JSX:** se escribe `className`, como en `className="hero-section"`.
- **Olvidar `key` en listas:** cada elemento generado por `map()` debe tener una identidad estable; CloudWiki usa títulos o etiquetas.
- **Confundir props con state:** props llegan desde un padre; state es información mutable gestionada por el componente. CloudWiki no usa ninguno todavía; sus componentes importan datos compartidos directamente.
- **Modificar el DOM por fuera de React para cada cambio:** puede desincronizar la interfaz de lo que React cree que debe mostrar. Describe la UI con JSX y datos.
- **Instalar dependencias sin necesidad:** cada paquete añade mantenimiento. CloudWiki usa solo las dependencias declaradas en su manifiesto; no necesita un router para mostrar una página con enlaces internos.
- **No entender npm:** `npm install` instala paquetes; `npm run dev` busca y ejecuta el script llamado `dev`. No son comandos intercambiables.
- **No entender Git:** guardar un archivo no crea un commit, y hacer `git push` no es lo mismo que compilar o desplegar.
- **Creer que un botón hace algo por parecer un botón:** necesita un enlace o manejador. En CloudWiki hay botones visuales sin `onClick`, por lo que no ejecutan una acción actualmente.
- **Usar un enlace de marcador como si fuera una ruta:** `href="#"` en «Aprender más» no conduce a un artículo real.
- **Suponer que todos los assets se usan:** encontrar `hero.png` en `src/assets/` no implica que aparezca en la página; hay que encontrar su import o referencia.

## 25. Conceptos que debo dominar

### Nivel 1 — Fundamentos

- **JSX:** escribir la estructura de interfaz dentro de JavaScript.
- **Componentes:** dividir la pantalla en funciones y piezas independientes.
- **Props:** enviar datos o configuración desde un componente padre a uno hijo.
- **Imports/exports:** separar archivos y compartir sus componentes o datos.

Meta: poder explicar cómo `App` reúne las secciones de CloudWiki y cómo `main.jsx` inicia el árbol.

### Nivel 2 — React

- **State:** guardar información que cambia y afecta la interfaz.
- **Eventos:** responder a clics, escritura y envíos.
- **Hooks:** funciones como `useState` que conectan componentes con capacidades de React y siguen reglas de uso.
- **Renderizado condicional:** mostrar contenido dependiendo de una condición.
- **Listas:** transformar datos con `map()` y dar claves estables.

Meta: convertir una parte estática, como los temas, en una experiencia con búsqueda o filtros sin manipular el DOM directamente.

### Nivel 3 — Aplicaciones

- **React Router:** coordinar páginas y URL.
- **APIs:** obtener y enviar datos a un servidor.
- **Formularios:** capturar, validar y procesar información.
- **Autenticación:** identificar usuarios y proteger operaciones desde el servidor.
- **Estado global:** compartir estado entre áreas distantes cuando el estado local o elevado deja de ser suficiente.

Meta: entender qué necesita una aplicación cuando el contenido, las rutas y los usuarios ya no son puramente estáticos.

### Nivel 4 — Producción

- **Build:** generar archivos optimizados con el comando del proyecto.
- **Variables de entorno:** configurar valores por entorno y mantener secretos fuera del código cliente.
- **Git:** registrar cambios y ramas.
- **GitHub:** colaborar y alojar el remoto.
- **Vercel:** compilar y servir el resultado.
- **CI/CD:** automatizar comprobaciones y publicaciones al integrar cambios.

Meta: poder seguir el trayecto desde el cambio local hasta el despliegue y diagnosticar en qué etapa surgió un problema. CloudWiki tiene scripts de lint y build, pero no workflow CI/CD declarado en el repositorio.

## 26. Resumen del proyecto

Una presentación posible de dos o tres minutos:

> CloudWiki es una página educativa de una sola página dedicada a explicar conceptos de computación en la nube. Está construida con React y JavaScript usando JSX; Vite se encarga del servidor de desarrollo y de generar la compilación de producción.
>
> La aplicación empieza en `index.html`, que proporciona un elemento llamado `root`. `src/main.jsx` importa los estilos globales y el componente `App`, y usa `createRoot` de React DOM para renderizar la aplicación dentro de ese elemento. `App.jsx` organiza la página con componentes independientes: una navegación, una sección principal, introducción, modelos de servicio, modelos de despliegue, proveedores, temas, una llamada a la acción y el pie.
>
> Para evitar repetir marcado, `siteContent.js` guarda arrays de navegación y contenido. Componentes como `ServiceModels`, `CloudProviders` y `WikiTopics` recorren esos arrays con `map()` y crean una tarjeta por objeto; cada elemento de esas listas incluye una `key` estable. Los estilos están en CSS, separado entre reglas globales y reglas de la interfaz. Flexbox, Grid y media queries de 980 y 760 píxeles ajustan la página a distintos anchos.
>
> La versión actual es estática: no utiliza props, estado, hooks ni manejadores de eventos, no tiene buscador ni router, y no consulta un backend o base de datos. Sus botones no tienen acciones conectadas. Para desarrollo se usa `npm run dev`; para producción, `npm run build`, que crea `dist/`; `npm run preview` permite revisar ese resultado localmente. El repositorio tiene un remoto GitHub. Vercel podría compilar y publicar `dist/` si se conecta el repositorio, aunque los ajustes de esa cuenta no están almacenados aquí.

Si puedes explicar cada párrafo con tus propias palabras y señalar los archivos correspondientes, ya puedes describir la arquitectura básica de este proyecto con criterio.

## 27. Hoja rápida de referencia

### React

- **Componente:** función que devuelve una parte de la interfaz, como `Hero`.
- **JSX:** sintaxis similar a HTML que React usa desde archivos JavaScript.
- **Props:** valores que un componente padre entrega a un hijo; CloudWiki aún no los usa.
- **State:** datos variables que React conserva y que pueden cambiar la interfaz; CloudWiki aún no lo necesita.
- **Eventos:** manejadores como `onClick` o `onChange` para responder a acciones; CloudWiki no tiene manejadores actuales.
- **`map()`:** recorre arrays y en CloudWiki crea listas de tarjetas con claves.

### Vite

- **`npm run dev`:** inicia el servidor local para desarrollar.
- **`npm run build`:** compila el sitio en `dist/`.
- **`npm run preview`:** sirve localmente la compilación ya creada.

### Git

- **`git status`:** muestra cambios y estado de la rama.
- **`git add .`:** prepara cambios del directorio para el próximo commit.
- **`git commit -m "mensaje"`:** registra los cambios preparados localmente.
- **`git push`:** envía commits locales al remoto.
- **`git pull`:** trae e integra cambios del remoto.

### npm

- **`npm install`:** instala dependencias del proyecto usando el manifiesto y lockfile.
- **`npm run ...`:** ejecuta uno de los scripts declarados en `package.json`.

### Vercel

- **GitHub:** fuente del repositorio que puede conectarse a Vercel.
- **Build:** proceso que ejecuta `npm run build` para CloudWiki.
- **Despliegue:** publicación del directorio `dist/` para servir el sitio.
- **Producción:** despliegue destinado a la URL principal configurada.
