/*
  ════════════════════════════════════════════════════════════════
  ENTRADAS DEL CONCURSO
  ════════════════════════════════════════════════════════════════
  Para añadir una entrada nueva, copia un bloque { ... } y rellénalo.
  Recuerda separar cada bloque con una coma.

  Campos:
    titulo    → Título de la entrada.
    autor     → Nombre o seudónimo del autor.
    fecha     → (opcional) Fecha de la entrada, formato "AAAA-MM-DD".

  El contenido puede ser de DOS tipos (usa uno u otro):
    texto     → Texto normal. Usa \n para separar párrafos.
    codigo    → Bloque de código. Se respeta tal cual (indentación,
                saltos de línea). Escríbelo entre `comillas invertidas`
                y SIN sangrar las líneas dentro del archivo, porque esa
                sangría también se mostraría. Para una barra invertida
                literal escribe doble: \\
    lenguaje  → (opcional, solo con `codigo`) Etiqueta que se muestra,
                p. ej. "Python".
  ════════════════════════════════════════════════════════════════
*/

const ENTRADAS = [
  {
    titulo: "Clearn se caerá en 12 días",
    autor: "Anónimo",
    lenguaje: "Python",
    fecha: "2026-06-16",
    codigo:
`import time
import random

print("|￣￣￣￣￣￣￣|")
print("|  Clearn se  |")
print("|  caerá en   |")
print("|  12 días    |")
print("|＿＿＿＿＿＿＿|")
print("(\\__/) || ")
print("(•ㅅ•) ||")
print("/   づ")

matar_clearn = False

if matar_clearn:

    numero = 1036800

    for i in range(1036800):
        dias = numero // 86400
        horas = (numero - (dias * 86400))  // 3600
        minutos = (numero - (dias * 86400) - (horas * 3600))  // 60
        segundos = numero - (dias * 86400) - (horas * 3600) - (minutos * 60)

        print(f"{dias}D {horas}h {minutos}m {segundos}s")
        numero -= 1
        time.sleep(1)

    if random.random() > 0.5:
        for i in range(314752898099857467687980985746):
            print("🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪")
`,
  },
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
