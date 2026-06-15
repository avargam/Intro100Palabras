/*
  ════════════════════════════════════════════════════════════════
  ENTRADAS DEL CONCURSO
  ════════════════════════════════════════════════════════════════
  Para añadir una entrada nueva, copia un bloque { ... } y rellénalo.
  Recuerda separar cada bloque con una coma.

  Campos:
    titulo  → Título del microrrelato.
    autor   → Nombre o seudónimo del autor.
    texto   → El relato. Usa \n para separar párrafos.
    fecha   → (opcional) Fecha de la entrada, formato "AAAA-MM-DD".
  ════════════════════════════════════════════════════════════════
*/

const ENTRADAS = [
  {
    titulo: "El último tren",
    autor: "A. Mendoza",
    texto:
      "Esperó en el andén todas las noches durante treinta años. El reloj marcaba siempre las once y cuarto, la misma hora en que ella prometió volver.\n" +
      "Nunca preguntó por qué el tren no llegaba. Le bastaba con creer que, en algún lugar, ella seguía en camino.\n" +
      "La noche que murió, el andén estaba vacío. Pero a las once y cuarto, por primera vez, se oyó un silbato a lo lejos.",
    fecha: "2026-06-01",
  },
  {
    titulo: "Inventario",
    autor: "Seudónimo: Lince",
    texto:
      "Conté mis pertenencias antes de marcharme: dos camisas, un reloj parado, la fotografía de un perro que ya no recordaba.\n" +
      "Al final de la lista escribí tu nombre. No cabía en ninguna maleta, pero pesaba más que todo lo demás.\n" +
      "Cerré la puerta. Dejé el inventario sobre la mesa, por si alguien quería saber qué fue lo único que no me llevé.",
    fecha: "2026-06-03",
  },
];
