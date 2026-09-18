# Propuesta de Entrega - Módulo 2: Sprint M2 - Estilo y narrativa del OA

**Estudiante:** Felipe Machado
**Fecha:** 2026-09-18
**Módulo:** 02-css-maquetacion / Sprint M2
**OA:** Las partes de una página web (v2)

---

## PARTE 2 · DISEÑO VISUAL Y NARRATIVA

### 1. La narrativa de mi OA

**Historia: "El Clásico de las Páginas Web"**

El estudiante es el **director técnico (DT)** de un club de fútbol que debe armar la formación perfecta para el clásico. Cada parte de la página web es una línea del equipo:

| Parte de la página | Línea del equipo | Por qué |
|---|---|---|
| `<header>` | El escudo y la camiseta | La identidad del club: nombre, logo, colores |
| `<nav>` | El mediocampo | Los volantes conectan todo el equipo, como los enlaces conectan la página |
| `<main>` | La delantera | El contenido principal es el ataque: lo que define el partido |
| `<footer>` | La defensa y el arquero | Lo que sostiene al equipo: datos de cierre, contactos |

**Rol del estudiante:** DT / estratega. Arma la formación, elige los colores de la camiseta y define la táctica de su página.

---

### 2. Mapa de jugadores (perfiles motivacionales)

| Perfil | Qué lo motiva | Qué le ofrece mi OA |
|---|---|---|
| **Conseguidores** | Completar, dominar, acumular | Trofeos 🏆 por cada línea completada (escudo, mediocampo, delantera, defensa) |
| **Exploradores** | Descubrir, investigar, estrategia | Formaciones tácticas ocultas: datos curiosos de cada parte de la página |
| **Socializadores** | Compartir, colaborar | La hinchada: compartir su formación con un compañero |
| **Filántropos** | Ayudar, aportar | Ser el capitán: ayudar a otro DT a completar su formación |

---

### 3. Mockup / boceto visual

```
┌─────────────────────────────────────────────────┐
│  HEADER (El escudo)  fondo celeste, texto blanco │
│  ⚽ EL CLÁSICO DE LAS PÁGINAS WEB                │
│  "Armá tu formación: las 4 partes de una página" │
├─────────────────────────────────────────────────┤
│  NAV (El mediocampo) fondo oscuro, enlaces dorados│
│  Inicio | La Formación | Actividades             │
├─────────────────────────────────────────────────┤
│  MAIN (La delantera) fondo blanco, texto oscuro  │
│  - 4 artículos (escudo, mediocampo, delantera,   │
│    defensa) con imágenes y ejemplos              │
│  - Actividades (opción múltiple + completar)     │
├─────────────────────────────────────────────────┤
│  FOOTER (La defensa) fondo oscuro, texto claro   │
│  © 2026 El Clásico de las Páginas Web            │
└─────────────────────────────────────────────────┘
```

**Paleta:** celeste + blanco + dorado sobre fondo oscuro — los colores de la selección, con el dorado para los trofeos.

**Tipografía:** Oswald (títulos, display condensada deportiva) + Roboto (cuerpo, sans limpia) — Google Fonts.

**Elementos gráficos de la historia:** emoji ⚽ en el título, trofeos 🏆 en las actividades, colores de camiseta en las secciones.

---

### 4. Paleta y fuentes elegidas

| Elemento | Valor |
|---|---|
| Celeste principal | `#2e86de` |
| Celeste oscuro (fondo) | `#1b4f72` |
| Blanco | `#ffffff` |
| Dorado (acento) | `#f1c40f` |
| Texto oscuro | `#2c3e50` |
| Fondo claro | `#f8f9fa` |
| Fuente títulos | Oswald (Google Fonts) |
| Fuente cuerpo | Roboto (Google Fonts) |

*Justificación:* el celeste y el dorado son casi complementarios en el círculo cromático (máximo contraste sin abrumar), y sobre fondo oscuro los acentos "brillan" — misma lógica que el recurso Shanuki para paletas vibrantes.

---

### 5. Hoja de estilos

Ver archivo: `styles.css` (enlazado al `index.html` con `<link rel="stylesheet">`).

Aplica: fondo, color de texto, tipografía, espaciado (margin, padding, border) a header, nav, main, footer, articles y actividades.

---

## PRODUCTO FINAL - Nota sobre IAG

**Materiales generados con IAG en esta etapa y cómo los revisé:**

1. **Narrativa:** La IA propuso varias opciones de narrativa (ciudad digital, fútbol, automovilismo). Elegí la futbolera rioplatense ("El Clásico de las Páginas Web") porque conecta con el contexto cultural y hace el contenido accesible. Revisé el mapeo de las 4 partes a las líneas del equipo y lo ajusté para que cada analogía sea correcta.
2. **Paleta:** La IA sugirió la paleta celeste/blanco/dorado (colores de la selección). La verifiqué con la teoría del círculo cromático del recurso Shanuki: celeste y dorado son casi complementarios, con buen contraste sobre fondo oscuro.
3. **CSS:** El `styles.css` fue generado con ayuda de IA y revisado por mí: verifiqué que los selectores apunten a las etiquetas correctas (header, nav, main, footer), que el contraste texto/fondo sea accesible y que el espaciado sea equilibrado.
4. **Mockup:** Boceto realizado a partir de la estructura del Módulo 1, con anotaciones de paleta y tipografía.

**Todo el contenido fue revisado por mí antes de incluirlo.** La estructura HTML es la del Módulo 1 (escrita manualmente), ampliada con la narrativa y el enlace al CSS.