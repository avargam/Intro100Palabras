/* ===== Render de las entradas del concurso ===== */
(function () {
  "use strict";

  var entradas = Array.isArray(window.ENTRADAS) ? window.ENTRADAS : [];

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

  // Convierte saltos de línea en párrafos
  function renderTexto(contenedor, texto) {
    String(texto || "")
      .split(/\n+/)
      .filter(function (p) { return p.trim() !== ""; })
      .forEach(function (parrafo) {
        contenedor.appendChild(el("p", null, parrafo.trim()));
      });
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
      pre.appendChild(el("code", null, entrada.codigo));
      card.classList.add("entry-card--code");
      card.appendChild(pre);
    } else {
      var body = el("div", "entry-body");
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
