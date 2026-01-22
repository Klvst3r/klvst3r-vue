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

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

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

```js
{
path: '/auth',
component: () => import('@/layouts/auth/AuthLayout.vue'),
children: authRoutes,
},

```

y en el modulo
src/modules/auth/router/index.js

se agrega una redirección

```js
{
path: '',
redirect: { name: 'auth-login' },
},
```

Finalemnte

src/modules/public/home/views/HomeView.vue
modificamos el clor del estilo del titulo

<template>
  <div>
    <h1 class="text-blue-700">Bienvenido a la página principal</h1>
    Hola desde el submódulo HomeView
  </div>
</template>

## Modulos compartidos

Los modulos compartidos deben estar disponibles para cualquier modulo
Por ejemplo un componente para el logotipo, por que se repite en difeentes lugares, en auth, en admin, en dashboard.

Por esto es conveniente llevarlo a un componente, y solo debe hacerse referencia a este componente, asi si se cambia el logotipo se cambia una sola vez y donde se refiera se cambiara en automatico.

Otro ejemplo es el dropdown del nav

Otro modulo compartido es el formulario, con botones link, todo esto se pude llevar a compoenentes con modulso compartidos, con importa solo se utilizarran al ser llamados.

## Logo

Para el logo se crea un componente
src/modules/shared/components/AppLogo.vue

Importando la estructura del logo. En Public nav solo importamos ese componente

Para el componente del logo en el footer, importa
<RouterLink to="/">
<AppLogo />
</RouterLink>
Lo mismo en
http://localhost:5173/auth/login

entonces lo importamos

/home/klvst3r/dev/js/klvst3r-vue/src/layouts/auth/AuthLayout.vue
y lo mismo para admin
src/layouts/admin/components/AdminNav.vue

Si quisieramos cambiar de logo, simplemente lo tendremos que hacer en el componente AppLogo

para el completado de los compoentes utilizamos una extension en vue
githubcopilot

Cada uno de los elementos que se repiten del formulario o del sistema podemos dividirlo en componentes estos estaran alamcenados en:
src/modules/shared/components

En donde los vayamos a utlizar solo hay que importarlos por ejemplo en:

<script setup>
import FormInput from '@/modules/shared/components/FormInput.vue'
import FormLabel from '@/modules/shared/components/FormLabel.vue'
import MyButton from '@/modules/shared/components/MyButton.vue'
</script>

y los utilizamos por ejemplo para los botones
<FormInput
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />

y asi con cada componente requerido

## Api

Referencia de consumo

https://github.com/codersfree/vue-api.git

Se deben tener ciertas cosas en la computadora, pra ello los requerimientos de instaación son:

- php
- bd mysql
- composer
- git
- nodejs
- npm

## Instalación y despliegue local

1. Clonar el repositorio
2. Instalar composer
3. Instalar dependencias mecesarias para trabajar con laravel
4. Duplicar el archivo de configuracion ejemplo .env.example
5. Configurar la base de datos en el archivo .env
   Trabajaremos con sqlite
6. Generar una key del proyecto
7. Enlazar el almacenamiento de imagenes
   php artisan storage:link
8. Revisar las compilaciones de vite - estilos
   npm intsall
   npm run dev
   npm run build
9. Ejecutar el servidor
10. Configurar el proyecto
11. Ejecutar migraciones
    php artisan migrate

Solo un avez, para caciones futuras utilizaremos, crea todas la s tablas y ejecuta los seeders
php artisan migrate:fresh --seed

12. Al no tener habilitados los paquetes de php specificos para SQLite, debemos ejecutar:
    php -v
    - si tenemos 8.2.x ejecutamos
      sudo apt update
      sudo apt install php8.2-sqlite3
    - Verificamos la instalacion
      php -m | grep sqlite
    - Prepearamos el archivo de configuración de la base de datos
      touch database/database.sqlite

13. Iniciar el proyecto
    php artisan serve

14. el almacenamiento cambiarlo de local a publico en archivo .env

FILESYSTEM_DISK=local ==> FILESYSTEM_DISK=public

## Instalación y despliegue en servidor

1. Clonar el repositorio
2. Ejecutar el servidor
3. Configurar el proyecto
4. Iniciar el proyecto

## Instalación y despliegue en servidor

1. Clonar el repositorio
2. Instalar composer
3. Instalar dependencias mecesarias para trabajar con laravel
4. Duplicar el archivo de configuracion ejemplo .env.example
5. Ejecutar el servidor
6. Configurar el proyecto
7. Iniciar el proyecto

## Configuración

1. Configurar la base de datos en el archivo `.env`
2. Configurar el servidor en el archivo `server.php`
3. Configurar el proyecto en el archivo `vue.config.js`

## Ejecución

1. Ejecutar el servidor en el archivo `server.php`
2. Ejecutar el proyecto en el archivo `npm run serve`

## Preparación de aplicación para hacer peticiones http

Podemos hacer peticiones http con fetch, pero vamos a hacerlo con un alibreria con axios

## Instalar axios

En la referencia
https://axios-http.com/docs/intro

Instalar con dentro de nuestro proyecto Vue, en nuestro caso klvst3r-vue
npm install axios

## Como se utiliza axios

https://axios-http.com/docs/intro

## Como se utiliza axios en nuestro proyecto

https://axios-http.com/docs/intro

## Como se utiliza axios en nuestro proyecto

https://axios-http.com/docs/intro

## Como se utiliza axios en nuestro proyecto

https://axios-http.com/docs/intro

## Como se utiliza axios en nuestro proyecto

Tenemos que especificar:

Para trabajar con axios, podemos trabajar con las extensiones intellisense / autocomplete, mientras usamos imporacin CommonJS con require usndo:

const axios = require('axios').default;
// axios.<method> will now provide autocomplete and parameter typings

Ejemplo:

```js
const axios = require('axios')

// Make a request for a user with a given ID
axios
  .get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })

// Optionally the request above could also be done as
axios
  .get('/user', {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {
    // always executed
  })

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
```

Lo unico que llamar a axios, especifica que tipo de peticion http quiero hacer (get, post, put, delete ) y especificamos la url a la cual voy a hacerle la peticion.

Ej.
axios.get('/user?ID=12345')

Axios lo que hace es retornarnos una promesa, caputarla promesa y si es stisfactoria con el metodo then, realizamos una acción, en caso contrario con el metodo catch realizamos otra acción:

```js
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})
```

Y cuenta con una que es .finally que se ejecuta siempre, sin importar si la promesa se cumplio o no. En el caso de que quisiera reaizar una acción indistinta de si salio bien o slio mal la peticion, es todo asi de facil es su uso.

## Configuración de Axios

La parte mas compleja es entender como vamos a hacer las peticiones http, podriamos dirigirnos a la sección de login
http://localhost:5173/auth/login

La vista del login
src/modules/auth/views/LoginView.vue

En el script podemos lamar a Axios, podriamos hacer la petcion http, generar la logica, todo desde aca. Es una posibilidad.
Pero no es la mejor, ya que si queremos hacer una peticion http, vamos a tener que ir a cada una de las vistas y hacer la peticion, y si queremos hacer una modificación, vamos a tener que ir a cada una de las vistas y hacer la modificación.
Puede tener varias complicaciones.
ej
Nosotros vamos a conectarmos a una api:
http://localhost:8000

Esta api, tiene la anterior url, imaguinemos que las peticione http, las estamos manejando en los componentes, pero si la url cambia, desd vue ninguna de las peticiones http vana a funcionar, e ir acada componente donde se hacen éticiones http, por ejemplo
LoginView

Y modificar la nueva url, entonces lo ideal es crear un archivo de configuración donde especificamos hacia donde queremos hacer la peticion, si se modifica la url, simplemente modificamos el archivo de configuracion por la nueva url

Entonces, en la carpeta src creamos

una carpeta llamada api/axioConfig.js

dentro llamamos a axios
import axios from 'axios'

ahora en una variable apiCliente inicializamos axios, mediante un metodo create le pasamos un objeto pasandole las propiedades que queremos que tenga axio
La base url que queremos hacerle peticiones

http://localhost:8000

Ademas ocmo voy a hacerle peticion a la base del proyecto, todos los endpoints empiezan con el path

http://localhost:8000/api

Si queremos sonultar usuarios

http://localhost:8000/api-post

si consultamos post sera uri post

despues se colocan cabeceras, especificando como vamos a comunicar inforamcion hacia la api, en este caso con formato JSON,

headers: {
'Content-Type': 'application/json',
},

y como queremos que nos retorne la inforamción.

headers: {
'Content-Type': 'application/json',
Accept: 'application/json',
},

Al final vamos a exportarlo el api client, para cuando quieramos hacer una peticion api ya no vamos a llamar a axios directamente sino a la definicion de apiClient

configuracion final de axios

```js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
```

## Autenticacion

siguiendo las practicas de responsabilidad unica, creamos

/home/klvst3r/dev/js/klvst3r-vue/src/modules/auth/services/authService.js

Tendra el codigo necesario para hacer peticiones a la api y obtener respuestas de la api

Hay que crear un archivo adicioinal, cuya tarea sera la de crear la logica necesaria para el proceso de autenticacion

src/modules/auth/stores/authStore.js

La funcionalidad de este archivo sera la de generar la logica necearia para el proceso de autenticación

Asi hemos dividido en 4 archivos la petición, para seguir el prinicpio de responsablidad unica, asi si nuestra aplicación crece, si cambia la dirección de la api, modificamos la configuracion de axios en

- axiosConfig.js

Puede que en determinado moento cambie la forma en la cual que tengamos hacer peticiones a la api, cambios en las URI internas

- authService.js

Cambiamos lo que tengamos que cambiar, y no afecta al resto de archivos

El archivo que contiene la logica necesaria para el proceso de autenticacion, no afecta a los archivos que contienen la configuracion de axios ni a los archivos que contienen la logica necesaria para hacer peticiones a la api, ya que no estamos manejando directamente las peticiones a la api, sino que estamos consumiento el authservice que finalemnte es el que se encarga de hacer las peticiones

- authStore.js

Finalmente el LoginView, su unica funcion es mostrar el formulario y recuperar la ifnoramción que el usuario esta colocando en el formuario
LoginView.vue

si bien es cierto, la tienda se puede colocar directamenbte en el authSotre.js del modulo auth, particularmente sse recomienda colocarlo fuera:

src/modules/auth

Es decir por fuera de los modulos crear una carpeta stores

src/stores/authStore.js

Ahora por que se prefiere colocarlo asi, para que el proceso de autenticación, queremos que este disponible para todos los modulos, por que desde el modulo admin necesitaremos saber que el usuario se encuentra autenticado, desde el modulo public, si esta autenticado, y asi con los submodulos, por eso es preferile colocarlo pora afuera de todos la tienda es para toda la aplicación. Aunque se podria seguir manejando en elmodulo auth y llamrlo desde cualquier lado.

Entonces trabajaremos en el

authService.js

que hace peticiones a la api,

## Probar API con Postman

para añadir, al momento de poner la url de la peticion en POSTMAN también se pudo usar como variable de la colección, de manera que si la url es algo extensa o si cambia, ya no tengamos que ir a todas las peticiones y cambiarlas sino solo desde la VARIABLE DE COLECCIÓN hacerlo y todas las peticiones tomarían la nueva ruta URL desde la variable.

Google: postman
Es un programa que nos permite hacer peticiones, a l nuestras api, para probar el funcionamiento de estas, de acuerdo al sistema operativo, registrarnos e iniciar sesion:

Podemos descargarlo
https://www.postman.com/downloads/

O caon la cuenta creada podremos trabajar.

Al iniciar sesión, vamos a workspace y creamos un nuevo espacio, Name: Vue Api (create)

Ingresamos y creamos un acolección, en el boton inferior podemos dejar el nombre New Collection, para despues hacer click en: Add a request

La Api para hacer login, cuenta con 4 rutas dispoibles de tipo post, asi que colocamos el tipo post, para despues ir a la sección de "headers" para establecer los valores de la cabecera, agregamos algunos valores de la cabecera,
Colocamos en el New Request los siguientes valores

Key Value
Content-Type application/json
Acept application/json

Para que sea lo mas parecido a la forma en la cual vamos a ahacer peticiones en axiosConfig.js

Hacia donde vamos a hacer la peticion:
http://localhost:8000/api

Copiamos y vamos a pegarla, darle un nombre a la peticion:
POST Login
POST http://localhost:8000/api
Headers
Key Value
Content-Type application/json
Accept application/json

Copiamos las peticiones y en nuestra collecion tendremos
POST login
POST logout
POST refresh
POST me

Guardamos los cambios y queremos copiar y pegar 3 veces la peticion

teniendo nuestra peticions con los siguientes nombres

configurando en axiosConfig.js

Donde indicabamos el tipo de

Debemos asegurarnos que nuestra api, la aplicación de nuestra api, en nuestro caso en el proyecto klvst3r-vue, este inicializado el servidor (Laravel)
php artisan serve

Para poder recibir las peticiones, al mismo endpoit http://localhost:8000/api

Entonces nuesra colección tiene el conjunto de 4 peticiones o herramientas, la primera para hacer una peticion a la siguiente uri
http://localhost:8000/api/auth/login

En el cuerpo de la peticion (Postman) seccion Body, tenemos que pasarle la información del usuario y contraeña del login
form-data

Hemos creado un usuario y pass en nuestro sistema

Email: klvst3r@gmail.com
Pass: desarrollo

Para completar tu Seeder y probar la conexión entre Vue y Laravel, solo necesitas añadir una nueva instancia de creación dentro del método run.

Aquí tienes el código actualizado y los pasos para ejecutarlo:

1. Actualización del Seeder
   Modifica tu archivo database/seeders/DatabaseSeeder.php (o el seeder específico que estés usando) de la siguiente manera:

PHP

```php
public function run(): void
{
// Usuario de ejemplo previo
User::factory()->create([
'name' => 'Victor Arana',
'email' => 'victor@codersfree.com',
'password' => bcrypt('12345678'),
]);

    // Tu propio usuario personalizado
    User::factory()->create([
        'name' => 'Klvst3r',
        'email' => 'klvst3r@gmail.com',
        'password' => bcrypt('desarrollo'),
    ]);

}
```

2. Cómo ejecutar el Seeder
   Dependiendo de si ya tienes datos en la base de datos o si quieres empezar de cero, tienes dos opciones principales desde tu terminal en la carpeta raíz de Laravel:

Opción A: Ejecutar solo los seeders (si ya migraste) Si ya tienes las tablas creadas y solo quieres insertar estos usuarios, ejecuta:

Bash

php artisan db:seed
Opción B: Refrescar todo (Recomendado para pruebas limpias) Como estás usando SQLite, es muy rápido borrar todo y volver a crear las tablas con los datos nuevos. Esto asegura que no haya correos duplicados si intentas correr el seeder varias veces:

Bash

php artisan migrate:fresh --seed 3. Verificación en SQLite
Dado que tu base de datos está en /home/klvst3r/dev/js/vue-api/database/database.sqlite, puedes verificar rápidamente que el usuario existe usando la CLI de SQLite:

Bash

sqlite3 database/database.sqlite "SELECT name, email FROM users;"
Proceso de Comunicación API
Ahora que tienes el usuario, cuando hagas la petición POST desde Vue (usando Axios o Fetch) hacia tu endpoint de login en Laravel, asegúrate de enviar las credenciales exactas:

Email: klvst3r@gmail.com

Password: desarrollo

Si no tienes instalado el cliente de SQLite en tu Debian, tienes dos caminos principales: instalar la herramienta (que es muy ligera) o usar una función de Laravel para consultarlo sin instalar nada externo.

Aquí tienes las opciones:

Opción 1: Usar Laravel Tinker (La más fácil)
Laravel incluye Tinker, una consola interactiva que te permite interactuar con la base de datos usando código PHP. No necesitas instalar nada extra en Debian.

En tu terminal, dentro de la carpeta de tu proyecto, ejecuta:

Bash

php artisan tinker
Una vez que se abra el prompt interactivo, escribe lo siguiente y presiona Enter:

PHP

User::all(['name', 'email']);
Esto te devolverá una lista de todos los usuarios registrados en tu archivo .sqlite.

Para salir, escribe exit.

Opción 2: Instalar el CLI de SQLite en Debian
Si prefieres tener la herramienta instalada para usar el comando que mencionaste originalmente, puedes instalarla rápidamente con apt. Solo necesitas privilegios de superusuario:

Actualiza tus repositorios e instala:

Bash

sudo apt update
sudo apt install sqlite3
Ahora ya podrás ejecutar el comando original:

Bash

sqlite3 database/database.sqlite "SELECT name, email FROM users;"
Opción 3: Usar el comando "db" de Laravel (Reciente)
Si estás usando una versión reciente de Laravel (9.x, 10.x o 11.x), puedes ejecutar consultas SQL directamente con Artisan:

Bash

php artisan db:select "SELECT name, email FROM users"
Resumen de flujo para tu Test
Ya que estás preparando la conexión con Vue, lo ideal es que después de verificar que el usuario existe, pruebes el endpoint de autenticación.

Verificamos
sqlite3 database/database.sqlite "SELECT name, email FROM users;"
o via Thinker.
php artisan tinker
Psy Shell v0.12.8 (PHP 8.2.30 — cli) by Justin Hileman

```bash
> User::all(['name', 'email']);
> [!] Aliasing 'User' to 'App\Models\User' for this Tinker session.
> = Illuminate\Database\Eloquent\Collection {#1342

    all: [
      App\Models\User {#5952
        name: "Victor Arana",
        email: "victor@codersfree.com",
      },
      App\Models\User {#6217
        name: "Klvst3r",
        email: "klvst3r@gmail.com",
      },
    ],

}


>

```

Proceguimos a verificar nuestro usuario via Ppostman

Ok, tengo ya mi peticion en postman pero me hacen una recomendación:

When testing an API locally, you need to use the Postman Desktop Agent. You currently have a different Agent selected, which can’t send requests to the Localhost. | Learn More

por lo que considero que es necesario instlar postman en local, que opinas

Esa recomendación de Postman es muy común. Básicamente, la versión web de Postman tiene restricciones de seguridad en el navegador que le impiden "hablar" directamente con tu localhost (tu servidor Laravel).

Tienes tres caminos para solucionar esto, dependiendo de qué tan ligero quieras mantener tu sistema:

1. Instalar Postman Desktop (Lo que te recomiendan)
   Es la solución más robusta. Al ser una aplicación nativa en Debian, no tiene las restricciones del navegador y puede acceder a localhost:8000 (o el puerto que uses) sin problemas.

Cómo instalarlo en Debian: La forma más sencilla es vía Snap (si lo tienes configurado):

Bash
sudo snap install postman
O descargando el binario directamente desde postman.com/downloads.

2. Instalar el "Postman Desktop Agent"
   Si prefieres seguir usando la interfaz en el navegador, puedes instalar solo el Agent. Es un pequeño programa que corre en segundo plano y actúa como puente entre la web y tu servidor local.

Una vez instalado, en la parte inferior de la web de Postman, cambias el selector de "Cloud Agent" a "Desktop Agent".

3. Alternativa "Light": Extensión "Thunder Client" (Si usas VS Code)
   Si usas Visual Studio Code, no necesitas instalar Postman. Hay una extensión llamada Thunder Client que es idéntica a Postman pero vive dentro de tu editor.

Es extremadamente rápida.

No requiere agentes ni configuraciones extra para localhost.

Un detalle CRUCIAL para tu test con Laravel
Independientemente de la herramienta que uses, recuerda que si estás probando una API en Laravel, debes asegurarte de:

Tener el servidor corriendo: php artisan serve.

Headers obligatorios: En Postman, debes agregar estas dos llaves en la pestaña Headers:

Accept: application/json

Content-Type: application/json

Nota: Si no envías el header Accept: application/json, Laravel podría intentar redirigirte a la página de inicio (web) en lugar de devolverte un error JSON si algo falla.

teniendo ya nuestra peticion local en postman, con los parametros del cuerpot:

uri: http://localhost:8000/api/auth/login
body: form-data
email: klvst3r@gmail.com
passwrod: desarrollo

Al hacer la peticion local nos devuelve 200 OK:

{
"access*token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Njg4NDkzMDksImV4cCI6MTc2ODg1MjkwOSwibmJmIjoxNzY4ODQ5MzA5LCJqdGkiOiJSQ2tJTFV5SnRkN3JkNXVNIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.J1cz2yrF-4*-so0YhEWPekzf8geVGwrWHYNzFUXstPM",
"token_type": "bearer",
"expires_in": 3600
}

Retornara un access token, con el cual vamos a identificarnos en todas las demas peticiones del proyecto klvst3r-vue, es decir, cuando hagamos un apeticion a una ruta que este protegida solo para las personas autenticadas, no vamos a autenticar justamente con, este token, asi que tenemos que autenticarnos con este token, con los datos:
email y password

Lo que ocurre que en cada peticion mandemos usuario y contraseña, por que un usuario mal intecionado puede estar interceptando las peticiones que hagamos y de esa manera podemos capturar el usuario y contraseña, una ve que captura puede hacer peticiones an uestro nombre, por ello no es necesario mandar usuario y contraseña, por ello haremos una sola peticion, con los fitro de seguridad y una vez retornar un token y al hacer mas peticiones nos identificamos con el acces token, con este token, y si llegasen a capturar el token

Vamos con el segundo endpoint, que son las rutas son hacen las peticiones http hacia nuestro servicio de api (Laravel)

http://localhost:8000/api/auth/refresh

Este endpoint se ha generado para generar un nuevo endpont a partir del token que se tiene :

{
"access*token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Njg4NDkzMDksImV4cCI6MTc2ODg1MjkwOSwibmJmIjoxNzY4ODQ5MzA5LCJqdGkiOiJSQ2tJTFV5SnRkN3JkNXVNIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.J1cz2yrF-4*-so0YhEWPekzf8geVGwrWHYNzFUXstPM",
"token_type": "bearer",
"expires_in": 3600
}

Este es en el caso de que en nuestra aplicación deseamos agregar la opcion de no cerrar sesion.
Si no queremos cerrar sesión, el token llegase a cerrarse se va a generar, un nuevo token a paritr del que tenemos

entonces para este en las cabeceras:

agregamos uno mas

key Value
Authorization bearer bearea eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Njg4NDkzMDksImV4cCI6MTc2ODg1MjkwOSwibmJmIjoxNzY4ODQ5MzA5LCJqdGkiOiJSQ2tJTFV5SnRkN3JkNXVNIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.J1cz2yrF-4\*-so0YhEWPekzf8geVGwrWHYNzFUXstPM

y enviamos, asi a partir del token inicial

{
"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVmcmVzaCIsImlhdCI6MTc2ODg1NDEwNywiZXhwIjoxNzY4ODU3NzM5LCJuYmYiOjE3Njg4NTQxMzksImp0aSI6Ik5CTWNCZ3NQQ2kwbk1DT1kiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.upnoIwsscgUK5KTR4u8PhjnsLXi8Zd5NqbI0gMP-Bas",
"token_type": "bearer",
"expires_in": 3600
}

Se ha generado un nuevo token que servira de igual manera para identificarnos, para verificar esto en la ultima peticion,

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVmcmVzaCIsImlhdCI6MTc2ODg1NDEwNywiZXhwIjoxNzY4ODU3NzM5LCJuYmYiOjE3Njg4NTQxMzksImp0aSI6Ik5CTWNCZ3NQQ2kwbk1DT1kiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.upnoIwsscgUK5KTR4u8PhjnsLXi8Zd5NqbI0gMP-Bas

http://localhost:8000/api/auth/me

POST me

key value
Content-type application/json
Accept application/json
Authorization bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvcmVmcmVzaCIsImlhdCI6MTc2ODg1NDEwNywiZXhwIjoxNzY4ODU3NzM5LCJuYmYiOjE3Njg4NTQxMzksImp0aSI6Ik5CTWNCZ3NQQ2kwbk1DT1kiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.upnoIwsscgUK5KTR4u8PhjnsLXi8Zd5NqbI0gMP-Bas

La respuesta sera el mismo usuario con el que estabamos trabajando
{
"id": 2,
"name": "Klvst3r",
"email": "klvst3r@gmail.com",
"email_verified_at": "2026-01-19T18:35:20.000000Z",
"created_at": "2026-01-19T18:35:20.000000Z",
"updated_at": "2026-01-19T18:35:20.000000Z"
}

Ese es el fucnionamiento de la api para hacer login

Esto es el comportamiento de la api

## Reconfiguracion de repositorio Git

Al subir nuestro proyecto a git, ya habiamos intentado configurado antes, pero lo hicimos mediante el protocolo HTTPS en lugar de SSH, y por ello nos pide usuario y contraseña. pasa solcions ello debemos utilizar nuesra llave ssh y actualizar le url de "remote" y verificar la conexión.

Cambiamos la URL de HTTPS a SSH

Ejecutamos el siguiente comando en tu terminal para sobrescribir la configuración actual:

```Bash

git remote set-url origin git@github.com:Klvst3r/vue-api.git
```

2. Verificar el cambio
   Para asegurarte de que ahora apunta a la dirección de SSH (la que empieza con git@github.com), ejecuta:

```Bash

git remote -v
```

Deberiamos ver algo como esto: origin git@github.com:Klvst3r/vue-api.git (fetch) origin git@github.com:Klvst3r/vue-api.git (push)

3. Probar la conexión y subir cambios
   Ahora intenta hacer el push nuevamente:

```Bash

git push -u origin main

```

## Servicios de autenticación

Ahora que ya sabesmos el comportamiento de la API con Postman, vamos en authServices, este archivo

src/modules/auth/services/authService.js

Tiene la responsabilidad de hacer peticiones a nuestra API, no va a tener logica, y retornar lo que la API le responda, imporatmos la configuraicon hecha en axiosconfig
import apiClient from '@/axios/axiosConfig'

export default {
login(){

    },
    logout(){

    },
    refresh(){

    },
    me(){

    }

}

cada uno de estos metodos, deben hacer una peticion hacia la api, primero accediendo al apiClient, haciendo un apeticion de tipo post, pasandole tamien el usuario y contraseña
Axios va a recir las peticiones de tipo asincrona
login(acredentials) {
//Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas
apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales
},

axios.get('/user?ID=12345')

axios la recibe de la siguiente manera. si esta se resuelve satisfactoriamente, podemos capturarlo con le metodo tehn o en caso contrario con el metodo catch.
axios.get('/user?ID=12345')
.then(function (response) {
// handle success
console.log(response);
})
.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {
// always executed
});

Aunque puede trabajar de forma mas intuitiva con Async/await, revisado anteriormente en temas de peticiones asincronas. en el proyecto anterios de vue3

Si queremos trabajar con Asyn/await y leugo colocar la pabra await, es decirle a que si la promesa se resuleve, antes de continuar.
async login(acredentials) {
//Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas
await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales
},

Ahora, de forma resumida, es indicar a axios que espera que la promesa se resuelva, antes de continuar. esta promesa puede devolverse satisfactoriamente, o dar un error, y eso se puede caputrar con un try catch.

async login(acredentials) {
try {
} catch (error) {}
await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales
},

Cambiamos dentro del try,

async login(acredentials) {
try {
await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,
} catch (error) {}
},

Si la promesa se resolvio satisfactoriamente, vamos a capturar esa respuesta en una constante llamada response

async login(acredentials) {
try {
const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,
} catch (error) {}
},

y ahora lo que tenemos que hacer e rertotnar dicha respuesta

const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,

      return response

Ahora cuando nosotros haciamos logins, la respuesta lo retorna de la siguiente manera:

{
"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Njg5MjAzODQsImV4cCI6MTc2ODkyMzk4NCwibmJmIjoxNzY4OTIwMzg0LCJqdGkiOiIyWWRmSzJDTk4yd0RWeFRGIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.npFxAD3OzUPlPLGqkN-oAZdc-CrWh27i3w8EvCL0-ZE",
"token_type": "bearer",
"expires_in": 3600
}

Ahora cuando hacemos petiionescon axios, la respuesta lo encapsula dentro de una propiedad llamada data, para acceder entonces a este valor hacemos:

return response.data

Indicamos, retorname la data, de esta respuesta

} catch (error) {}

Cuando hay errores en la peticion, vamos a capturar ese error, dentro de la variable error, pero la data del error, esta dentro de la respuesta del campo data. entonces si hay un error, que retorne el error, de la siguente manera, accediendo al response y devolveindo la data.

catch (error) {
return error.response.data;
}

Esto seria todo respecto a esta peticion.

Para las peticiones de logout, de refresh y me tambien deben ser funciones asyncronas, asi que hacemos.

export default {
//Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas

async login(acredentials) {
try {
const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,

      return response.data
    } catch (error) {
      return error.response.data
    }

},
async logout() {
try {
const response = await apiClient.post('/auth/logout') //no pasamos ninguna credencial

      return response.data
    } catch (error) {
      return error.response.data
    }

},
async refresh() {
try {
const response = await apiClient.post('/auth/refresh')

      return response.data
    } catch (error) {
      return error.response.data
    }

},
async me() {
//Obtenemos los datos del usuario
try {
const response = await apiClient.get('/auth/me')

      return response.data
    } catch (error) {
      return error.response.data
    }

},
}

El objetivo de crear servicios es, seguir el principio de la responsabiidad unica, tenemos un archivo cuya unica responsabildad e establecer el punto de conexion

1. conexion
   en Axiosconfg archivo de conexion unica, es establecer el punto de concexion:
   const apiClient = axios.create({
   baseURL: 'https://localhost:8000/api',
   headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
   },
   })

Desde aca se puede agregar algo que se le conoce como interceptores que veremos mas adelante.

2. peticiones a la api
   Tenemos otro archivo cuya unica funcion es hacer peticiones a la api, simplemente y retorna
   Archiovo AuthService

3. Logica de funcionalidad
   Lo siguiente es trabajar la funcionalidad va a ser el agregar logica, poner los puntos de como se debe procesar la inforamcion

## Tienda de autenticación

Vamos a agregar logica, como esta el proceso de realización del login, esto se hace en una tienda, las tiendas no solo almacenan valores sino que es donde vamos a colocar nuestra logica de programación.

La tienda:
src/stores/authStore.js

aunque se rompe la estructura modular, ya que se tendria que salir de la carpeta auth, para no romper, desistimos y lo deifnimos en el modulo auth

Por ello cambiamos la ruta a:
src/modules/auth/stores/authStore.js

1. Definimos la tienda

```js
import { defineStore } from 'pinia'

//Llamamos al servicio definido

import authService from '../services/authService'

//utilizamos la sintaxis de Composition API
export const useauthStore = defineStore('auth', () => {
  //Definimos la funcion login pasandole las credenciales, la siguiente funcion tambien es una fucnio asincrona
  async function login(credentials) {
    //Acedemos al servicio y ejecutamos el metodo login, esperando que se resulva la siguiente promesa, despues la respuesta del authService la queremos capturar
    const response = await authService.login(credentials)

    //este metodo puede ser satisfactorio o generar error
    try {
      //captura la respuesta, si se produce un error se ejcuta la captura el error del servcio y se retorna el error
    } catch (error) {
      //Retorna el error
      throw error //capturamos el error y seguimos difundiendo el error
    }
  }
})
```

2. La definicion final es:

src/modules/auth/stores/authStore.js

```js
import { defineStore } from 'pinia'

//Llamamos al servicio definido
import authService from '../services/authService'

//utilizamos la sintaxis de Composition API
export const useauthStore = defineStore('auth', () => {
  //Definimos mejor una constante token y sea la constante de recuperar el valor
  const token = ref(localStorage.getItem('access_token') || null) //Si existe la variable que sea el valor al que se asigna al token

  //Primero definimos un apropiedad computada, nos ineresa saber si tiene o no un token
  //const isAuthenticated = computed(() => (token.value ? true : false)) //Verificamos si lo que se recibe es un valor nullo, verificando el token, esto es lo msmo que lo de la siguiente linea
  const isAuthenticated = computed(() => !!token.value) // si tenemos ago aca devuelve true en caso contrasrio retorna false

  //Definimos la funcion login pasandole las credenciales, la siguiente funcion tambien es una fucnio asincrona
  async function login(credentials) {
    //Acedemos al servicio y ejecutamos el metodo login, esperando que se resulva la siguiente promesa, despues la respuesta del authService la queremos capturar
    const response = await authService.login(credentials)

    //Quiero almacenar en el local storage ese token, enviado por la api, como parametros la variable del tokem y con un segudo valor el valor que queremos almacenar
    localStorage.setItem('access_token', response.access_token)
    //localStorage.setItem('access_token', response.data.access_token)

    //este metodo puede ser satisfactorio o generar error
    try {
      //captura la respuesta, si se produce un error se ejcuta la captura el error del servcio y se retorna el error
    } catch (error) {
      //Retorna el error
      throw error //capturamos el error y seguimos difundiendo el error
    }
  }

  //Finalmenbte debemos pedir que nos retorne esot s valores
  return {
    isAuthenticated, //saber si el usuario esta autenticado
    login, //metodo para loguear
  }
})
```

Paa wque despues veamos como utilizar esta tienda para realizar el rpoceso de login,

## Proceso de Login

Para el proceso del login, vamos a abrir la vista
src/modules/auth/views/LoginView.vue

Aun no trabajaremos con el formulario, en la vista vamos a indicar cada vez que intente enviar el formulario es que se va a ajecutar un metodo.
para ello, utilizamos @submit.prevent=""

<form class="space-y-4 md:space-y-6" action="#">
Pasa a
<form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">

el usuario escribe sus credenciales en el formulario y se hace una peticion a la api

para ello en la definicion en la parte del script definimo el metodo que hara la peticion, pero antes se define la constante

//importamos el metodo reactive, ya que puede cambiar a medida que el usuario vaya escribiendo
import { reactive } from 'vue'

//variable reactiva de credenciales, inicializada con un objeto con dos propiedades
const credentials = reactive({
email: 'klvst3r@gmail.com', //inicializamos a la variable con un correo
password: 'desarrollo',
})

//Definicimos una funcion con este nombre, una
function handleLogin() {
//Aqui iria la logica para manejar el login,
//console.log('Login form submitted')
// el usuario escribe sus credenciales en el formulario y se hace una peticion a la api
}

una vez hecho estovamos a llamar a nuesra tienda authStore

//Vamos a llamar a la tienda
import { useAuthStore } from '@/modules/auth/stores/authStore.js' // = '../stores/authStore'

Lo instanciamos, definiendo un aconstante

Definimos una constante y le decimos que queremos utilizar esta tienda aqui
const authStore = useAuthStore()

ahora vamos ahora si al metodo handleLogin para hacer una tpeticion a este metodo,

Hacemos una peticion al metodo login
async function login(credentials) { de authStore.js
src/modules/auth/stores/authStore.js

Al probar nos marca un error ya que en

En tu archivo src/api/axiosConfig.js has creado la constante apiClient, pero no la estás exportando. En JavaScript, si no exportas explícitamente una variable, esta permanece privada dentro de ese archivo.

La Solución
Agrega la línea export default apiClient al final de tu archivo:

JavaScript

// src/api/axiosConfig.js
import axios from 'axios'

const apiClient = axios.create({
baseURL: 'https://localhost:8000/api',
headers: {
'Content-Type': 'application/json',
Accept: 'application/json',
},
})

// AGREGA ESTA LÍNEA:
export default apiClient

¿Por qué esto arregla el error?
Cuando en tu authService.js escribes: import apiClient from '@/api/axiosConfig'

Vite busca una exportación marcada como default. Como tu archivo no tenía ninguna, te lanzaba el error does not provide an export named 'default'.

Un detalle importante: localhost:8000 y HTTPS
He notado que tu baseURL es https://localhost:8000/api.

Advertencia: Si tu servidor local (backend) no tiene configurado un certificado SSL real, el navegador bloqueará las peticiones por error de "Certificado no válido".

Sugerencia: Si estás en desarrollo y no tienes SSL configurado en el backend, cambia https por http: baseURL: 'http://localhost:8000/api'

Verificamos que el servicio luzca asi:
// src/modules/auth/services/authService.js
import apiClient from '@/api/axiosConfig' // Sin llaves porque es export default

export default {
login(credentials) {
return apiClient.post('/login', credentials)
}
}

Asi entonces tenemos el mismo problema en la tienda de pinia
El Problema
En LoginView.vue tienes algo como esto: import { useAuthStore } from '@/modules/auth/stores/authStore'

Pero en tu archivo de Store, probablemente te falta la palabra clave export o estás usando un export default cuando el componente espera una importación nombrada (con llaves { }).

entonces nuestro archivo de la logica de autentificacion con la tienda (pinia)

el codigio de authStores queda:

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)
import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API
export const useAuthStore = defineStore('auth', () => {
// Definimos una constante token que recupera el valor del localStorage al iniciar
const token = ref(localStorage.getItem('access_token') || null)

// Propiedad computada para saber si el usuario está autenticado
// Retorna true si hay token, false si es null
const isAuthenticated = computed(() => !!token.value)

// Función asíncrona para manejar el inicio de sesión
async function login(credentials) {
try {
// Accedemos al servicio y ejecutamos el método login
// Esperamos la respuesta del authService
const response = await authService.login(credentials)

      // Actualizamos la referencia reactiva para que la UI se entere del cambio
      token.value = response.access_token

      // Almacenamos en el localStorage el token enviado por la API
      localStorage.setItem('access_token', response.access_token)

      // Retornamos la respuesta para que el componente pueda usarla (ej. redireccionar)
      return response
    } catch (error) {
      // Capturamos el error del servicio y lo seguimos difundiendo
      console.error('Error detectado en el Store:', error)
      throw error
    }

}

// Retornamos los valores y métodos para que sean accesibles en los componentes
return {
token,
isAuthenticated,
login,
}
})

el resultado en consola es:
🍍 "auth" store installed 🆕

en LoginView vamos a quietar de los input Text los required, son 3

La idea es que cuando hagamos click en el boton Sig in deberia hacer login, por las credenciales inyectadas incialemnte

Debiendo almacenar en el localstorage el access_token, haciendo el login me debe redireccionar a la pagina de inciio, paa ello entonces:

Tenemos que interacturar con el enrutador, impotando el useRouter

con esta instruccion recuperamos el local storage: localStorage.getItem('access_token')

Podemos comprabarlo si nos dirigimos a la aplicacion princiapal:

src/App.vue

//este access_token estaba en localStorage de src/modules/auth/stores/authStore.js
console.log(localStorage.getItem('access_token'))

ahora en el login pulsmaos el boton de login y nos redirigira hacia la pagina principal de nuestro sistea

Si pasamos unas credenciales erroenas, no permitira el acceso

## Credenciales incorrectas

LoginView.vue:39 Login failed:
{message: 'No autorizado', errors: {…}}
errors:
email: Array(1)
0: "Las credenciales proporcionadas son incorrectas."
length: 1
[[Prototype]]: Array(0)
[[Prototype]]: Object
message: "No autorizado"
[[Prototype]]: Object
handleLogin @ LoginView.vue:39

Las credenciales proporcionadas snincorrectas, podemos verificar por ejemplo cuando no enviamos el passrod, nos dara la pauta de cual es el error en si.
Asi podremos comprobar los mensajes de error,

Esto es para saber si el usuario no envio su correo o lo mando incorrectamente, o con un formato de correo no valido, estos mensajes se mostraran en esta parte.

Asi es como funiona el proceso del Login, pues hemos visto el funcionamiento ya de la api de autenticación.

En la vista LoginView, aun no trabajaremos con el formulario, lo que se revisara es que cada vez que se intente enviar el formulario, lo que ocurrira es que e ejecutara un metodo. Prevenimos el metodo del boton y ejecutaremos un metodo.

## Errores de validación

Vamos a ver como podemos mostrar los errores en el proceso de validación

Para ello regresamos todo para tene prepearado

Quitamos la visualizacioin en la aplicación princiapl

//console.log(localStorage.getItem('access_token'))

Tambien en LoginView, desomentamos el envio de las credenciales

email: 'klvst3r@gmail.com', //inicializamos a la variable con un correo
password: 'desarrollo',

Entonces nuevamnetye al enviar el login, retorna errores:
Indicandonos que las contraseña es requerida:

authStore.js:34 Error detectado en el Store:
{message: 'The email field is required. (and 1 more error)', errors: {…}}
errors
:
{email: Array(1), password: Array(1)}
message
:
"The email field is required. (and 1 more error)"

Los errores son del correo y la contraseña son requeridos

Lo que debemos hacer es

Tranformar los errores retornados:

errors:
email: ['The email field is required.']
password: ['The password field is required.']
[[Prototype]]: Object
message: "The email field is required. (and 1 more error)"

En un array mas simple y que contenga los valores de lso mensajes.
Vamos a hacer lo mas simple para elloe en LoginView definimos los siguiete:

Comentamos los errores de salida del consololog
//console.error('Login failed:', error)

En LoginView imrpimios array de errores y la llave de los errors:

//Vamos a capturar los errores que lleguen
const responseErrors = error.errors

    //Imprimimos los errores arrays
    console.log(responseErrors)

    //Vamos a recorrer el array y vaya almacenando el valor de field
    for (const field in responseErrors) {
      console.log(field) //Imrpime errores cada vez que encuantra un nuevo elementos dentro del array
    }

dandono s en la salida de consola

authStore.js:34 Error detectado en el Store:
{message: 'The email field is required. (and 1 more error)', errors: {…}}
errors
:
{email: Array(1), password: Array(1)}
message
:
"The email field is required. (and 1 more error)"
[[Prototype]]
:
Object

LoginView.vue:45
{email: Array(1), password: Array(1)}
LoginView.vue:49 email
LoginView.vue:49 password

Entocnes ya teniendo calro esto

Vamos a buscar Tailwind alert

Para que se coloque antes del formulario, asi cuando exista un error, mostrar la alerta y deshabilitar el boton de ogin para que el usuario sepa que hay un error

Eslo lo hacemos con el valor de isLoading en LogingView

Aparte del try y catch vamos a colocar otro valor finally

Ahora el comportamiento es Envio el formuaro, si hay error, manda la aterta pero restablece el boton

Ahora lo que queremos es que en caso de que el usuario se encuentre autenticado, ya no se permitira entrar al login, a la vista.
