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
