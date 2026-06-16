/* ===== Render de las entradas del concurso ===== */
(function () {
  "use strict";

  // ENTRADAS se declara con `const` en data/entradas.js. Las variables const/let
  // del ámbito global NO se adjuntan a `window`, así que la referenciamos directo.
  var entradas =
    typeof ENTRADAS !== "undefined" && Array.isArray(ENTRADAS) ? ENTRADAS : [];

  var grid = document.getElementById("entries");
  var countEl = document.getElementById("entry-count");
  var emptyEl = document.getElementById("empty-state");

  // Estado vacío
  if (entradas.length === 0) {
    if (emptyEl) emptyEl.hidden = false;
    if (countEl) countEl.textContent = "";
    return;
  }

  // Contador
  if (countEl) {
    countEl.textContent =
      entradas.length + (entradas.length === 1 ? " entrada" : " entradas");
  }

  // Crea un elemento con texto seguro (evita inyección de HTML)
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Cuenta palabras de un texto
  function contarPalabras(texto) {
    var limpio = String(texto || "").trim();
    if (!limpio) return 0;
    return limpio.split(/\s+/).length;
  }

  // Vuelca el texto tal cual: los espacios y saltos de línea se respetan
  // mediante CSS (white-space: pre-wrap en .entry-body).
  function renderTexto(contenedor, texto) {
    contenedor.textContent = String(texto || "");
  }

  function formatearFecha(fecha) {
    if (!fecha) return "";
    var d = new Date(fecha + "T00:00:00");
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  var fragment = document.createDocumentFragment();

  entradas.forEach(function (entrada) {
    var card = el("article", "entry-card");

    card.appendChild(el("h3", "entry-title", entrada.titulo || "Sin título"));

    if (entrada.autor) {
      card.appendChild(el("p", "entry-author", "por " + entrada.autor));
    }

    var esCodigo = typeof entrada.codigo === "string" && entrada.codigo !== "";

    if (esCodigo) {
      // Bloque de código: se respeta la indentación y los saltos de línea.
      var pre = el("pre", "entry-code");
      var codeEl = el("code", null, entrada.codigo);
      if (entrada.lenguaje) {
        codeEl.className = "language-" + String(entrada.lenguaje).toLowerCase();
      }
      pre.appendChild(codeEl);
      card.classList.add("entry-card--code");
      card.appendChild(pre);
      // Resaltado de sintaxis (opera sobre textContent → sin riesgo de inyección).
      if (window.hljs && typeof hljs.highlightElement === "function") {
        try { hljs.highlightElement(codeEl); } catch (e) {}
      }
    } else {
      var body = el("div", "entry-body");
      // mono: texto monoespaciado, sin partir líneas (para arte ASCII,
      // tracebacks, etc.). Ocupa todo el ancho y permite scroll horizontal.
      if (entrada.mono) {
        body.classList.add("entry-body--mono");
        card.classList.add("entry-card--mono");
      }
      renderTexto(body, entrada.texto);
      card.appendChild(body);
    }

    var meta = el("div", "entry-meta");
    if (esCodigo) {
      meta.appendChild(el("span", null, entrada.lenguaje || "Código"));
    } else {
      meta.appendChild(el("span", null, contarPalabras(entrada.texto) + " palabras"));
    }
    var fechaTxt = formatearFecha(entrada.fecha);
    if (fechaTxt) meta.appendChild(el("span", null, fechaTxt));
    card.appendChild(meta);

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
})();
