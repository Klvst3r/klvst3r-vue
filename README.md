# klvst3r-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# klvst3r-vue

Se crcea el proyecto Vue

```sh
npm create vue@latest
```

Escribimos el nombre delproyecto
Seleccionamos Router y Pinia

```sh
npm install
```

### Enlazamos con git

Se enlaza con el repo de github

### Compilar y recargar en desarrollo

```sh
npm run dev
```

Cuando iniciamos un proyecto

VITE v7.3.1 ready in 662 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ Vue DevTools: Open http://localhost:5173/**devtools**/ as a separate window
➜ Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
➜ press h + enter to show help

Tenemos quever como organizar las carpetas del proyecto,

Vue da libertad para organizar carpetas

/src
/components -> co mponentes del sistema
/views -> vistas
/router -> index.js
/store -> tiendas
/assets //assets del sistemas
/App.vue
/main.js

Estructura de proyecto pequeño
y todo esta en la carpeta views

Para modificar una vista teemos que ller la lista creada, pero al tener muchas vistas y lo mismo para las tiendas y los componentes,

Cuando queramos buscar alguna sera un pco confuso, entonces la sugerencia es
Organiarlo

En
/views

Separar las vstas
Ej
views/
/admin
/public
/auth -> login registro

Esa estructura es para medianos y grandes proyectos, bastante popular al trabajar con frameworks con js, organizarlo de manera modular.

Siguiendo esta estructura modular, las carpetas, como views, stores no deben estar en raiz

Por ello dentro de /src

Crear una carpeta llamado /modules

Tres modulos principales
├── modules
│   └── admin
│   ├── components
│   ├── stores
│   └── views

Generando dentro de cada modulo, la misma estructura en cada uno de los modulos creados

Teniendo la mism atestrutura en las carpetas creadas:
├── modules
│   ├── admin
│   │   ├── components
│   │   ├── stores
│   │   └── views
│   ├── auth
│   │   ├── components
│   │   ├── stores
│   │   └── views
│   └── public
│   ├── components
│   ├── stores
│   └── views

la idea agrauparlos en modulos en que un programador en cada uno de los modulos admin, auth, public, pueda trabajar de manera modular, sin que se interponga con los demas modulos.

La idea no es salir de esta carpeta, y trabajar en la carpeta asignada.
Los programadores endrian que salair y definir mas rutas,

Existe actualmente una sola carpeta de indice de rutas
router/index.js

Si el usuario admin, quisiera agregar una nueva ruta, tendria que salir y hacer la modificación, nuestra aplicación no esta siendo modular, por que el programador saldria de su momdulo.

### Compilar y minificar para producción

```sh
npm run build
```

### Lintear con ESLint

```sh
npm run lint
```

### Compilar y minificar para producción

```sh
npm run build
```

### Lintear con ESLint

```sh
npm run lint
```

## Recommended IDE Setup

## Template TailwindCSS

This project uses [Tailwind CSS](https://tailwindcss.com) version 2.2.19 and relies on PostCSS for compatibility with older browsers. You may use any IDE or editor that supports [PostCSS](https://github.com/postcss/postcss) and [Tailwind CSS](https://tailwindcss.com/docs/installation) syntax.

La pagina de la plantilla esta en:

flowbite.com
https://flowbite.com/

Al usar TailwindCSS se debe instalar la libreria

## TailwindCSS

https://tailwindcss.com/

Para instalar TailwindCSS a nuestro proyecto nos indica el proceso si es que tenemos vite, tambien tenemos una guia para frameworks populares, pero vamos a instalarlo con la guia que aparece como primera opcion

1. Lo primero es instalar Tailwindcss via npm

Ejecutamos

```sh
npm install tailwindcss @tailwindcss/vite

```

2. Teniendo instalado tailwindcss y @tailwindcss/vite, vamos a crear un archivo de configuracion para tailwindcss, abrimos

vite.config.js

y de la base siguiente:

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
plugins: [
vue(),
vueDevTools(),
],
resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url))
},
},
})

importamos tailwindcss

import tailwindcss from '@tailwindcss/vite'

dentro del codigo, una vez importado nos centramos en la sección que dice plugins: Pegando lo siguiente,

plugins: [vue(), vueDevTools(), tailwindcss()],

3. Lo proximo es ir al archivo css principal e incluir lo siguiente:

@import "tailwindcss";

El archivo es:

src/assets/main.css

4. En teoria ya tenemos instalado Tailwind, se recomienda iniciar el proceso de construccion

```sh
npm run dev
```

5. pero para verificar esto, vamos a abrir la vita home

src/modules/public/submodules/home/views/HomeView.vue

cargamos
<template>

  <div>
    <h1 class="text-red-500">Bienvenido a la página principal</h1>
    Hola desde el submódulo HomeView
  </div>
</template>

y podremos visualizar correcta la visualiación en el navegador

## Template:

Para el Navbar
https://flowbite.com/docs/components/navbar/

Usamoss este NavBar

User menu dropdown

## Extensiones para TailwindCSS

Tailwind CSS IntelliSense

## Importacion de componentes en Vue

CTRL + SHIFT + P

> Reload Window

Para aplicar los estilos de TailwindCSS debemos configurar el archivo tailwind.config.js, en la raiz del proyecto, para ello

```sh
npx tailwindcss init -p
```

Puede que arrogle problema y es por que no encuentra el binario o problemas con las dependencias.

Vamos a forzar la instalacion de dependencias.

```sh
npm install -D tailwindcss postcss autoprefixer
```

O ejecutar la instalacion manualmente:
Si npx sigue fallando, intenta usar tailwindcss directamente a través de node:

Bash

./node_modules/.bin/tailwindcss init -p
O si estás en Windows:

Bash

.\node_modules\.bin\tailwindcss init -p

Si elo anterior falla, podremos instalar el archivo manualmente.

Si los comandos fallan por completo, no te preocupes, puedes crear el archivo a mano. Es un archivo de texto simple:

Creamos un archivo llamado tailwind.config.js en la raíz de nuestro proyecto (donde está el package.json).

Pegamos el siguiente contenido:

```JavaScript

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{vue,js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
brand: '#1A56DB',
'fg-brand': '#1A56DB',
heading: '#111827',
body: '#6B7280',
neutral: {
primary: '#FFFFFF',
secondary: '#F9FAFB',
tertiary: '#F3F4F6',
'primary-medium': '#F3F4F6',
'tertiary-medium': '#E5E7EB',
'secondary-soft': '#F9FAFB',
},
default: {
DEFAULT: '#E5E7EB',
medium: '#D1D5DB',
}
},
borderRadius: {
'base': '0.5rem',
}
},
},
plugins: [],
}
```

Crea otro archivo llamado postcss.config.js en la misma carpeta:

```JavaScript

export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

```

Reinicia tu servidor de desarrollo
Una vez creados los archivos, detén tu terminal (Ctrl + C) y vuelve a ejecutar:

```Bash

npm run dev
```

¿Cómo saber si funcionó?
Si el archivo tailwind.config.js está bien configurado, el botón de Home debería ponerse azul inmediatamente. Si los colores siguen sin aparecer, revisa que en el archivo src/main.js tengas la línea: import './assets/main.css' (o el nombre de tu archivo CSS principal).

## Login

Para la plantilla del login tenemos la siguente referencia:

https://flowbite.com/blocks/marketing/login/

Para manipular el modo dark / ligth agregamos los estilos en el archivo tailwind.conf.js

```Javascript
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
```

## Dashboard

Referencia
https://flowbite.com/docs/components/sidebar/

Sidebar with navbar

si necesitamos los estlos de Flowbite instalamos el pligin para configurarlo

```bash
npm install flowbite
```

Luego lo agregamos al archivo tailwind.config.js:

````js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // IMPORTANTE: Para que las clases de Flowbite funcionen
  ],
  theme: {
    extend: {
      colors: {
        // Flowbite usa a menudo tonos de azul o gris específicos
        // Si tu código usa "neutral-primary", debes definirlos aquí:
        primary: {
          "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // Carga los componentes interactivos y estilos base
  ],
}
          ```
````

## Iconos del Aside Menu

Inicialmente se tienen iconos en formato svg, si se utilizan algunos por ejemplo de otra libreria, entonces, vamos aapoyarnos de

https://fontawesome.com/

Lo ideal es crearse una cuenta, y partiendo que ya tengo unkit para agregar a mi proyecto

https://fontawesome.com/kits/b5b1e6b401/setup

Vamos al archivo index.html

y en el head pegamos nustro kit referido.

<script src="https://kit.fontawesome.com/b5b1e6b401.js" crossorigin="anonymous"></script>

con esto ya tendriamos fontawesome disponible en nuestro proyecto, para poder utilizarlo en el aside menu, vamos a la carpeta `src/assets/icons` y vamos a crear un archivo `font-awesome.js` y vamos a pegar el siguiente codigo

lo proximo a realizar es lo siguiente

En AdminAside, sustituimos:

<svg
              class="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >

En la seccion de iconos de fontawesome, buscamos dashboard

https://fontawesome.com/icons

Buscamos un icono de Dashboard
<i class="fa-solid fa-gauge"></i>

        <RouterLink
            :to="{
              name: 'admin.dashboard',
            }"
            activeClass="bg-gray-100"
            class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
          >

            <span class="inline-flex w-6 h-6 jistify-center items-center">
              <i class="fa-solid fa-gauge"></i>
            </span>
            <span class="ms-3">Dashboard</span>
          </RouterLink>

,

Tenemos nuestro icono integrado de Fontawesome
Y podremos construir un compoente en

src/layouts/admin/components/AdminNavLink.vue colocamos los estilos y funcionalidad al da click

<script setup>
import RouterLink from 'vue-router'
</script>

<template>
  <RouterLink
    activeClass="bg-gray-100"
    class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
  >
    <slot></slot>
  </RouterLink>
</template>

y en adminiAside

<li>
          <AdminNavLink
            :to="{
              name: 'admin-dashboard',
            }"
          >
            <span class="inline-flex w-6 h-6 jistify-center items-center">
              <i class="fa-solid fa-gauge"></i>
            </span>
            <span class="ms-3">Dashboard</span>
          </AdminNavLink>
        </li>

## Reorganización de carpetas

Para la organizacion de las carpetas del modulo public/submodules, esta desaparece y en consecuenta los sobmodulos about, blog, contact y home pasaran a public directamente.

Para asegurar el cambio debemos considerar que vite no esta corriendo
Quedando la estructura

/src/modules/public
── about
│   ├── router
│   │   └── index.js
│   └── views
│   └── AboutView.vue
├── blog
│   ├── router
│   │   └── index.js
│   └── views
│   └── BlogView.vue
├── components
├── contact
│   ├── router
│   │   └── index.js
│   └── views
│   └── ContactView.vue
├── home
│   ├── router
│   │   └── index.js
│   └── views
│   └── HomeView.vue
├── router
│   └── index.js
├── stores
└── views
└── HomeView.vue

En el archivo src/modules/public/router/index.js
Se han cabiado las importaciones por defecto

si verificams en los archivos importados esta ingresando

import aboutRoutes from '@/modules/public/about/router/index.js';
import blogRoutes from '@/modules/public/submodules/blog/router/index.js';
import contactRoutes from '@/modules/public/submodules/contact/router/index.js';
import homeRoutes from '@/modules/public/submodules/home/router/index.js';

en caso de no ser asi, modificar las rutas manualmente

Asi tambien en:

src/modules/public/home/router/index.js

No ha hecho correctamente la importaciṕn
component: () => import('@/modules/public/submodules/home/views/HomeView.vue'),

Sigue llamando una vista submodules, modificamos a

component: () => import('@/modules/public/home/views/HomeView.vue'),

Para llamar corretamente a la vista HomeView

en los demas submodulos ahora yano etan en una carpeta pero se entiende, por que es una forma mas amibagle al momento de realizar las importaciones.

En admin/submodules

En el dashboard
src/modules/admin/submodules/dashboard ==> src/modules/admin/dashboard

aseguramos la ruta cortrecta

src/modules/admin/dashboard/router/index.js

import dashboardRoutes from '@/modules/admin/dashboard/router/index'

Tamien en

src/modules/admin/dashboard/router/index.js

Importación correcta:

component: () =>
import('@/modules/admin/dashboard/views/Dashboard.vue'),

Validamos los cambios con npm run dev

Por ultimo hay que modificar el router principal

src/router/index.js

import adminRoutes from '@/modules/admin/dashboard/router/index.js'

finalizamos con la parte de que los usuarios no apunten a

/admin/dashboard sino solamente a /admin
Nos refiere en el archivo router principal:

component: () => import('@/layouts/admin/AdminLayout.vue'),
children: [
...adminRoutes, // Desestructuramos el array que exportamos
],

Para hacer la redireccion en el oruter principal, añadimos iuna propiedad redirect en el objeto padre de /admin en el archivo src/router/index.js

```js
{
path: '/admin',
component: () => import('@/layouts/admin/AdminLayout.vue'),
// Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre
redirect: { name: 'admin.dashboard' },
children: [
...adminRoutes,
],
},
```

Lo mismo con auth, debe redirigirme a login

en src/router/index.js

{
path: '/auth',
component: () => import('@/layouts/auth/AuthLayout.vue'),
children: authRoutes,
},

y en el modulo
src/modules/auth/router/index.js

se agrega una redirección
{
path: '',
redirect: { name: 'auth-login' },
},
