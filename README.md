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

## Recuperar datos del formulario

Ahora vamos a enlazar estas propiedas credentials

const credentials = reactive({
// email: 'klvst3r@gmail.com', //inicializamos a la variable con un correo
// password: 'desarrollo',
})

Con los imput del formulario para poder modificar directamente, desde ahi.

Al utilizar

<FormInput
v-model="credentials.password"

primero tenemos que definirlo en el componente en este caso:
src/modules/shared/components/FormInput.vue

<script setup>
const model = defineModel()
</script>
<template>
  <input
    v-model="model"

Ahora ya esta correcto

Esto hacer que al cargar el formulario me carga los valores de las credenciales definidos

Por ello

const credentials = reactive({
email: 'klvst3r@gmail.com', //inicializamos a la variable con un correo
password: 'desarrollo',
})

Cambia a
const credentials = reactive({
email: '', //inicializamos a la variable con un correo
password: '',
})

Para poder llenarlo desde el formulario
, pulsamos login y nos autenticara llevandono sal home o /

Si inicia sesion por eso redirecciona.

Ahora en el formulario, escribimos contraseñas incorrectas,

Nos envia el mensaje de contraseñas incorrectas:

Danger
Ensure that these requirements are met:
Las credenciales proporcionadas son incorrectas.

Pero el mensaje vamos a cambiarlo

En LoginView

Eliminamos el emsaje del aler

<span class="font-medium">Ensure that these requirements are met:</span>

cambiando a
<span class="font-medium"> ¡'Ups' Ha ocurrido un error! </span>

Lo que sigue es que queremos evitar un usuario ingrese a esta seccion cuando ya previamente ya haya iniciado sesión.

## Guard

Al definior las rutas podemos tambien definir metadata, que es información que luego podemos recupearar al ingresar con el router.

entonces en src/router/index.js

Creamos un anueva carpeta en la carpeta de rutas /guards
src/router/guards/authGuard.js

Este archivos traera la tienda que contiene la informacióin acerca de si el usuario se encuentra autenticado o no la tienda es:

src/modules/auth/stores/authStore.js

Que se llama authStores.js

con la información de

isAuthenticated

entonces ahora si podemos importar diche tienda

Para crear un guard es definir una funcion y se exportara

Asignamos un afuencion flecha a la variable authGuard con tres parametros

export default authGuard = (to, from, next) => {

}

Los guards son como una especie de interceptores y se ejecutan cada vez que queremos acceder a una determinada ruta

Si accedo a la ruta home lo que ocurre es que se ejecute el guard asociado a esta ruta, si ingreso a la ruta login si es que hay un interceptor, lo primero antes de mostrar cualquier información es que se va a ejecutar este guard.

Dentro de la variable to va a estar la ifnoramciṕn acerca de la ruta a la cual estamos tratando de acceder

Si accedemos a login dentro de to va a quedar la información acerca de login, si accedo a home dentro de to queda la infrmaciṕon de home.

Lo que vamos a hacer es que ya importada la tienda inicializamos la tienda

Inicializamaos la tienda y despues con un condicional

si dentro de la ruta que estamos tratando de aceder en este momento hemos pasado alguna metadata

El guard se crea asi:

import { useAuthStore } from "@/modules/auth/stores/authStore";

export default authGuard = (to, from, next) => {
const authStore = useAuthStore();

    if (to.meta.requiresAuth && authStore.isAuthenticated) { // si dentro de la ruta que estamos tratando de acceder hemos pasado alguna metadata, y si esa meta esta autenticada lo que se hace es redirigir a la ruta de login para su autenticacion es igual a requiresAuth para ello next
        next({ name: 'login'}); //Pedimos que nos redireccione hacia el login.
    } else if(to.meta.requiresGuest && !authStore.isAuthenticated) {  //Preguntamos si hay un campo llamadao requiresGuest, significa que el usuario no debe estar autenticado, debemos rechazar su peticion, redirigir hacia home
        next({ name: 'home' });
    }else{ //Si no es ni uno ni otro que me deje continuar
        next() //hacemos en continuar sigue tu camino
    }

}

Este guard no esta funcionando aun, para funcionar lo que tenemos que hacer asignaeselo a las rutas. Hay dos formas,

Una es asignarla de manera manual, dirigirnos a cada una de ellas, empezar a asignarselo .

La otra es asignarlo de manera global, en este caso lo haremos asi, queremos que afecte todas las rutas.

Si queremos que esto fucnioine, tenemos que agregarle la metadata de la ruta.

Por ejemplo en el archivo de ruta proncipal hay un metodo que no se le ha agregado ninguna metadata

src/router/guards/authGuard.js

{
path: '/',
component: () => import('@/layouts/public/PublicLayout.vue'),
children: publicRoutes,
},

No le va a afectar pero a la ruta /path deberia afectar,

Para agrgarlo de manera global lo hacemos de la siguiente manera.

nos dirigimos a

src/router/index.js

considerando que todo en el archivo se trata de una constante llamada router

const router = createRouter({

debajo de la inicialización vamos allamar al roiyer y vamos allamar al siguiente metodo beforeEach()

router.beforeEach(authGuard);

Si importa con:

import authGuard from './guards/authGuard'

Aunque se suguie el procedimiento al ir a la ruta:

http://localhost:5173/auth/login

lleva al login lo que indica que no se esta trabajando correctamente el guarda aca la asistencia:

Instancie en otro equipo mi proyecto de vue, el cual trabaja con axios, pero ahora me marca error algo me falta por configurar:

ya instale axios al proyecto

prepare.js:1 🍍 "auth" store installed 🆕

authStore.js:34 Error detectado en el Store: {message: 'Error de conexión con el servidor'}

login @ authStore.js:34

await in login

wrappedAction @ pinia.js?v=8d3c0960:5507

store.<computed> @ pinia.js?v=8d3c0960:5204

handleLogin @ LoginView.vue:46

(anonymous) @ chunk-2MKFL3BX.js?v=dfea571e:12443

callWithErrorHandling @ chunk-2MKFL3BX.js?v=dfea571e:2342

callWithAsyncErrorHandling @ chunk-2MKFL3BX.js?v=dfea571e:2349

invoker @ chunk-2MKFL3BX.js?v=dfea571e:11425

authService.js:10 POST http://localhost:8000/api/auth/login net::ERR_CONNECTION_REFUSED

dispatchXhrRequest @ axios.js?v=f2c9fd4f:1696

xhr @ axios.js?v=f2c9fd4f:1573

dispatchRequest @ axios.js?v=f2c9fd4f:2107

\_request @ axios.js?v=f2c9fd4f:2327

request @ axios.js?v=f2c9fd4f:2219

httpMethod @ axios.js?v=f2c9fd4f:2356

wrap @ axios.js?v=f2c9fd4f:8

login @ authService.js:10

login @ authStore.js:22

wrappedAction @ pinia.js?v=8d3c0960:5507

store.<computed> @ pinia.js?v=8d3c0960:5204

handleLogin @ LoginView.vue:46

(anonymous) @ chunk-2MKFL3BX.js?v=dfea571e:12443

callWithErrorHandling @ chunk-2MKFL3BX.js?v=dfea571e:2342

callWithAsyncErrorHandling @ chunk-2MKFL3BX.js?v=dfea571e:2349

invoker @ chunk-2MKFL3BX.js?v=dfea571e:11425

El error net::ERR_CONNECTION_REFUSED indica que tu aplicación Vue está intentando comunicarse con el backend, pero no hay nada escuchando en la dirección especificada o la conexión está siendo bloqueada.

Al cambiar de equipo, es muy común que falten configurar las variables de entorno o levantar los servicios del backend. Aquí tienes los pasos para solucionarlo:

1. Verifica que el Backend esté corriendo
   El error dice que buscas el API en http://localhost:8000. Asegúrate de que tu servidor de Laravel (o el backend que uses) esté activo en ese puerto:

Abre una terminal en la carpeta de tu proyecto backend y ejecuta:

Bash
php artisan serve
(O el comando correspondiente si usas Docker/Sail).

Prueba rápida: Abre http://localhost:8000 en tu navegador. Si no carga nada, el problema es el servidor backend.

2. Configura las Variables de Entorno (.env)
   Es probable que al clonar el proyecto en el nuevo equipo no hayas creado el archivo .env en la carpeta de Vue.

Copia el archivo de ejemplo: cp .env.example .env

Revisa que la variable VITE_API_URL (o como la hayas nombrado en Axios) coincida con la URL de tu backend:

Code snippet
VITE_API_BASE_URL=http://localhost:8000/api
Importante: Después de modificar el .env, debes detener el comando npm run dev y volverlo a ejecutar para que Vue reconozca los cambios.

3. Configuración de CORS en el Backend
   Si el backend ya está corriendo, puede que esté rechazando la conexión por seguridad. En Laravel, asegúrate de que el archivo config/cors.php permita las peticiones desde el puerto donde corre Vue (usualmente http://localhost:5173).

4. Revisa la IP (Si usas un entorno virtualizado)
   Si estás usando Docker, Sail, o intentas ver el proyecto desde otro dispositivo en la misma red:

localhost no funcionará igual. Deberás usar la IP de tu máquina (ej. 192.168.1.15).

En el backend, corre el servidor permitiendo conexiones externas: php artisan serve --host=0.0.0.0.

5. Configuración de Axios
   Asegúrate de que en tu archivo de configuración de Axios (donde creas la instancia), estés usando la variable de entorno correctamente:

JavaScript
// src/services/axios.js
import axios from 'axios';

const api = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
Resumen de comprobación:

¿Está encendido el backend?

¿El puerto es el 8000?

¿Existe el archivo .env en el proyecto Vue con la URL correcta?

¿Lograste levantar el servidor de Laravel o te lanza algún error al intentar ejecutar php artisan serve?

bien ya levante el servidor backend pero como verifico si mi usuario corrio con los seeder adecuados, el seeder del back es:

\*/

public function run(): void

{

// User::factory(10)->create();

// Usuario de ejemplo previo

User::factory()->create([

'name' => 'Victor Arana',

'email' => 'victor@codersfree.com',

'password' => bcrypt('12345678'),

]);

//Nuestro usuario personalizado

User::factory()->create([

'name' => 'Klvst3r',

'email' => 'klvst3r@gmail.com',

'password' => bcrypt('desarrollo'),

]);

}

Para verificar si los usuarios se crearon correctamente en tu base de datos y que el login en Vue funcione con las credenciales que definiste, tienes tres métodos principales:

1. Consultar la Base de Datos (Vía Terminal)
   Dado que prefieres Debian para desarrollar, la forma más rápida es usar Tinker, que es una consola interactiva de Laravel que te permite interactuar con la base de datos directamente.

En la carpeta de tu backend, ejecuta:

Bash
php artisan tinker
Una vez dentro, busca los usuarios con este comando:

PHP
User::all();
Esto te mostrará una lista (JSON-like) de todos los usuarios. Deberías ver a "Victor Arana" y a "Klvst3r".

Para salir de Tinker, escribe exit.

2. Ejecutar los Seeders (Si no aparecen)
   Si al hacer el paso anterior la lista sale vacía, es porque instalaste el proyecto pero no has ejecutado las migraciones y los seeders en este nuevo equipo. Ejecuta lo siguiente:

Bash

# Borra las tablas, crea las nuevas y ejecuta los seeders

php artisan migrate:fresh --seed
Nota: El comando migrate:fresh borrará cualquier dato previo. Si solo quieres ejecutar el seeder sin borrar nada, usa: php artisan db:seed.

3. Verificar con una herramienta visual
   Como estás trabajando con SQLite (según mencionaste anteriormente) o MariaDB/MySQL, puedes usar herramientas que te permitan ver las tablas gráficamente:

VS Code: Instala la extensión "SQLite Viewer" o "Database Client". Solo tienes que abrir el archivo database/database.sqlite y podrás ver la tabla users con tus registros.

DBeaver: Es una excelente opción gratuita para Debian que soporta casi cualquier base de datos.

¿Cómo probar el Login ahora?
Ahora que confirmaste que el usuario existe, intenta loguearte en tu interfaz de Vue con:

Email: klvst3r@gmail.com

Password: desarrollo

Si el error net::ERR_CONNECTION_REFUSED persiste a pesar de que el servidor está corriendo (php artisan serve), revisa si el puerto en el que levantó el backend es realmente el 8000, ya que a veces si ese puerto está ocupado, Laravel sube automáticamente al 8001.

¿Qué resultado te dio el comando User::all(); en Tinker?

⚡klvst3r ❯❯ php artisan tinker

Psy Shell v0.12.8 (PHP 8.2.30 — cli) by Justin Hileman

> User::all();

[!] Aliasing 'User' to 'App\Models\User' for this Tinker session.

= Illuminate\Database\Eloquent\Collection {#1342

all: [],

}

>

Tal como sospechábamos, el resultado all: [] confirma que tu base de datos está vacía en este equipo. Aunque el código del seeder existe, aún no se ha ejecutado contra la base de datos actual.

Para solucionar esto y poder iniciar sesión en tu proyecto Vue, sigue estos pasos en la terminal de tu backend:

1. Poblar la base de datos
   Ejecuta el siguiente comando para correr las migraciones pendientes y ejecutar los seeders:

Bash
php artisan db:seed
Si por alguna razón las tablas ni siquiera están creadas, usa el comando completo que reconstruye todo:

Bash
php artisan migrate:fresh --seed 2. Verificar nuevamente
Entra otra vez a Tinker para estar 100% seguro:

Bash
php artisan tinker

> User::count();
> Si el resultado es 2, ya tienes los usuarios listos para el login.

¿Por qué falló la conexión anteriormente?
Además de la base de datos vacía, el error ERR_CONNECTION_REFUSED que mostraste al principio suele ocurrir por dos detalles técnicos al cambiar de equipo:

El Host en el .env de Vue: Asegúrate de que tu archivo .env en la carpeta de Vue no tenga espacios y apunte exactamente a donde corre Laravel.

CORS: Al ser un equipo nuevo, verifica que en config/cors.php (en Laravel) tengas configurado esto para permitir que tu frontend se comunique:

PHP
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => ['http://localhost:5173'], // El puerto de Vue
Proceso de Login
Una vez que User::count() te devuelva datos, intenta entrar desde tu aplicación Vue con:

User: klvst3r@gmail.com

Pass: desarrollo

¿Te sigue apareciendo el error de "Error de conexión con el servidor" en la consola de Vue o ya lograste pasar al dashboard?

src/modules/auth/stores/authStore.js

retorna si el usario esta autenticado

const isAuthenticated = computed(() => !!token.value)

Tengo definida un Guard para verificar si el usuario esta autenticado:

src/router/guards/authGuard.js

import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {

const authStore = useAuthStore();

if (to.meta.requiresAuth && authStore.isAuthenticated) { // si dentro de la ruta que estamos tratando de acceder hemos pasado alguna metadata, y si esa meta esta autenticada lo que se hace es redirigir a la ruta de login para su autenticacion es igual a requiresAuth para ello next

next({ name: 'login'}); //Pedimos que nos redireccione hacia el login.

} else if(to.meta.requiresGuest && !authStore.isAuthenticated) { //Preguntamos si hay un campo llamadao requiresGuest, significa que el usuario no debe estar autenticado, debemos rechazar su peticion, redirigir hacia home

next({ name: 'home' });

}else{ //Si no es ni uno ni otro que me deje continuar

next() //hacemos en continuar sigue tu camino

}

}

src/modules/auth/router/index.js

// Defniremos aca las rutas de administración

const routes = [

{

path: '',

redirect: { name: 'auth-login' },

},

{

path: 'login',

name: 'auth-login',

component: () => import('@/modules/auth/views/LoginView.vue'),

},

{

path: 'register',

name: 'auth-register',

component: () => import('@/modules/auth/views/RegisterView.vue'),

},

]

//exportamos el contenido de estas rutas hacia el router pricipal

export default routes

//Despues hay que importarlo en el arhivo de rutas pricipal

pero tengo el siguiente error:

Uncaught SyntaxError: The requested module '/src/router/guards/authGuard.js' does not provide an export named 'authGuard' (at index.js:6:10)

El error Uncaught SyntaxError ocurre porque hay una discrepancia entre cómo estás exportando la función en authGuard.js y cómo la estás importando en tu router principal.

A pesar de que el código parece tener un export const authGuard, este error suele darse por dos razones comunes en entornos Vite/Vue:

1. Revisa la Importación en el Router Principal
   Busca el archivo donde importas el guard (probablemente src/router/index.js). El error indica que estás intentando importar un named export que el navegador no encuentra.

Asegúrate de que la importación tenga llaves { }:

JavaScript
// ✅ Forma correcta (con llaves)
import { authGuard } from '@/router/guards/authGuard';

// ❌ Esto causaría el error si authGuard no es el 'default'
import authGuard from '@/router/guards/authGuard'; 2. Exportación por Defecto vs. Nombrada
Si prefieres importar sin las llaves, debes cambiar la exportación en src/router/guards/authGuard.js:

JavaScript
// Opción A: Mantener export nombrado (Requiere { authGuard } al importar)
export const authGuard = (to, from, next) => { ... }

// Opción B: Cambiar a export default (Permite importar sin llaves)
const authGuard = (to, from, next) => { ... }
export default authGuard;
Un detalle importante en tu lógica del Guard
He notado un pequeño error en la lógica de tu authGuard que te causará un bucle infinito de redirecciones una vez que soluciones el error de sintaxis:

En esta línea: if (to.meta.requiresAuth && authStore.isAuthenticated)

Dices en el comentario que si requiere autenticación y está autenticado, lo mandas al login. Debería ser al revés: si requiere autenticación y NO está autenticado (!authStore.isAuthenticated), entonces lo mandas al login.

Lógica corregida:

JavaScript
export const authGuard = (to, from, next) => {
const authStore = useAuthStore();

    // Si la ruta requiere auth y el usuario NO está autenticado
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'auth-login' }); // Usa el nombre exacto de tu ruta
    }
    // Si la ruta es para invitados (login/reg) y el usuario YA está autenticado
    else if (to.meta.requiresGuest && authStore.isAuthenticated) {
        next({ name: 'home' });
    }
    else {
        next();
    }

}
Siguiente paso recomendado:
Revisa tu archivo src/router/index.js (el principal) y verifica que el nombre de la ruta hacia la que rediriges coincida con el que definiste en el módulo. En tu código de rutas usaste name: 'auth-login', pero en el guard pusiste name: 'login'. Deben ser idénticos.

¿Podrías mostrarme cómo estás importando el authGuard en tu archivo de rutas principal?

en src/router/guards/authGuard.js

Tengo:

import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {

const authStore = useAuthStore();

// Si la ruta requiere auth y el usuario NO está autenticado

if (to.meta.requiresAuth && !authStore.isAuthenticated) {

next({ name: 'auth-login' }); // Usa el nombre exacto de tu ruta

}

// Si la ruta es para invitados (login/reg) y el usuario YA está autenticado

else if (to.meta.requiresGuest && authStore.isAuthenticated) {

next({ name: 'home' });

}else{ //Si no es ni uno ni otro que me deje continuar

next() //hacemos en continuar sigue tu camino

}

}

aca se recupera

import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from '@/modules/public/router/index'

import authRoutes from '@/modules/auth/router/index'

import adminRoutes from '@/modules/admin/dashboard/router/index.js'

import { authGuard } from '@/router/guards/authGuard';

const router = createRouter({

history: createWebHistory(import.meta.env.BASE_URL),

routes: [

{

path: '/',

component: () => import('@/layouts/public/PublicLayout.vue'),

children: publicRoutes,

},

{

path: '/auth',

meta: {

requireGuest: true //con estas rutas podemos ingresar si no estamos autenticasdos

},

component: () => import('@/layouts/auth/AuthLayout.vue'),

children: authRoutes,

},

{

path: '/admin',

meta: {

requiresAuth: true //con esto para ingresar a este grupo de rutas se requiere autenticación

},

component: () => import('@/layouts/admin/AdminLayout.vue'),

// Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre

redirect: { name: 'admin.dashboard' },

children: [...adminRoutes],

},

],

})

// Agregamos el guard de manera global

router.beforeEach(authGuard); //despues de importarse se usa

export default router

y simplemente despues se usa:

router.beforeEach(authGuard);

El problema esta resuelto pero si tratamos de ingresar a

localhost:5173/auth/login

simplemente no dejara

si lo hacemos de manera manual

http://localhost:5173/auth/login

de igual manera debe retornar hacia http://localhost:5173/

para cumplir con lo que se necesita

Qué bueno que ya resolviste el error de importación. El problema de que no te permite entrar a /auth/login y te redirige al inicio se debe a una falta de coincidencia (typo) entre el nombre de la propiedad en la ruta y cómo la evalúas en el Guard.

Aquí tienes los dos ajustes necesarios para que funcione correctamente:

1. Corrige el nombre en las Rutas (requireGuest vs requiresGuest)
   En tu archivo de rutas principal, definiste la propiedad como requireGuest (sin la s), pero en tu authGuard.js estás preguntando por requiresGuest.

En src/router/index.js cámbialo a:

JavaScript
{
path: '/auth',
meta: {
requiresGuest: true // <-- Agregamos la 's' para que coincida con el guard
},
component: () => import('@/layouts/auth/AuthLayout.vue'),
children: authRoutes,
}, 2. Ajusta el nombre de la ruta de redirección
En tu Guard, tienes puesto que si el usuario ya está autenticado e intenta entrar a login, lo mande a home. Asegúrate de que en tus publicRoutes exista una ruta con ese nombre exacto.

En src/router/guards/authGuard.js:

JavaScript
// ... dentro del else if
else if (to.meta.requiresGuest && authStore.isAuthenticated) {  
 // Asegúrate de que 'home' sea el nombre correcto en tus publicRoutes
next({ name: 'home' });
}
¿Cómo funciona el flujo ahora?
Para que el sistema de protección sea robusto, la lógica debe operar así:

Estado Usuario Intenta entrar a... Meta en la Ruta Resultado esperado
No Logueado /admin requiresAuth: true Redirige a auth-login
No Logueado /auth/login requiresGuest: true Permite entrada (next)
Logueado /auth/login requiresGuest: true Redirige a home
Cualquiera / Ninguna Permite entrada (next)
Un detalle técnico extra
En Vue Router, cuando usas rutas anidadas (children), el to.meta combina los objetos de la ruta padre y la hija. Al poner requiresGuest: true en el padre (/auth), automáticamente todas las rutas hijas como /auth/login y /auth/register heredan esa propiedad. Esto es correcto y eficiente.

¿Qué pasa si intentas entrar ahora? Si después de corregir el nombre a requiresGuest te sigue redirigiendo al inicio sin dejarte ver el login, verifica en la consola si authStore.isAuthenticated no está devolviendo true por error (quizás un token viejo guardado en el localStorage de tu navegador de pruebas anteriores).

¿Quieres que revisemos cómo está definida la ruta home en tus publicRoutes para asegurar que el nombre coincida?

Si yo lo escribo de manera manual

http://localhost:5173/auth/login

me debne redirigir a http://localhost:5173/

Para que al escribir manualmente la URL del login te redirija al inicio (http://localhost:5173/), el Guard debe detectar que ya hay una sesión activa.

Si actualmente escribes la URL y no te redirige, o te permite ver el formulario de login estando ya autenticado, el problema es que el Guard no está detectando el estado real del authStore en ese momento preciso.

Aquí tienes los puntos clave para asegurar esa redirección manual:

1. Asegura la coincidencia de nombres
   Como notamos antes, tienes un pequeño desfase de nombres. Para que el Guard identifique que el login es solo para invitados, el nombre en el router/index.js debe ser idéntico al del Guard.

En tu Router:

JavaScript
{
path: '/auth',
meta: {
requiresGuest: true // Asegúrate que termine en 's'
},
// ...
} 2. Verifica el estado del Token
El Guard depende de authStore.isAuthenticated. Si escribes la URL manualmente y no te redirige, es porque token.value está vacío en ese instante.

Asegúrate de que en tu authStore.js estés recuperando el token del localStorage (u otra persistencia) al inicializarse, de lo contrario, al recargar la página o escribir la URL manualmente, el estado de Pinia se reinicia a "no autenticado".

Ejemplo en tu authStore.js:

JavaScript
const token = ref(localStorage.getItem('token') || null);
const isAuthenticated = computed(() => !!token.value); 3. El flujo del Guard (Explicación)
Cuando escribes http://localhost:5173/auth/login manualmente:

El navegador carga la app de Vue.

El router.beforeEach se ejecuta antes de mostrar la vista.

El Guard revisa: to.meta.requiresGuest (que es true).

El Guard revisa: authStore.isAuthenticated.

Si es True: Se ejecuta next({ name: 'home' }) y el usuario nunca ve el login, es enviado inmediatamente a la raíz /.

4. Prueba de Depuración
   Si quieres ver exactamente qué está pasando cuando escribes la URL manual, agrega un console.log temporal en tu Guard:

JavaScript
export const authGuard = (to, from, next) => {
const authStore = useAuthStore();

    console.log('¿Hacia dónde va?:', to.path);
    console.log('¿Requiere invitado?:', to.meta.requiresGuest);
    console.log('¿Está autenticado?:', authStore.isAuthenticated);

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'auth-login' });
    } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
        console.log('Redirigiendo a home por sesión activa...');
        next({ name: 'home' }); // <--- Esta es la línea que cumple tu requerimiento
    } else {
        next();
    }

}
Sugerencia: Si el usuario ya está logueado y tratas de forzar el login, la redirección a home es la mejor práctica. Solo asegúrate de que en tu archivo src/modules/public/router/index.js la ruta principal tenga efectivamente el nombre name: 'home'.

¿Te gustaría que revisemos cómo estás guardando el token en el Store para asegurar que no se pierda al actualizar la página?

en src/modules/public/router/index.js

Tengo:

// importamos el archivo de rutas de cada submodulo

import aboutRoutes from '@/modules/public/about/router/index.js'

import blogRoutes from '@/modules/public/blog/router/index.js'

import contactRoutes from '@/modules/public/contact/router/index.js'

import homeRoutes from '@/modules/public/home/router/index.js'

// Una forma de combinar las rutas de los submodulos e

//const routes = aboutRoutes;

// Defniremos aca las rutas de administración

const routes = [

// {

// path: '/',

// name: 'home',

// component: () => import('@/modules/public/views/HomeView.vue'),

// },

// Rutas del submodulo about

//Descrutruacion de las rutas importadas

// Se esta especificando es que en esta parte se van a agregar los elementos de este array, es decir no va a importar el array sino solo los elementos que contiene

...aboutRoutes,

...blogRoutes,

...contactRoutes,

...homeRoutes,

]

//exportamos el contenido de estas rutas hacia el router pricipal

//export default routes

export default routes

//Despues hay que importarlo en el arhivo de rutas pricipal

parece que no esta home o esta comentado, no se si deba ir asi o falt algo en este archivo

Efectivamente, el problema de por qué no te redirige a home es que la ruta con ese nombre específico no está activa o no existe dentro de los arreglos que estás combinando.

Para que next({ name: 'home' }) funcione, el router debe encontrar una ruta que tenga exactamente name: 'home'.

1. Revisa homeRoutes
   Dado que estás usando desestructuración (...homeRoutes), lo más probable es que el nombre "home" deba estar dentro de src/modules/public/home/router/index.js.

Abre ese archivo y asegúrate de que tenga esta estructura:

JavaScript
// src/modules/public/home/router/index.js
export default [
{
path: '', // Esto hace que sea la ruta raíz del módulo
name: 'home', // <--- ESTE ES EL NOMBRE QUE BUSCA EL GUARD
component: () => import('@/modules/public/home/views/HomeView.vue')
}
] 2. El conflicto en public/router/index.js
En el código que mostraste, tienes comentada la ruta manual:

JavaScript
// {
// path: '/',
// name: 'home',
// component: () => import('@/modules/public/views/HomeView.vue'),
// },
Si homeRoutes (el archivo que importas) no tiene una ruta con el nombre home, el Guard fallará porque intentará redirigir a un destino inexistente.

3. Solución recomendada
   Para mantener el orden que llevas, asegúrate de que el archivo principal de rutas públicas se vea así:

JavaScript
const routes = [
// No necesitas la ruta comentada si ya viene dentro de ...homeRoutes
...homeRoutes,
...aboutRoutes,
...blogRoutes,
...contactRoutes,
]

export default routes 4. ¿Por qué es importante para la redirección manual?
Cuando escribes en el navegador http://localhost:5173/auth/login, el flujo es este:

Carga del Guard: El Guard detecta que ya estás autenticado (porque el token existe en el Store).

Redirección: El Guard ejecuta next({ name: 'home' }).

Búsqueda: El Router busca en todo su árbol de rutas quién se llama "home".

Fallo/Éxito: \* Si no existe: Vue Router lanzará un error en consola diciendo que la ruta "home" no existe.

Si existe: Te mandará a la URL vinculada a ese nombre (que suele ser /).

Verificación final
Para confirmar que todo está vinculado correctamente, revisa estos tres puntos:

En el Guard: Que use next({ name: 'home' }).

En el Router Principal: Que la ruta de auth tenga meta: { requiresGuest: true } (con la s).

En homeRoutes: Que la ruta principal tenga name: 'home'.

¿Qué pasa si cambias el nombre en el Guard a uno que sí estés seguro que existe? Por ejemplo, si tienes una ruta llamada dashboard, intenta next({ name: 'admin.dashboard' }) solo para probar si la redirección manual funciona.

¿Quieres que revisemos el contenido de src/modules/public/home/router/index.js para ver cómo está nombrada la ruta ahí?

en mi archivo

src/modules/public/home/router/index.js

tengo:

const routes = [

//Definimos nuestra primera ruta

{

path: '',

name: 'home',

component: () => import('@/modules/public/home/views/HomeView.vue'),

},

]

export default routes

¡Perfecto! El archivo home/router/index.js está correcto. Tiene el name: 'home' que el Guard necesita para hacer la redirección.

Ahora bien, si al escribir manualmente la URL http://localhost:5173/auth/login no te redirige al inicio, el problema está reducido a un solo lugar: el Guard no está detectando que el usuario está autenticado.

Aquí tienes los pasos finales para que la redirección manual funcione al 100%:

1. Asegura la Persistencia del Token
   Al escribir la URL manualmente, la aplicación se recarga por completo. Si el token en tu authStore no se recupera del localStorage, Pinia se inicia vacío y el Guard cree que no estás logueado.

Revisa tu authStore.js y asegúrate de tener algo como esto:

JavaScript
// src/modules/auth/stores/authStore.js
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
// 1. Inicializar con lo que haya en el localStorage
const token = ref(localStorage.getItem('token') || null);

    // 2. El getter detectará si hay token al cargar la página
    const isAuthenticated = computed(() => !!token.value);

    // ... resto de tus acciones (login, logout, etc)
    return { token, isAuthenticated };

}); 2. Sincronía en el Router Principal
Verifica que en el archivo src/router/index.js el objeto meta tenga la "s" final para que coincida exactamente con lo que el Guard busca (requiresGuest).

JavaScript
// src/router/index.js
{
path: '/auth',
meta: {
requiresGuest: true // <-- Verifica la 's' aquí
},
component: () => import('@/layouts/auth/AuthLayout.vue'),
children: authRoutes,
}, 3. El Guard Definitivo
Asegúrate de que tu authGuard.js use exactamente el nombre de la propiedad que definiste arriba. Aquí te dejo la versión más limpia para evitar errores:

JavaScript
// src/router/guards/authGuard.js
import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {
const authStore = useAuthStore();

    // CASO 1: La ruta requiere estar logueado (ej. /admin)
    if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isAuthenticated) {
        next({ name: 'auth-login' });
    }
    // CASO 2: La ruta es para invitados (ej. /auth/login) y el usuario YA tiene sesión
    else if (to.matched.some(record => record.meta.requiresGuest) && authStore.isAuthenticated) {
        next({ name: 'home' }); // Esto te mandará a http://localhost:5173/
    }
    // CASO 3: Cualquier otro caso
    else {
        next();
    }

}
Tip Pro: He cambiado to.meta por to.matched.some(...). Esto es más seguro porque busca la propiedad meta tanto en la ruta hija como en todas las rutas padres (como tu /auth principal).

Verificación final
Inicia sesión en tu app normalmente.

Abre una nueva pestaña o escribe en la barra de direcciones: http://localhost:5173/auth/login.

Presiona Enter.

Si el Guard y el Store están sincronizados, deberías ver cómo la URL cambia instantáneamente a http://localhost:5173/ (el Home).

¿Te gustaría que revisemos la función de login en tu Store para confirmar que el token se esté guardando correctamente en el localStorage?

para verificaon del paso 1 en src/modules/auth/stores/authStore.js

Tengo

import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)

import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API

export const useAuthStore = defineStore('auth', () => {

// Definimos una constante token que recupera el valor del localStorage al iniciar

//esta es la forma de recuperar local storage: localStorage.getItem('access_token')

const token = ref(localStorage.getItem('access_token') || null)

// Propiedad computada para saber si el usuario está autenticado

// Retorna true si hay token, false si es null,

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

en src/router/index.js

tengo:

import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from '@/modules/public/router/index'

import authRoutes from '@/modules/auth/router/index'

import adminRoutes from '@/modules/admin/dashboard/router/index.js'

import { authGuard } from '@/router/guards/authGuard';

const router = createRouter({

history: createWebHistory(import.meta.env.BASE_URL),

routes: [

{

path: '/',

component: () => import('@/layouts/public/PublicLayout.vue'),

children: publicRoutes,

},

{

path: '/auth',

meta: {

requiresGuest: true//con estas rutas podemos ingresar si no estamos autenticasdos

},

component: () => import('@/layouts/auth/AuthLayout.vue'),

children: authRoutes,

},

{

path: '/admin',

meta: {

requiresAuth: true //con esto para ingresar a este grupo de rutas se requiere autenticación

},

component: () => import('@/layouts/admin/AdminLayout.vue'),

// Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre

redirect: { name: 'admin.dashboard' },

children: [...adminRoutes],

},

],

})

// Agregamos el guard de manera global

//despues de importarse se usa

export default router

y 3 el guard definitivo en:

src/router/guards/authGuard.js

import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {

const authStore = useAuthStore();

console.log('¿Hacia dónde va?:', to.path);

console.log('¿Requiere invitado?:', to.meta.requiresGuest);

console.log('¿Está autenticado?:', authStore.isAuthenticated);

// Si la ruta requiere auth y el usuario NO está autenticado

if (to.meta.requiresAuth && !authStore.isAuthenticated) {

next({ name: 'auth-login' }); // Usa el nombre exacto de tu ruta

}

// Si la ruta es para invitados (login/reg) y el usuario YA está autenticado

else if (to.meta.requiresGuest && authStore.isAuthenticated) {

console.log('Redirigiendo a home por sesión activa...');

next({ name: 'home' });

}else{ //Si no es ni uno ni otro que me deje continuar

next() //hacemos en continuar sigue tu camino

}

}

Tu configuración de Pinia y el Router ahora se ve muy sólida. El uso de localStorage.getItem('access_token') al inicio del store es la clave para que, al escribir la URL manualmente, el sistema no "olvide" quién eres.

Sin embargo, falta un pequeño detalle técnico para activar el Guard. En tu código de src/router/index.js, importaste el authGuard pero no lo estás ejecutando.

1. Activa el Guard en el Router
   Para que todo ese código funcione, debes decirle al router que pase por esa función antes de cada navegación. Agrega esta línea antes del export default router:

JavaScript
// src/router/index.js

// ... resto del código

// ACTIVA ESTA LÍNEA:
router.beforeEach(authGuard);

export default router; 2. El detalle del "Inheritance" (Herencia de Meta)
En tu configuración de rutas, pusiste requiresGuest: true en la ruta padre /auth. Cuando escribes manualmente http://localhost:5173/auth/login, el objeto to.meta de Vue Router combina las propiedades del padre y del hijo.

Padre (/auth): tiene requiresGuest: true.

Hijo (/login): hereda requiresGuest: true.

Por lo tanto, tu lógica en el Guard: else if (to.meta.requiresGuest && authStore.isAuthenticated) Debería funcionar correctamente ahora.

Resumen del flujo de redirección manual:
Usuario logueado tiene un access_token en el almacenamiento del navegador.

Escribe http://localhost:5173/auth/login y da Enter.

La app carga, Pinia lee el token: isAuthenticated se vuelve true.

El router.beforeEach ejecuta tu authGuard.

console.log mostrará:

¿Requiere invitado?: true

¿Está autenticado?: true

Se ejecuta next({ name: 'home' }).

El navegador te muestra la página de inicio instantáneamente.

3. Una última comprobación (El nombre de la ruta)
   En tu authStore.js, cuando haces el login, asegúrate de redirigir al usuario al lugar correcto. Y en el Guard, asegúrate de que el nombre del login sea exacto.

En tu Guard usas: next({ name: 'auth-login' }).

En tu archivo de rutas de auth (src/modules/auth/router/index.js), verifica que la ruta de login se llame exactamente auth-login.

¿Qué sigue? Prueba ahora escribiendo la URL manual. Si por alguna razón el console.log dice que isAuthenticated es false a pesar de estar logueado, significa que el nombre de la llave en el Store (access_token) podría ser diferente al que recibes de tu API de Laravel (a veces Laravel usa token o original.access_token).

## Mostrar / Coultar contenido a usuarios

Lo que queremos es mostrar o ocultar la informacion del dropdown del usuario dependiendo si estaos autenticados o no

Para ello en la seccion de laoyots

src/layouts/public/components/PublicNav.vue

Aca estan los enlaces de mostrar u ocultar, para ello, lo que se hara es llamar a la tienda por aca

//Llamar al atienda para ocltar opciones del dropdown
import { useAuthStore } from '@/modules/auth/stores/authStore'

//La vamos a utilizar a traves de una constante

const authStore = useAuthStore();

vamos a la definicion de la tienda:
src/modules/auth/stores/authStore.js

Y en las opciones del menu en:
src/layouts/public/components/PublicNav.vue

El que dice admin
<DropdownItem
            :to="{
              name: 'admin.dashboard',
            }"
          >
Admin
</DropdownItem>

Vamos a encerrarlo dentro de un template

   <template>
            <DropdownItem
              :to="{
                name: 'admin.dashboard',
              }"
            >
              Admin
            </DropdownItem>
          </template>

El contenido de este template solo debe mostrarse en el cso de que el usuario se encuentre autenticado

<template v-if="authStore.isLoggedIn">

Accedemos en authStore a su propiedad computada

isAuthenticated

<template v-if="authStore.isAuthenticated">

Entonces mostramos solo cuando el usuario este autenticado.

ahora en:

Encerramos esto en un template

<DropdownItem
            :to="{
              name: 'auth-login', // La referencia es: src/modules/auth/router/index.js
            }"
          >
Iniciciar sesión
</DropdownItem>
<DropdownItem
            :to="{
              name: 'auth-register',
            }"
          >
Registro
</DropdownItem>

quedando

 <template>
              <DropdownItem
              :to="{
                name: 'auth-login', // La referencia es: src/modules/auth/router/index.js
              }"
            >
              Iniciciar sesión
            </DropdownItem>
            <DropdownItem
              :to="{
                name: 'auth-register',
              }"
            >
              Registro
            </DropdownItem>
          </template>
a este template le aplicamos el v-else, para que el contenido se mostrara cuando no este autnticado

Verificamos y en el dropdown nolo nos aparece la opcion Admin, por que el usuario esta autenticado.

ahora debajo de la opcion del admin, queremos colocar un boton quediga logout

<template v-if="authStore.isAuthenticated">
            <DropdownItem
              :to="{
                name: 'admin.dashboard',
              }"
            >
              Admin
            </DropdownItem>
            <button>
              
            </button>
          </template>

que diga logout, como se reuiqeren algunois estilos, sera un router link por lo que pegamos clases de Public

desde:
src/modules/shared/components/DropdownItem.vue

cpiamos los estilos del boton
class="block w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100"

<button class="block w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100" >
              Logout
            </button>
quedando el boton de logout

<button class="block text-left w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100" >

dos botones de admin y logout para cerrar secion.

para ahora vamos a trabar con la ruta del Logout

## Loogout

Vamos a ver como cerramos sesion, pero antes de cerrar sesion, pero vamos a solucionar un problema de la seccion pasada, es el sigfuiente ya que en el icono del usuario, queremos eliminar la variable access_token, que se ha generado anteriormente y se a almacenado en el localstorage, para esto.

Hacemos click derecho y en modo desarrollador en la pestaña Aplicacion

en la sección de lacenamiento

En local Storage

accesamos a

http://localhost:5173

Buscamos el acceso_token que hemos generado Seleccionamos y borramos

Si hacemos esto y actualizamos ahora aparece que no se ha iniciado sesion, y podremos dirigir al login.

Entonces podremos iniciar sesion nuevamente, ya que la opcion cambia ahora a Iniciar Sesion

Entonces ahora iniciamos sesion nuyevamente

si bien es cierto que ha inicado sesion, pero sigue apareciendo los botones de iniciar sesion y registrarse. Cuando lo que deberia estar apareciendo admin y logout

ahora se muestran conrrectamente, por que ocurre esto, y es por que en la tienda

src/modules/auth/stores/authStore.js

La forma en la cual nosotros estamos viendo a que un usuario esta autenticado o no es a traves de la propiedad computada, esta propiedad computada verifica si tenemos un token desde local storage y si no tiene el token lo marca como no autenticado.
isAuthenticated

Esta propiedad computada verifica si tenemos un token el token previamente se ha recuperado desde localstorage y en esta tienda lo marca como autenticado.

y esque si no tiene el token lo marca como no autenticado.

ahora cuando hemos hecho el login en la tienda no hemos actualizado la propiedad

token de

const token = ref(localStorage.getItem('access_token') || null)

al no haberla actualizado lo que esta pasando no ha cambiado la propiedad computada, esto sigue apareciendo como false

Para esto lo que se va a realizar es lo siguiente.

luego de hacer la consylta y ver que todo haya funcionado correctamente lo proximo que vamos a hacer es actualizar el value de ese token para que cambie el estado de autenticado

Ahora, cuando hemos hecho el login

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

no hemos actualizado la propiedad

const token
y al no haberla actualizado no ha cambiado la propiedad computada aparece aun como false

const isAuthenticated

lo que haremos es luego de hacer la consulta y despues de que haya funcionado correctamente es necesario actualziar el value de ese token para que cambie el estado de autenticado.

//para el logaut tambien se borra el local storage y actualizamos el token
token.value = response.access_token;

Para que cambie el estado de autenticado, hacemos la prueba nuevamente

vamos a alamcenamiento local, y lo volvemos a eliminar y actualizamos, inicializamos sesion colocamos credenciales e iniciamos sesion,
y ahora debe estar el menu de login correctamente

Mostranbdo las copinoes
admin y logout

Ahora si vemos como hacer el proceso de logout

## Corrección del authService

Para ello vamos a dirigirnos a aeuthSore
src/modules/auth/stores/authStore.js

Tambien abrimos el servicio authService

src/modules/auth/services/authService.js

Aqui se hacen las peticiones que se necesitaban hcia la api, pero se tiene un pequeño error.

async function login(credentials) {
try {
// Accedemos al servicio y ejecutamos el método login
// Esperamos la respuesta del authService
const response = await authService.login(credentials)

      // Actualizamos la referencia reactiva para que la UI se entere del cambio
      token.value = response.access_token

      // Almacenamos en el localStorage el token enviado por la API
      localStorage.setItem('access_token', response.access_token)

      //para el logaut tambien se borra el local storage y actualizamos el token, esto es para cambiar el estado autenticado, despues de hacer login
      token.value = response.access_token

      // Retornamos la respuesta para que el componente pueda usarla (ej. redireccionar)
      return response
    } catch (error) {
      // Capturamos el error del servicio y lo seguimos difundiendo
      console.error('Error detectado en el Store:', error)
      throw error
    }

}

En el try si se logra resolver la promesa, lo que quiero que se haga es que retornes esta respuesta, esta respuesta debe ser recibido en

const response cuando la llamamos al service pero

Si es que falla es decir en el catch

La resolucion de la promesa es que se quiere que se produzca una excepción, y

throw error.response.data
Lo que se quiere que se haga es que se cree una excepcion y Mandes el error, si producimos una excepcion cuando sea llamado este service desde aqui, lo podemos capturar aca en el metodo catch() y esto

throw error.response.data

en authService.js

Deberiamos replicarlo para todos los otros metodos no deberia estar retornado sino deberia estar produciendo una excepcion en el refresh excatamente igual y en el me, por que debe esar retornando la excepcion.

Asi por ejemplo para el metodo logout

async logout() {
try {
const response = await apiClient.post('/auth/logout') //no pasamos ninguna credencial

      return response.data
    } catch (error) {
      return error.response.data
    }

},

cambiamos de un return a un throw

Por que como se habia mencionado, si nosotros simplemente retornamos el error, significa que todo el proceso se va arealizar netamente en el metodo try es decir nunca se va a aejecutar el metodo catch().

eso se replica en los metodos logout(), refresh(), y me().

Por que debe estar retornando unaexcepción, por que se habiamenciaonado que si nosotros solo reotrnamos el error, significa que todo el procesa se reaizara netamente, en el metodo try nunc aen el metodo catch()(

Si retornatos con una excepción lo abligamos a que se ejecute el tor metodo catch(){

}

que al mismo tiempo seguiria difundiendo el error.

Volvemos a producir una excepción.
Esta es la corrección a ralizar en el los servicios de autenticación en el authService.

Ahora si. se corrijio este pequeño detalle.

## Logout

Vamos a la tienda authStore y similar al metodo login, lo que queremos hacer es definir una funcion llamada logout asincrona y esta funcion se llamara logout.

Esta funcion que hara agregamos una fucnio asincrona logout y dentro un try..catch

que espera la respuesta de authService, ejecutando el metodo logout, esta hara la peticion correspondiente y esperamos a que se resuleva la promesa, entonces colocamos await

await authService.logout()

ahora si la promesa se logra resolver lo que queremos que ocurra es que elimine del local storage esa variable access_token que se habiamos generado anteriormente y aparte lo que queremos que ocurra es resetear el valor del token al valor del null y asi el valor de isAuthenticaded cambiaria tambien false con esto podrmeos cerrar la sesión.

try {

      await authService.logout()

      localStorage.removeItem('access_token')

      token.value = null

    }

Otra cosa es que si por algun motivo fallase el cierre de la swesión den AuthStorage, simplemnete seguimos transpitiendo el error.

    catch (error) {

      console.error('Error detectado en el Store:', error)

      throw error
    }

Una vez terminado devolvemos en el return para poder ser utilizado desde nuestro componente

return {
token,
isAuthenticated,
login,
logout,
}

En que componente se va a utilzar, justamente en el dropdown del usuario queremos que cuando hagamos click sobre el boton logout cerramos

Entonces desde PublicNav, un avez que estamos aca vamos a decir que se mantenga a la escucha del evetno click y cada vez que hagamos click llamemos a la tienda authStore y ejecutar el metodo logout

El boton logout esta en el componente PublicNav, entonces vamos a ir aca y vamos a decir que se mantenga a la escucha del evento click y cada vez que hagamos click llamemos a la tienda authStore y ejecutar el metodo logout

Estara en escucha del evento click

@click="authStore.logout()"

Y cada vez que se haga click llamamos a la tienda, authStore ejecutando el metodo logout.

Entonces con esto cerrariamos sesión en la teoria, veoamos en la realiad.

Inspeccionamos al hacer click sobre el boton logout

En consola marca un error que falta solucionar la promesa

authService.js:24
POST http://localhost:8000/api/auth/logout 401 (Unauthorized)

authStore.js:63 Error detectado en el Store:
{message: 'Unauthenticated.'}

chunk-2MKFL3BX.js?v=67ed8ba1:2195 [Vue warn]: Unhandled error during execution of native event handler
at <DropdownMenu >
at <PublicNav >
at <PublicLayout onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref<
Proxy(Object) {\_\_v_skip: true}

> > at <RouterView >
> > at <App>

(index):1 Uncaught (in promise)
{message: 'Unauthenticated.'}

﻿

La promesa no ha logrado ser resuelta, hay un error 401, lo que pasa es que si revisamos en postman y abrimos la peticion logout, cuando se realizaba la petición, era dentro de las cabeceras mandabamos el token de autenticación que es el tocken que precisamente queremos inhabilitar, ya no podriamos utilizar.

Pero ahora cuando hacemos la petición hacia la ruta logout, no estamos mandando el token

## Envio de token de autenticación

Lntonces para enviar el token, lo vamos a mandar desde el siguientelgar:

En el archivo de configuración de Axios, queremos rabajar en esta zona:

src/api/axiosConfig.js

import axios from 'axios'

const apiClient = axios.create({
baseURL: 'http://localhost:8000/api',
headers: {
'Content-Type': 'application/json',
Accept: 'application/json',
},
})

export default apiClient

Lo que hacermos aaca es trabajar en algo que se conoce como interceptores, es decir que capture, la peticiónque estamos haciendo aca arriba y le agreguemos algo.

Entonces para agregar un interceptos lo que tenemos que hacer es en la configuracion de axios.

Llamos al api client y despues llamaamos a interceptors.

apiClient.interceptors.request.use(() => {

});

Debe de recibir la configuración que tenga nuestra petición aca. Eso se recibe en una variable llamada config, una vez recibida podremos agregarle mas cosas.

Lo que se va a agregar es definir una constante, intentando recuparar lo que tengamos en local storage, recuperando con gettem lo que tengamos en un campo llamado "access_token"

Si tenemos algo, es decir un token, lo que vamos a hacer es que queremos agregarla mas cosas a la configuración de axio

//Para logout, agregamos un interceptor de peticiones
// este metodo espera que le paemos una funcion
apiClient.interceptors.request.use(() => {
const token = localStorage.getItem('access_token')

if (token) {
//queremos ingresar a la configracuón, que accedeamosa las cabecerasn agregando un campo que se va a autilizar
config.headers.Authorization = `Bearer ${token}` //La palabra Bearer y lo concatenamos con el token interceptado,
}

//y finalmente tenemos que retornar la configuración
return config
})

//Si no exportamos explicitamente el objeto, por defecto se exportara el objeto que se define en la primera linea de codigo, en este caso el objeto apiClientm esta permanece privada dentro de este archivo
export default apiClient

entonces en cada peticion que nos hagamos en este momento , si es que existe un token, lo va a agregar en la cabecera

Como el dropdown tiene un comportamiento inesperado nos vamos a

src/modules/shared/components/DropdownMenu.vue

agregando en el modulo donde se cargan todos los dropdown.

Le damos el valor de click y cambiando el valor de opein por false.

De esta manera iniciamo sesión, y estan do en home, hacemos lcick en logout cierra mientras le da tiempo de montar la solicitud a la api, y cuando volvemos pinta iniciar sesión nuevamente.

y registrarse.

En un futuro lo que vamoa a ver es como poder recuparrar la inforamción del usuario.

Aca hay un error a modificar y corregir.

## Corrección del error:

Efectivamente, el problema de por qué no te redirige a home es que la ruta con ese nombre específico no está activa o no existe dentro de los arreglos que estás combinando.

Para que next({ name: 'home' }) funcione, el router debe encontrar una ruta que tenga exactamente name: 'home'.

1. Revisa homeRoutes

Dado que estás usando desestructuración (...homeRoutes), lo más probable es que el nombre "home" deba estar dentro de src/modules/public/home/router/index.js.

Abre ese archivo y asegúrate de que tenga esta estructura:
JavaScript

// src/modules/public/home/router/index.js
export default [
{
path: '', // Esto hace que sea la ruta raíz del módulo
name: 'home', // <--- ESTE ES EL NOMBRE QUE BUSCA EL GUARD
component: () => import('@/modules/public/home/views/HomeView.vue')
}
]

2. El conflicto en public/router/index.js

En el código que mostraste, tienes comentada la ruta manual:
JavaScript

// {
// path: '/',
// name: 'home',
// component: () => import('@/modules/public/views/HomeView.vue'),
// },

Si homeRoutes (el archivo que importas) no tiene una ruta con el nombre home, el Guard fallará porque intentará redirigir a un destino inexistente. 3. Solución recomendada

Para mantener el orden que llevas, asegúrate de que el archivo principal de rutas públicas se vea así:
JavaScript

const routes = [
// No necesitas la ruta comentada si ya viene dentro de ...homeRoutes
...homeRoutes,
...aboutRoutes,
...blogRoutes,
...contactRoutes,
]

export default routes

4. ¿Por qué es importante para la redirección manual?

Cuando escribes en el navegador http://localhost:5173/auth/login, el flujo es este:

    Carga del Guard: El Guard detecta que ya estás autenticado (porque el token existe en el Store).

    Redirección: El Guard ejecuta next({ name: 'home' }).

    Búsqueda: El Router busca en todo su árbol de rutas quién se llama "home".

    Fallo/Éxito: * Si no existe: Vue Router lanzará un error en consola diciendo que la ruta "home" no existe.

        Si existe: Te mandará a la URL vinculada a ese nombre (que suele ser /).

Verificación final

Para confirmar que todo está vinculado correctamente, revisa estos tres puntos:

    En el Guard: Que use next({ name: 'home' }).

    En el Router Principal: Que la ruta de auth tenga meta: { requiresGuest: true } (con la s).

    En homeRoutes: Que la ruta principal tenga name: 'home'.

¿Qué pasa si cambias el nombre en el Guard a uno que sí estés seguro que existe? Por ejemplo, si tienes una ruta llamada dashboard, intenta next({ name: 'admin.dashboard' }) solo para probar si la redirección manual funciona.

¿Quieres que revisemos el contenido de src/modules/public/home/router/index.js para ver cómo está nombrada la ruta ahí?

en mi archivo

src/modules/public/home/router/index.js

tengo:

const routes = [

//Definimos nuestra primera ruta

{

path: '',

name: 'home',

component: () => import('@/modules/public/home/views/HomeView.vue'),

},

]

export default routes

¡Perfecto! El archivo home/router/index.js está correcto. Tiene el name: 'home' que el Guard necesita para hacer la redirección.

Ahora bien, si al escribir manualmente la URL http://localhost:5173/auth/login no te redirige al inicio, el problema está reducido a un solo lugar: el Guard no está detectando que el usuario está autenticado.

Aquí tienes los pasos finales para que la redirección manual funcione al 100%:

1. Asegura la Persistencia del Token

Al escribir la URL manualmente, la aplicación se recarga por completo. Si el token en tu authStore no se recupera del localStorage, Pinia se inicia vacío y el Guard cree que no estás logueado.

Revisa tu authStore.js y asegúrate de tener algo como esto:
JavaScript

// src/modules/auth/stores/authStore.js
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
// 1. Inicializar con lo que haya en el localStorage
const token = ref(localStorage.getItem('token') || null);

    // 2. El getter detectará si hay token al cargar la página
    const isAuthenticated = computed(() => !!token.value);

    // ... resto de tus acciones (login, logout, etc)
    return { token, isAuthenticated };

});

2. Sincronía en el Router Principal

Verifica que en el archivo src/router/index.js el objeto meta tenga la "s" final para que coincida exactamente con lo que el Guard busca (requiresGuest).
JavaScript

// src/router/index.js
{
path: '/auth',
meta: {
requiresGuest: true // <-- Verifica la 's' aquí
},
component: () => import('@/layouts/auth/AuthLayout.vue'),
children: authRoutes,
},

3. El Guard Definitivo

Asegúrate de que tu authGuard.js use exactamente el nombre de la propiedad que definiste arriba. Aquí te dejo la versión más limpia para evitar errores:
JavaScript

// src/router/guards/authGuard.js
import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {
const authStore = useAuthStore();

    // CASO 1: La ruta requiere estar logueado (ej. /admin)
    if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isAuthenticated) {
        next({ name: 'auth-login' });
    }
    // CASO 2: La ruta es para invitados (ej. /auth/login) y el usuario YA tiene sesión
    else if (to.matched.some(record => record.meta.requiresGuest) && authStore.isAuthenticated) {
        next({ name: 'home' }); // Esto te mandará a http://localhost:5173/
    }
    // CASO 3: Cualquier otro caso
    else {
        next();
    }

}

    Tip Pro: He cambiado to.meta por to.matched.some(...). Esto es más seguro porque busca la propiedad meta tanto en la ruta hija como en todas las rutas padres (como tu /auth principal).

Verificación final

    Inicia sesión en tu app normalmente.

    Abre una nueva pestaña o escribe en la barra de direcciones: http://localhost:5173/auth/login.

    Presiona Enter.

Si el Guard y el Store están sincronizados, deberías ver cómo la URL cambia instantáneamente a http://localhost:5173/ (el Home).

¿Te gustaría que revisemos la función de login en tu Store para confirmar que el token se esté guardando correctamente en el localStorage?

para verificaon del paso 1 en src/modules/auth/stores/authStore.js

Tengo

import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)

import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API

export const useAuthStore = defineStore('auth', () => {

// Definimos una constante token que recupera el valor del localStorage al iniciar

//esta es la forma de recuperar local storage: localStorage.getItem('access_token')

const token = ref(localStorage.getItem('access_token') || null)

// Propiedad computada para saber si el usuario está autenticado

// Retorna true si hay token, false si es null,

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

en src/router/index.js

tengo:

import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from '@/modules/public/router/index'

import authRoutes from '@/modules/auth/router/index'

import adminRoutes from '@/modules/admin/dashboard/router/index.js'

import { authGuard } from '@/router/guards/authGuard';

const router = createRouter({

history: createWebHistory(import.meta.env.BASE_URL),

routes: [

{

path: '/',

component: () => import('@/layouts/public/PublicLayout.vue'),

children: publicRoutes,

},

{

path: '/auth',

meta: {

requiresGuest: true//con estas rutas podemos ingresar si no estamos autenticasdos

},

component: () => import('@/layouts/auth/AuthLayout.vue'),

children: authRoutes,

},

{

path: '/admin',

meta: {

requiresAuth: true //con esto para ingresar a este grupo de rutas se requiere autenticación

},

component: () => import('@/layouts/admin/AdminLayout.vue'),

// Al entrar a /admin, redirige automáticamente a la ruta hija con ese nombre

redirect: { name: 'admin.dashboard' },

children: [...adminRoutes],

},

],

})

// Agregamos el guard de manera global

//despues de importarse se usa

export default router

y 3 el guard definitivo en:

src/router/guards/authGuard.js

import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {

const authStore = useAuthStore();

console.log('¿Hacia dónde va?:', to.path);

console.log('¿Requiere invitado?:', to.meta.requiresGuest);

console.log('¿Está autenticado?:', authStore.isAuthenticated);

// Si la ruta requiere auth y el usuario NO está autenticado

if (to.meta.requiresAuth && !authStore.isAuthenticated) {

next({ name: 'auth-login' }); // Usa el nombre exacto de tu ruta

}

// Si la ruta es para invitados (login/reg) y el usuario YA está autenticado

else if (to.meta.requiresGuest && authStore.isAuthenticated) {

console.log('Redirigiendo a home por sesión activa...');

next({ name: 'home' });

}else{ //Si no es ni uno ni otro que me deje continuar

next() //hacemos en continuar sigue tu camino

}

}

Tu configuración de Pinia y el Router ahora se ve muy sólida. El uso de localStorage.getItem('access_token') al inicio del store es la clave para que, al escribir la URL manualmente, el sistema no "olvide" quién eres.

Sin embargo, falta un pequeño detalle técnico para activar el Guard. En tu código de src/router/index.js, importaste el authGuard pero no lo estás ejecutando.

1. Activa el Guard en el Router

Para que todo ese código funcione, debes decirle al router que pase por esa función antes de cada navegación. Agrega esta línea antes del export default router:
JavaScript

// src/router/index.js

// ... resto del código

// ACTIVA ESTA LÍNEA:
router.beforeEach(authGuard);

export default router;

2. El detalle del "Inheritance" (Herencia de Meta)

En tu configuración de rutas, pusiste requiresGuest: true en la ruta padre /auth. Cuando escribes manualmente http://localhost:5173/auth/login, el objeto to.meta de Vue Router combina las propiedades del padre y del hijo.

    Padre (/auth): tiene requiresGuest: true.

    Hijo (/login): hereda requiresGuest: true.

Por lo tanto, tu lógica en el Guard: else if (to.meta.requiresGuest && authStore.isAuthenticated) Debería funcionar correctamente ahora.
Resumen del flujo de redirección manual:

    Usuario logueado tiene un access_token en el almacenamiento del navegador.

    Escribe http://localhost:5173/auth/login y da Enter.

    La app carga, Pinia lee el token: isAuthenticated se vuelve true.

    El router.beforeEach ejecuta tu authGuard.

    console.log mostrará:

        ¿Requiere invitado?: true

        ¿Está autenticado?: true

    Se ejecuta next({ name: 'home' }).

    El navegador te muestra la página de inicio instantáneamente.

3. Una última comprobación (El nombre de la ruta)

En tu authStore.js, cuando haces el login, asegúrate de redirigir al usuario al lugar correcto. Y en el Guard, asegúrate de que el nombre del login sea exacto.

    En tu Guard usas: next({ name: 'auth-login' }).

    En tu archivo de rutas de auth (src/modules/auth/router/index.js), verifica que la ruta de login se llame exactamente auth-login.

¿Qué sigue? Prueba ahora escribiendo la URL manual. Si por alguna razón el console.log dice que isAuthenticated es false a pesar de estar logueado, significa que el nombre de la llave en el Store (access_token) podría ser diferente al que recibes de tu API de Laravel (a veces Laravel usa token o original.access_token).

¿Te gustaría que verifiquemos cómo responde tu servidor de Laravel para asegurar que response.access_token sea la ruta correcta del dato?

Cintnuabndo con el tema y de cerrar sesión primero en Primero en

authService: tenemos:

src/modules/auth/services/authService.js

// import apiClient from '@/axios/axiosConfig' //nos marca erro por la ruta de la configruaicon de axios cambiamos a:

//import apiClient from '../../../api/axiosConfig'

import apiClient from '@/api/axiosConfig' // Sin llaves porque es export default

export default {

//Accedemos primero a apiClient, y leugo hacemos una peticion a la api de tipo post, axios va a recibir peticiones asincronas

async login(credentials) {

try {

const response = await apiClient.post('/auth/login', credentials) //Colocamos los datos faltantes de la uri, y credenciales,

return response.data

} catch (error) {

// Si el servidor respondió con un error (401, 422, etc.)

if (error.response) {

throw error.response.data

}

// Si el error es de red o el servidor no responde

throw { message: 'Error de conexión con el servidor' }

}

},

async logout() {

try {

const response = await apiClient.post('/auth/logout') //no pasamos ninguna credencial

return response.data

} catch (error) {

throw error.response.data

}

},

async refresh() {

try {

const response = await apiClient.post('/auth/refresh')

return response.data

} catch (error) {

throw error.response.data

}

},

async me() {

//Obtenemos los datos del usuario

try {

const response = await apiClient.get('/auth/me')

return response.data

} catch (error) {

throw error.response.data

}

},

}

En src/modules/auth/stores/authStore.js

impreementamos el metodo logout

async function logout() {

try {

// Accedemos al servicio y ejecutamos el método logout, pedimos que llame a nuestro servicio

// Esperamos la respuesta del authService

//const response = await authService.logout()

await authService.logout()

//ahora lo que toca despues de esperar que se resuelva la promesa para eliminar del localstorage esa variable llamada access_token

localStorage.removeItem('access_token')

//Tambien lo que queremos que ocurra es resetear el valor del token para que el estado isAutehticated cambie a false, con esto ceramos lasesion

token.value = null

// Actualizamos la referencia reactiva para que la UI se entere del cambio

//token.value = null

// Borramos el token almacenado en el localStorage

} catch (error) {

// Capturamos el error del servicio y lo seguimos difundiendo

console.error('Error detectado en el Store:', error)

//throw error.response.data

throw error

}

}

// Retornamos los valores y métodos para que sean accesibles en los componentes

return {

token,

isAuthenticated,

login,

logout,

}

en src/layouts/public/components/PublicNav.vue

agregamos en el boton

</DropdownItem>

<button

@click="authStore.logout()"

class="block text-left w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100"

>

Logout

</button>

en src/api/axiosConfig.js

agregamos un interceptor para ingresar en la configuración de axios, adjuntando el token de la siguente manera:

import axios from 'axios'

const apiClient = axios.create({

baseURL: 'http://localhost:8000/api',

headers: {

'Content-Type': 'application/json',

Accept: 'application/json',

},

})

//Para logout, agregamos un interceptor de peticiones

// este metodo espera que le paemos una funcion

apiClient.interceptors.request.use(() => {

const token = localStorage.getItem('access_token')

if (token) {

//queremos ingresar a la configracuón, que accedeamosa las cabecerasn agregando un campo que se va a autilizar

config.headers.Authorization = `Bearer ${token}` //La palabra Bearer y lo concatenamos con el token interceptado,

}

//y finalmente tenemos que retornar la configuración

return config

})

//Si no exportamos explicitamente el objeto, por defecto se exportara el objeto que se define en la primera linea de codigo, en este caso el objeto apiClientm esta permanece privada dentro de este archivo

export default apiClient

en el dropdownMenu aregamos

src/modules/shared/components/DropdownMenu.vue

<script setup>

import { ref } from 'vue'


const open = ref(false)

</script>

<template>

<div class="relative">

<div @click="open = !open">

<slot name="trigger"></slot>

</div>

<div

@click="open = false"

v-show="open"

class="absolute z-50 end-0 mt-2 w-48"

>

<div

class="bg-white rounded-md shadow-lg py-2 px-2 font-size-sm text-gray-700"

>

<slot></slot>

</div>

</div>

</div>

</template>

pero en la consola nos marca:

al hacer click sobre hacer logout

authStore.js:63 Error detectado en el Store: TypeError: Cannot read properties of undefined (reading 'data')

at Object.logout (authService.js:28:28)

at async Proxy.logout (authStore.js:50:7)

logout @ authStore.js:63

await in logout

wrappedAction @ pinia.js?v=67ed8ba1:5507

store.<computed> @ pinia.js?v=67ed8ba1:5204

\_createElementVNode.onClick.\_cache.<computed>.\_cache.<computed> @ PublicNav.vue:63

callWithErrorHandling @ chunk-2MKFL3BX.js?v=67ed8ba1:2342

callWithAsyncErrorHandling @ chunk-2MKFL3BX.js?v=67ed8ba1:2349

invoker @ chunk-2MKFL3BX.js?v=67ed8ba1:11425Understand this error

chunk-2MKFL3BX.js?v=67ed8ba1:2195 [Vue warn]: Unhandled error during execution of native event handler

at <DropdownMenu >

at <PublicNav >

at <PublicLayout onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {\_\_v_skip: true} > >

at <RouterView >

at <App>

warn$1 @ chunk-2MKFL3BX.js?v=67ed8ba1:2195

logError @ chunk-2MKFL3BX.js?v=67ed8ba1:2406

handleError @ chunk-2MKFL3BX.js?v=67ed8ba1:2398

(anonymous) @ chunk-2MKFL3BX.js?v=67ed8ba1:2352

Promise.catch

callWithAsyncErrorHandling @ chunk-2MKFL3BX.js?v=67ed8ba1:2351

invoker @ chunk-2MKFL3BX.js?v=67ed8ba1:11425Understand this warning

authService.js:28 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'data')

at Object.logout (authService.js:28:28)

at async Proxy.logout (authStore.js:50:7)

El error que estás experimentando se debe a dos problemas principales en tu configuración: un error de lógica en el interceptor de Axios y un manejo de errores en el servicio que intenta acceder a una propiedad de un objeto que no existe.

Aquí tienes la solución paso a paso para corregirlo:

1. Corrección del Interceptor (El problema raíz)

En tu archivo src/api/axiosConfig.js, la función del interceptor debe recibir el objeto config. Actualmente no lo estás declarando en los parámetros, por lo que config es undefined y la petición falla antes de salir.

Cámbialo así:
JavaScript

// src/api/axiosConfig.js

// ✅ El parámetro 'config' es obligatorio para poder modificarlo
apiClient.interceptors.request.use((config) => {
const token = localStorage.getItem('access_token')

if (token) {
// Agregamos el token a las cabeceras
config.headers.Authorization = `Bearer ${token}`
}

return config
}, (error) => {
return Promise.reject(error)
})

2. Corrección en authService.js (Evitar el TypeError)

El error Cannot read properties of undefined (reading 'data') ocurre en el catch de tu método logout. Cuando ocurre un error (como el del interceptor), el objeto error.response puede no existir.

Ajusta el manejo de errores:
JavaScript

// src/modules/auth/services/authService.js

async logout() {
try {
const response = await apiClient.post('/auth/logout')
return response.data
} catch (error) {
// ✅ Validamos si existe response antes de acceder a data
if (error.response && error.response.data) {
throw error.response.data
}
throw { message: 'Error de red o servidor no alcanzable' }
}
},

3. Mejora en el Logout del Store

Para que la experiencia de usuario sea mejor, es recomendable limpiar el localStorage y el estado de Pinia incluso si la petición al servidor falla (por ejemplo, si el token ya expiró en el servidor, igual queremos que el usuario salga de la app localmente).

Actualiza tu función en authStore.js:
JavaScript

async function logout() {
try {
// Intentamos avisar al backend
await authService.logout()
} catch (error) {
console.warn('El servidor no pudo procesar el logout, pero limpiaremos la sesión local.')
} finally {
// ✅ Esto se ejecuta SIEMPRE, falle o no la petición
localStorage.removeItem('access_token')
token.value = null

    // Opcional: Redirigir al login después de limpiar
    // router.push({ name: 'auth-login' })

}
}

4. Resumen de por qué fallaba:

   Interceptor: Al no recibir config como argumento, Axios intentaba leer undefined.headers, lo cual abortaba la ejecución.

   Service: Al fallar la petición por el error del interceptor, el objeto error.response era undefined.

   TypeError: Tu código en el catch hacía error.response.data. Como error.response era undefined, lanzaba el error de "Cannot read properties of undefined".

¿Cómo probarlo ahora?

    Recarga la página (F5) para limpiar errores anteriores.

    Asegúrate de estar logueado.

    Haz clic en el botón de Logout.

Deberías ver en la pestaña Network (Red) de tu navegador una petición POST a /auth/logout con el header Authorization: Bearer ... y, tras completarse, tu Store debería cambiar isAuthenticated a false.

## Recuperación de datos del usuario

Queremos ahora poder ver como podemos recuperar la información del usuario autenticado, pararecuparar esta información, vamos a la tienda AuthStore y en la parte final deifnimos un afuncion asincrona llamado fechUser, esta funcion se encargara de buscar, la ifnoramción dle usuario autenticado, pero la buscqueda realizara en caso de que el usuario se encuentra autenticado.

Si el usuario nos encuentra autenticado no tiene caso de que se ejecute este metodo, o la busqueda.

Hacemos mediante una condicional que verifica el value de la propuiedad computada llamada isAtuehnticate, hacemos la consulta, es aconsulta sera:

try catch

Lo que queremos hacer es acceder al servicio llamado authService y en este caso acceder al metedo me(), es el metodo generado en la tiendo authStore.

ahora este valor que se tienen an
authService.me()

Lo que responda sera la información del usuario, entonces eso se debe almacenar en authStore.

Se alamcenara en una constante que le daremos llamado:

\_user es un objeto reactivo, como convención cada vez que se coloca un guion a la hora de nombrar es por que se esta definiendo una propiedad privada, es algo que se puede retornar para que el usuario pueda acceder a el.

Es una buena convención para que sea de solo lectura no queremos que se pueda modificar. Entonces se define de esta manera.

Se retorna como una propiedad computada.Entonces esperamos a que se resuelva mediante un await y accedemos a la propiedad user y vamosa modificar su value, por que tenemos

\_user.value = await authService.me()

si todo sale bien se almacena en la variable \_user.value.

Pero puede ocurrir que salga mal por ejemplo cuando el token del usuario haya cambiado o caducado.

Al consultar el usuario puede que su token ya haya caducado, entonces en este caso lo que quermoes es que se ejecute el metodo, logout, que hacia una consulta a logout para eliminar el token y

en

localStorage.removeItem('access_token')

Se elimine del localstorage lo que tenemos in el local storage, ahora puede que tengamos un error y es el siguiente, ya que si tratamos de cerrar sesión con un token caducado va a fallar la petición por que uono puedo cerrar sesion con un token caducado, y por lo tanto no se ejecutaria lo siguiente

localStorage.removeItem('access_token');
token.value = null;

Lo que queremos es que se ejecute si o si este valor los dos comandos anteriores.

Entonces lo que se hara es lo siguiente, despues del cath vamos a colocar un finaly es donde vamos a colocar los dos valores que tenemos aca, y ásamos ese codigo dedando:

finally {
localStorage.removeItem('access_token');
token.value = null;
}

Asi ante cualquier error no tendria ningun problema.

Ahora si yo esoty cerrando sesión y ya tengo información del usuario almacenado aca entonces lo que vamos a hacer es resetear ese valor, es decir, eliminamos de la siguiete manera.

finally {
localStorage.removeItem('access_token');
token.value = null;
\_user.value = null;
}

Ahora lo que podemos hace es que queremos que cuando notosotro iniciemos sesión se busque la información de este usuario, quremos tenerlo a la mano, ya se genero el token que se tienen con:

const response = await authService.login(ccredentials);

Pero tambien queremos que se busque la inforamción de eseusuario,

Entocnes no dirigimos dentro de AuthService y vamos a decir que queremos llamar al metodo fetchUser()

y retornamos la repsuesta por si queremos analizarlo desde el componente.

Asi el fethUser que se tiene aca, es una funcion asincrona que debemos de esperar que termine la consulta y tendriamos que colocar el await y ya tendriamos nuestro login completo y el logout completo en la tienda authStore, y con el fecthUser tenemos ese completo y vamos a pedir que se retorne esta funcion par que podamos utilizarlo y necesitamos acceder a la ainformación del usuario, que tenemos pero por fuera es decir en:

cons token = ref(localStorage.getItem('access_token') || null)

Por fuera de la tienda, entonces lo que vamos a hacer es definir una constante llamada user computada y retoranr el value

El user lo retornamos, se hace de esta manera para que sea considerado como de solo lectura y no se tenga por modificado.

Es una buena practica a la hora de progrmaar.

Lo qu etenemos es una propiedad llamada user solo se le asignara un valor del usuario cuando iniciamos sesión, pero si ya iniciamos sesión.

En user sel e asigno información dle usuario, pero al actualziar iniforamción del usuario ya se perdio. como le hariamos para que siempre que ingrese tenga algo por aca.

Para ello en authStore.

y desde el archivo principal App.vue y aca en el script hace rlos siguinete

Y trabajar con el ciclo de vida del componente.

Para ello vamos a hacer lo siguiente.

Queremos llamar a la función onMounted, esta función permite que le pase dentro otra función y cualuiqrr cosa que yo coloque entre esta estq etiqueta de apetura y cierre.

Se va a ejecutar cuando todo mi componente se haya cargado para evitar cualquier inconveniente, entonces, lo que hacemos

Es llamar a nuestra tienda, vamos a colocar unimport

useAuthSotre y vamos a inicializar nuetsra tienda definiendo una constante que se llame authStoree y vamos a inicializar esta tienda y ya con la tienda aca.

Queremos esperar a que el componente se haya cargado satisfactoriamente, llamamos a latienda y vamos a ejecutar el metodo fectchUser.

Para que busque la información del usuario autenticado, esto se trata de una funcion asincrona y para ello nos dirigimos dentro de la funcion onMounyted y colocamos dentro async indicandoloe que esperamos la respuesta, y dentro de esto colocamos un try catch que mouestre en consola el error de verlo, y esperamos la respuesta de la información del usuario.

Si logra obtener la informaicón del usuario, lo que se hara es mostrarlo en consola

console.log, accedemos a nuesra tienda y accedemos a la inforamción del usuario.

Queremos actualizar en consola e inspaeccionamos y vamos a conocola y tenemos la informaicón del usuario autnticado

con los datos

el id, name, email, etc.

entonces desde este momento vamos a poder acceder a la inforamción dle usuario autenticado desde nuestra tienda a traves d el apropiedad computada :

const user = computed(() => user.value)

conesto ya esta casi concluido lo que tiene que ver con el sistema de login, faltaria hacer lo siguiente.

Cerramos sesión y queremos habilitar el remember me

La idea es que si el usuario marca esta opción nosotros deveriamos mantener siempre activas su sesión entonces si llegase un momento y un token esta caducado, lo que deberiamos hacer es generar un nuevo token haciendo una petición hacia el metodo refresh)()

Eso se vera en otro capitulo.

Con esto terminamos la sección de login, que es el de registros.

La tienda quedo asi:

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Llamamos al servicio definido (usando tu ruta relativa o el alias @)
import authService from '../services/authService'

// Utilizamos la sintaxis de Composition API
export const useAuthStore = defineStore('auth', () => {
// --- ESTADO (STATE) ---

// Almacenamos la info del usuario. Usamos "\_" como convención de propiedad privada.
const \_user = ref(null)

// Recuperamos el token del localStorage al inicializar la tienda para persistir la sesión.
const token = ref(localStorage.getItem('access_token') || null)

// --- GETTERS (Propiedades Computadas) ---

// Retorna true si el token existe, false si es null. Controla el acceso en los Guards.
const isAuthenticated = computed(() => !!token.value)

// Exponemos el usuario como solo lectura (computed) para que no se modifique externamente.
const user = computed(() => \_user.value)

// --- ACCIONES (ACTIONS) ---

/\*\*

- Maneja el inicio de sesión.
- Almacena el token y busca la información del usuario inmediatamente.
  \*/
  async function login(credentials) {
  try {
  // Esperamos la respuesta del servicio con el access_token.
  const response = await authService.login(credentials)

      // Guardamos en localStorage para que no se pierda al recargar (F5).
      localStorage.setItem('access_token', response.access_token)

      // Actualizamos la referencia reactiva para que isAuthenticated cambie a true.
      token.value = response.access_token

      // Una vez tenemos el token, recuperamos los datos del usuario (id, name, email).
      await fetchUser()

      return response

  } catch (error) {
  console.error('Error detectado en el Store (Login):', error)
  // Difundimos el error para que el componente LoginView lo muestre.
  throw error.response?.data || error
  }
  }

/\*\*

- Cierra la sesión del usuario.
- El bloque 'finally' asegura que la sesión se limpie localmente aunque el servidor falle.
  \*/
  async function logout() {
  try {
  // Avisamos al backend para invalidar el token.
  await authService.logout()
  } catch (error) {
  console.error('Error detectado en el Store (Logout):', error)
  } finally {
  // Se ejecuta SIEMPRE: Limpiamos rastro de sesión para evitar accesos indebidos.
  localStorage.removeItem('access_token')
  token.value = null
  \_user.value = null
  }
  }

/\*\*

- Recupera la información del usuario autenticado desde el endpoint /me.
- Si el token ha caducado, cierra la sesión automáticamente.
  \*/
  async function fetchUser() {
  // Solo actuamos si hay un token activo (isAuthenticated).
  if (isAuthenticated.value) {
  try {
  // Almacenamos la info del usuario en nuestra variable privada.
  \_user.value = await authService.me()
  } catch (error) {
  console.error(
  'Error al recuperar usuario (Token posiblemente caducado):',
  error,
  )

        // Si falla (ej. error 401), forzamos el logout para limpiar el localStorage.
        await logout()
        throw error
      }

  }
  }

// Retornamos los elementos públicos de la tienda.
return {
token,
isAuthenticated,
user,
login,
logout,
fetchUser,
}
})

y el componente princiapl asi

<script setup>
import { onMounted } from 'vue' // Importamos onMounted para usarlo en el setup
import { RouterView } from 'vue-router'

//este access_token estaba en localStorage de src/modules/auth/stores/authStore.js
//console.log(localStorage.getItem('access_token'))

import { useAuthStore } from './modules/auth/stores/authStore'

//Despues de esto inicializamos la tienda
const authStore = useAuthStore() //ya tenemos la tienda podemos ocuparla abajo

//queremos trabar en la parte del logout y queremos trabajar cn el ciclo de vida del componente de Vue para ello llamaresmo a onMounted
// onMounted permite pasarle otra funcion y cualquier cosa que coloquemos se va aejecutar cuando el componente se haya cargado.
onMounted(async () => {
  //Al montar el componente vamos a limpiar el localStorage
  //localStorage.removeItem('access_token')
  try {
    //Vamos a llamar al metodo de la tienda que verifica si el usuario esta autenticado
    //esperamos la respuesta de la información del usuario
    await authStore.fetchUser() //Busca la ifnormación del usuario autenticado, esperamos lo respuesta, dentro l eagregamos un try catch

    //si logra obtener la ifnoramción del suaurio ahora mosytramos en consola
    //console.log(authStore.user) //acdedemos a la ifnoramción del usuario, lo activamos si queremos saber los datos del usuario para ver en consola
    //pero podemos acceder a ella desde authStore a traves de la poriedad cocmputada const user = computed(() => authStore.user) en cualquier componente
  } catch (error) {
    //mostramos el error de verlo
    console.log(error)
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

Con esto concluyeel sistema de login,

Si queremos activar Remember me, para que siempre este activa su sesión, entonces el token esta caducado lo que deberiamos hacer es generar un nuevo token en caso de que caduque con

auth/refresh

y para ello debemos hacer lo siguiente

1. Crear un endpoint en el backend para refrescar el token
2. Crear un endpoint en el frontend para refrescar el token

En el backend

1. Crear un endpoint en el backend para refrescar el token
2. Crear un endpoint en el frontend para refrescar el token

En el frontend

1. Crear un endpoint en el frontend para refrescar el token
2. Crear un endpoint en el frontend para refrescar el token

En el frontend

Se pasaria al ema de registros de usuarioa pero hasta aca queda el tema de autenticación con Vue
