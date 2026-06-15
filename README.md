# Intro · 100 Palabras

Sitio web estático para mostrar las entradas de un concurso literario de
microrrelatos de 100 palabras. Sin frameworks ni build: solo **HTML, CSS y
JavaScript**. Se publica gratis en **GitHub Pages**.

## 📁 Estructura

```
Intro100Palabras/
├── index.html              ← Página principal
├── assets/
│   ├── css/styles.css      ← Estilos
│   └── js/main.js          ← Renderiza las entradas
├── data/
│   └── entradas.js         ← 👈 AQUÍ se añaden las entradas
├── .github/workflows/
│   └── deploy.yml          ← Despliegue automático a GitHub Pages
├── .nojekyll               ← Evita que GitHub procese el sitio con Jekyll
└── README.md
```

## ✍️ Cómo añadir una entrada

Abre [`data/entradas.js`](data/entradas.js) y añade un bloque a la lista:

```js
{
  titulo: "Título del relato",
  autor: "Nombre o seudónimo",
  texto:
    "Primer párrafo del relato.\n" +
    "Segundo párrafo, separado por \\n.",
  fecha: "2026-06-15", // opcional (AAAA-MM-DD)
},
```

> Cada entrada va separada por una coma. El número de palabras se calcula solo.

## 🔍 Ver el sitio en local

No hace falta servidor: **haz doble clic en `index.html`** y se abre en el
navegador. (Por eso los datos están en un `.js` y no en un `.json`.)

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube esta carpeta:

   ```bash
   git add .
   git commit -m "Versión inicial del sitio"
   git branch -M main
   git remote add origin https://github.com/USUARIO/Intro100Palabras.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment → Source:
   "GitHub Actions"**.

3. Cada `git push` a `main` republica el sitio automáticamente. La URL aparece
   en la pestaña **Actions** y en **Settings → Pages**.

---

Hecho con HTML, CSS y JS puro.
