# Documento de diseño — OA "El Clásico de las Páginas Web"

**Estudiante:** Felipe Machado
**Curso:** Ciencias de la Computación 3: Desarrollo Web
**Grupo:** 3.º EMS DGETP, bachillerato de Informática
**Fecha:** 2026-11-10
**Versión:** v3 (Sprint M3 · JavaScript básico)

Este documento reúne el diseño de los tres sprints del Objeto de Aprendizaje (OA): la planificación (M1), la narrativa y el estilo visual (M2) y la lógica, el feedback y la gamificación programadas (M3).

---

## PARTE 1 · PLANIFICACIÓN (Sprint M1)

### 1. Tema y objetivo

**Tema:** las partes de una página web (HTML básico).

**Objetivo general:** que el estudiante identifique y nombre las 4 partes principales de una página web —encabezado (`<header>`), navegación (`<nav>`), contenido principal (`<main>`) y pie de página (`<footer>`)— y reconozca qué contenido va en cada una.

### 2. Público objetivo

| Aspecto | Definición |
|---|---|
| **Nivel** | 3.º de Educación Media Superior (DGETP-UTU), bachillerato de Informática. |
| **Conocimientos previos** | **Ninguno.** No hace falta haber programado. Solo saber usar un navegador: abrir una página, hacer clic y escribir en un casillero. |
| **Otros destinatarios** | Cualquier persona que quiera entender cómo se arma una página web desde cero. |

### 3. Objetivos de aprendizaje

Al terminar el OA, el estudiante va a poder:

1. **Reconocer** las 4 partes de una página web y nombrarlas con su etiqueta HTML.
2. **Explicar** para qué sirve cada parte y qué contenido corresponde a cada lugar.
3. **Leer** la estructura básica de un documento HTML (`DOCTYPE`, `html`, `head`, `body`) y ubicar cada etiqueta.
4. **Aplicar** lo aprendido en dos actividades con corrección automática.
5. **Interpretar** el resultado de sus respuestas a partir del feedback y del puntaje.

### 4. Contenido y recursos

La explicación se organiza en cuatro bloques (uno por etiqueta) con una analogía futbolística y una imagen de referencia de **MDN Web Docs** (fuente educativa oficial) por bloque. Las imágenes ocupan todo el ancho disponible para que se lean bien.

Se incluye además un **video** ("Estructura semántica en HTML: header, nav, main, section y footer", canal Anderx) embebido con `iframe` y un enlace directo a YouTube por si el video no carga.

---

## PARTE 2 · DISEÑO VISUAL Y NARRATIVA (Sprint M2)

### 1. La narrativa

**Historia: "El Clásico de las Páginas Web".**

El estudiante es el **director técnico (DT)** de un club que debe armar la formación perfecta para el clásico. Cada parte de la página web es una línea del equipo:

| Parte de la página | Línea del equipo | Por qué |
|---|---|---|
| `<header>` | El escudo y la camiseta | Es la identidad del club: nombre, logo, colores. |
| `<nav>` | El mediocampo | Los volantes conectan al equipo, como los enlaces conectan la página. |
| `<main>` | La delantera | El contenido principal es el ataque: lo que define el partido. |
| `<footer>` | La defensa y el arquero | Sostiene al equipo: datos de cierre y contacto. |

La narrativa atraviesa todo el OA: el título, los nombres de las secciones ("La formación", "Las jugadas"), las actividades ("Patear al arco"), los mensajes de resultado ("¡Gol!", "¡Afuera!", "¡Copa ganada!") y el sistema de puntos ("goles" y "Tablero del DT").

### 2. Mapa de jugadores (perfiles motivacionales)

| Perfil | Qué lo motiva | Qué le ofrece el OA |
|---|---|---|
| **Conseguidores** | Completar, dominar, acumular | Goles en el tablero, contador de jugadas ganadas 0/2 y copa final. |
| **Exploradores** | Descubrir, investigar, estrategia | Explicaciones, imágenes y video para descubrir cómo se arma una página. |
| **Socializadores** | Compartir, colaborar | La hinchada: comparar el tablero y la formación con un compañero. |
| **Filántropos** | Ayudar, aportar | Ser el capitán: explicarle a otro DT qué va en cada etiqueta. |

### 3. Mockup

```
┌────────────────────────────────────────────────────────┐
│  HEADER (El escudo) — celeste, texto blanco            │
│  ⚽ EL CLÁSICO DE LAS PÁGINAS WEB                      │
│  "Armá tu formación: las 4 partes de una página web"   │
│  ┌ TABLERO DEL DT ────────────────────────────────┐    │
│  │  0 goles       0 / 2 jugadas ganadas           │    │
│  │  ▓▓▓▓▓▓▓░░░░░░░░░░  barra de formación         │    │
│  └────────────────────────────────────────────────┘    │
├────────────────────────────────────────────────────────┤
│  NAV (El mediocampo) — fondo oscuro, hover dorado      │
│  Inicio | Para quién | La formación | Actividades      │
├────────────────────────────────────────────────────────┤
│  MAIN (La delantera) — fondo blanco                    │
│  - ¿Qué es una página web? + imagen + video            │
│  - ¿Para quién es y qué vas a lograr?                  │
│  - La formación: 4 artículos con imagen grande         │
│  - Las jugadas: tablero + 2 formularios + copa         │
├────────────────────────────────────────────────────────┤
│  FOOTER (La defensa) — fondo oscuro, borde dorado      │
└────────────────────────────────────────────────────────┘
```

### 4. Paleta y tipografía

| Elemento | Valor |
|---|---|
| Celeste principal | `#2e86de` |
| Celeste oscuro (fondo) | `#1b4f72` |
| Blanco | `#ffffff` |
| Dorado (acento) | `#f1c40f` |
| Verde (acierto) | `#27ae60` |
| Rojo (error) | `#c0392b` |
| Texto oscuro | `#2c3e50` |
| Fondo claro | `#f8f9fa` |
| Fuente títulos | Oswald (Google Fonts) |
| Fuente cuerpo | Roboto (Google Fonts) |

*Justificación:* el celeste y el dorado son casi complementarios en el círculo cromático (máximo contraste sin abrumar) y sobre fondo oscuro los acentos brillan. El verde y el rojo se reservan para el feedback de las actividades, así el resultado se lee de un vistazo.

Los estilos están en `styles.css`, enlazado desde `index.html` con `<link rel="stylesheet">`.

---

## PARTE 3 · LÓGICA, FEEDBACK Y GAMIFICACIÓN (Sprint M3)

### 1. Archivos del OA

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura semántica: `header`, `nav`, `main` con secciones, `footer`. Dos formularios completos (`fieldset`, `legend`, `label for`, inputs con `id`, atributos `name`, `autocomplete`). |
| `styles.css` | Paleta, tipografía, espaciado, estilos de formularios, estados de acierto/error y barra de progreso. |
| `script.js` | Lógica de corrección, feedback con el DOM y gamificación con puntos. |

### 2. Actividades

| Jugada | Tipo de formulario | Respuesta correcta |
|---|---|---|
| **Jugada 1** | Opción múltiple con 4 `radio` agrupados por `name="etiqueta"` dentro de un `fieldset`. | `<main>` |
| **Jugada 2** | Completar: 4 campos de texto, uno por etiqueta. | `header`, `nav`, `main`, `footer` (en ese orden) |

### 3. Lógica de corrección

`script.js` está organizado en funciones con nombres claros:

| Función | Qué hace |
|---|---|
| `corregirMultiple(evento)` | Lee el radio elegido, avisa si no hay respuesta, compara con la correcta y aplica los puntos. |
| `corregirCompletar(evento)` | Revisa que no haya casillas vacías, normaliza cada respuesta, marca cada campo como correcto o incorrecto y aplica los puntos. |
| `normalizarEtiqueta(texto)` | Pasa a minúsculas y quita `<`, `>`, `/` y espacios: `" <Header> "` cuenta igual que `"header"`. |
| `sumarGoles(cantidad)` | Suma o resta goles y llama a `actualizarTablero()`. El marcador nunca baja de 0. |
| `actualizarTablero()` | Recorre el DOM y actualiza goles, jugadas ganadas, barra de formación y `aria-valuenow`. |
| `mostrarFeedback(caja, mensaje, tipo)` | Escribe el mensaje con `textContent` y cambia el color con `className`. |
| `iniciar()` | Conecta los dos formularios con `addEventListener('submit', ...)`. |

**Casos contemplados:**

- **Respuesta vacía:** muestra un aviso ("⚠️ Te falta completar la casilla…") y **no descuenta goles**.
- **Respuesta correcta:** +10 goles, mensaje de acierto y campo en verde.
- **Respuesta incorrecta:** −3 goles, mensaje de error y campo en rojo.
- **Repetición:** una jugada ya ganada no vuelve a sumar puntos, y cada casilla de la Jugada 2 paga sus goles una sola vez.
- **Envío del formulario:** `evento.preventDefault()` evita que la página se recargue.

### 4. Feedback con el DOM

El resultado no aparece en un `alert()` ni en la consola: se escribe dentro de la página.

- `caja.textContent = mensaje` → mensaje nuevo, sin recargar.
- `caja.className = 'feedback acierto' | 'feedback error' | 'feedback aviso'` → color y borde según el resultado.
- `campo.className = 'bien' | 'mal'` → cada casilla de la Jugada 2 se pinta según su propia corrección.
- Los párrafos de feedback tienen `role="status"` y `aria-live="polite"` para que un lector de pantalla también anuncie el resultado.

### 5. Gamificación programada

| Elemento | Cómo funciona |
|---|---|
| **Goles** | +10 por respuesta correcta, −3 por incorrecta (con mínimo 0). Se muestran en el "Tablero del DT" del encabezado y en el de la sección de actividades. |
| **Jugadas ganadas** | Contador `0 / 2`. Sube cuando se resuelve bien una jugada completa. |
| **Barra de formación** | Avanza 50 % por jugada ganada y se pone verde al llegar a 2 de 2. |
| **Copa** | Al ganar las 2 jugadas aparece el mensaje de copa ganada al final de las actividades. |
| **Estado del tablero** | Cambia el texto según el avance: "Formación en armado", "Vas 1 de 2", "¡Formación completa!". |

Los puntos están conectados con la narrativa (son goles del clásico) y con las actividades (se ganan y se pierden al responder).

---

## Ajustes aplicados de las devoluciones

| Sprint | Devolución de la tutora | Cómo se aplicó |
|---|---|---|
| **M1** | Escapar las etiquetas HTML para que se vean como texto y no se interpreten. | Todas las etiquetas se escriben con `&lt;` y `&gt;` o dentro de `<code>`. |
| **M1** | Incluir un video además de las imágenes. | Se agregó un video embebido sobre estructura semántica, con enlace alternativo a YouTube. |
| **M1** | Entregar el documento de diseño en un archivo aparte. | Este `diseno.md`, versionado junto al OA. |
| **M2** | Las actividades debían tener inputs reales, no listas. | Las dos actividades son formularios completos con `fieldset`, `legend`, `label for`, `radio` y campos de texto. |
| **M2** | Las imágenes debían verse más grandes. | Las imágenes ocupan el 100 % del ancho del artículo y el `main` se amplió a 1000 px. |

---

## PRODUCTO FINAL — Nota sobre IAG

**Materiales generados con inteligencia artificial y cómo los revisé:**

1. **Imágenes:** provienen de **MDN Web Docs** (Mozilla Developer Network), fuente educativa oficial. Verifiqué que muestren la estructura semántica HTML5 correcta (header, nav, main, footer).
2. **Redacción:** usé IA para simplificar la explicación a lectura fácil (frases cortas, palabras cotidianas) y para proponer la narrativa futbolística. Revisé el orden header → nav → main → footer y que cada analogía sea conceptualmente correcta.
3. **Paleta y tipografía:** la IA propuso la paleta celeste/blanco/dorado (colores de la selección). La verifiqué con la teoría del círculo cromático: celeste y dorado son casi complementarios y tienen buen contraste sobre fondo oscuro.
4. **CSS:** generado con ayuda de IA y revisado por mí: comprobé los selectores, el contraste texto/fondo y el espaciado.
5. **JavaScript:** la lógica se escribió con asistencia de IA y la revisé función por función: probé la respuesta vacía, la correcta, la incorrecta, la repetición y el tope en 0 goles del marcador.
6. **Video:** seleccionado por mí entre videos educativos en español y verificado con el servicio de YouTube antes de incluirlo.

**Todo el contenido fue revisado por mí antes de incluirlo.** La estructura HTML parte del trabajo manual del Módulo 1 y se fue ampliando sprint a sprint.

---

## Cómo probar el OA

1. Abrir `index.html` en un navegador (o la versión publicada en GitHub Pages).
2. En la Jugada 1, tocar "Patear al arco" sin elegir opción: debe aparecer el aviso y el marcador no debe cambiar.
3. Elegir una opción incorrecta: el marcador debe bajar 3 goles (sin pasar de 0).
4. Elegir `<main>`: deben sumarse 10 goles y el contador de jugadas debe pasar a 1 / 2.
5. En la Jugada 2, completar solo algunas casillas: debe avisar cuáles faltan.
6. Completar las cuatro bien: la barra llega al 100 % y aparece la copa.
