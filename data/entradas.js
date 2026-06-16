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
    votoUrl   → (opcional) URL para votar por esta entrada. Si falta, el
                botón "Votar por esta entrada" queda como placeholder (#).

  El contenido puede ser de DOS tipos (usa uno u otro):
    texto     → Texto normal. Se respetan los espacios y los saltos de
                línea tal como los escribas. Escríbelo entre `comillas
                invertidas` y SIN sangrar las líneas dentro del archivo
                (esa sangría también se mostraría).
    codigo    → Bloque de código (editor oscuro, ancho completo). Mismas
                reglas de escritura que `texto`. Para una barra invertida
                literal escribe doble: \\
    lenguaje  → (opcional, solo con `codigo`) Etiqueta que se muestra,
                p. ej. "Python".
  ════════════════════════════════════════════════════════════════
*/

const ENTRADAS = [
  {
    titulo: "Intro a la Progra, día 1",
    autor: "Anónimo",
    votoUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=-tn1Xz_4wUqk0utI6goA0iJdcNPFUwlPptoFlh_LZH1UNzE3UERQVjFCS1BZTU9SWDhGVEFORzFIVy4u&r3ff101a466274ac09e917ca1baf3da83=%22Intro%20a%20la%20Progra%2C%20d%C3%ADa%201%22",
    lenguaje: "Python",
    codigo:
`from random import randint

def intro_a_progra_dia_1(semestre):
    pensamientos = ['','!', '!!', '?', '...',
                    ' :D', ' :)', ' BD', ':P',
                    ' :(', ' :v', ' u.u', ' ;)',
                    ' <3', ' :3', ' .-.', ' =O',
                    ' :/', ' =[', ' ^.^', ' >.<',
                    ' -_-;', ' 0_0', ' >=D', ' ~o~']

    for estudiante in range(1, semestre):
        pensamiento = pensamientos[randint(0, len(pensamientos) - 1)]
        print('Estudiante ' + str(estudiante) + ': Hello World' + pensamiento)

S1_2026 = 12
intro_a_progra_dia_1(S1_2026)
`,
  },
  {
    titulo: "¿Quién lo diría?",
    autor: "Anónimo",
    votoUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=-tn1Xz_4wUqk0utI6goA0iJdcNPFUwlPptoFlh_LZH1UNzE3UERQVjFCS1BZTU9SWDhGVEFORzFIVy4u&r3ff101a466274ac09e917ca1baf3da83=%22%C2%BFQui%C3%A9n%20lo%20dir%C3%ADa%3F%22",
    texto:
`Quién diría que aquel niño,
que a veces por las tardes tenía que arrear ovejas
para ayudar a su familia,
ese mismo que para tener internet tenía que esperar ir al pueblo,
porque donde vivía nunca había señal,
y que con suerte sabía cómo encender un computador,
terminaría enamorándose de la programación
gracias a un ramo que dio en su segundo semestre de universidad,
tanto así que decidió cambiar su major
y ahora también es ayudante de ese ramo.

Ese niño soy yo,
y esta es una forma de agradecer a Intro a la Progra
por cambiarme la vida <3.`,
  },
  {
    titulo: "Nunca uses el Clearn a las 3:33 AM",
    autor: "Anónimo",
    mono: true,
    votoUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=-tn1Xz_4wUqk0utI6goA0iJdcNPFUwlPptoFlh_LZH1UNzE3UERQVjFCS1BZTU9SWDhGVEFORzFIVy4u&r3ff101a466274ac09e917ca1baf3da83=%22Nunca%20uses%20el%20Clearn%20a%20las%203%3A33%20AM%22",
    texto:
`#######################################################
### Creepypasta: Nunca uses el Clearn a las 3:33AM. ###
#######################################################

Eran las 3 de la mañana y me di cuenta que se me había olvidado resolver el set que
era para el día anterior, por lo que me puse a hacerlo inmediatamente.

Pude hacer los primeros dos ejercicios sin problemas, pero cuando traté de entrar al
tercero se demoró mucho en cargar, y en eso aparecieron imágenes fugaces de un
hombre rubio con cara naranja cubierta de sangre, pero no le dí importancia.

Una vez cargó, me puse a resolver el ejercicio. Cuando le dí a ejecutar se volvió a
demorar mucho tiempo hasta que fueron las 3:33 AM, pero me aparecieron todos los
tests en amarillo, con un error que decía:

Traceback (most recent call last):
  File "code.py", line 333, in <module>
    hora = 2026-06-08T03:33:33-04:00
ClearnError: Prepárate para morir.

De nuevo no le dí importancia, pero de repente empezó a salir una persona de mi
pantalla y en eso me dí cuenta que era Peachy Head lleno de sangre. Rápidamente salí
de mi casa, pero al mirar atrás me dí cuenta que él estaba corriendo detrás de mí.

Ahora mismo estoy escondido, pero escucho a Peachy Head acercarse. Escribo esto antes
de que sea muy tarde para otros:

Nunca usen el Clearn a las 3:33 de la mañana.`,
  },
  {
    titulo: "Clearn se caerá en 12 días",
    autor: "Anónimo",
    votoUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=-tn1Xz_4wUqk0utI6goA0iJdcNPFUwlPptoFlh_LZH1UNzE3UERQVjFCS1BZTU9SWDhGVEFORzFIVy4u&r3ff101a466274ac09e917ca1baf3da83=%22Clearn%20se%20caer%C3%A1%20en%2012%20d%C3%ADas%22",
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
];
