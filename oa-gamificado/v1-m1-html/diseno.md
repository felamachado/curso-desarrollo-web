# Propuesta de Entrega - Módulo 1: Sprint M1 - Planificación del OA

**Estudiante:** [Tu nombre]
**Fecha:** 2026-08-25
**Módulo:** 01-fundamentos-html / Sprint M1

---

## PARTE 1 · ARMÁ TU OA

### 1. Tema y Objetivo

**Tema:** Las partes de una página web (HTML básico)

**Objetivo:** Que el estudiante identifique y nombre las 4 partes principales de una página web: encabezado (`<header>`), navegación (`<nav>`), contenido principal (`<main>`) y pie de página (`<footer>`).

---

### 2. Explicación del tema (Contenido)

#### ¿Qué es una página web?
Una página web es un archivo de texto con instrucciones que el navegador lee y dibuja. Esas instrucciones se llaman **etiquetas HTML**.

#### Las 4 partes principales
Toda página web tiene una estructura parecida a una casa:

**1. Encabezado (`<header>`)**
- Es la parte de arriba de la página
- Aquí va el título del sitio o el logo
- Es lo primero que ve el visitante

**2. Navegación (`<nav>`)**
- Es el menú para ir a otras páginas
- Tiene enlaces como "Inicio", "Sobre mí", "Contacto"
- Ayuda a moverse por el sitio

**3. Contenido principal (`<main>`)**
- Es el centro de la página
- Aquí va la información importante
- Artículos, textos, imágenes, videos

**4. Pie de página (`<footer>`)**
- Es la parte de abajo
- Aquí va el copyright, datos de contacto, redes sociales
- Cierra la página

#### Ejemplo visual
```
┌─────────────────────────────────────┐
│  HEADER: Título / Logo              │
├─────────────────────────────────────┤
│  NAV: Inicio | Temas | Contacto     │
├─────────────────────────────────────┤
│                                     │
│  MAIN: Contenido principal          │
│  - Artículos                        │
│  - Imágenes                         │
│  - Textos                           │
│                                     │
├─────────────────────────────────────┤
│  FOOTER: © 2026 | Contacto | Redes  │
└─────────────────────────────────────┘
```

---

### 3. Imágenes y videos

**Imágenes incluidas en el HTML (fuentes educativas reales - MDN Web Docs):**

| Imagen | URL | Descripción | Alt text |
|--------|-----|-------------|----------|
| 1. Estructura HTML5 | `https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/structuring_content/structuring_documents/sample-website.png` | Estructura semántica básica | Estructura básica de una página HTML5 con header, nav, main, footer |
| 2. Header | `https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/structuring_content/structuring_a_page_of_content/example-page.png` | Encabezado con título/logo | Ejemplo de header con título y logo |
| 3. Nav | `https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/structuring_content/structuring_documents/sample-website.png` | Barra de navegación | Ejemplo de navegación con enlaces |
| 4. Main | `https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/structuring_content/structuring_a_page_of_content/example-page.png` | Contenido principal | Ejemplo de contenido principal en main |
| 5. Footer | `https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn_web_development/core/structuring_content/structuring_documents/sample-website.png` | Pie de página | Ejemplo de footer con copyright y enlaces |

**Video sugerido (no embebido):**
- "Partes de una página web" - 2 min - Buscar en YouTube: "partes página web HTML básico"

*Las imágenes provienen de MDN Web Docs (Mozilla Developer Network), fuente educativa oficial y confiable para desarrollo web.*

---

### 4. Dos actividades prácticas

#### Actividad 1: Opción múltiple
**Pregunta:** ¿Qué etiqueta se usa para el contenido principal de la página?

- A) `<header>`
- B) `<nav>`
- C) `<main>` ✓
- D) `<footer>`

**Retroalimentación:**
- **Correcta (C):** ¡Bien! `<main>` es donde va el contenido principal.
- **Incorrecta (A):** `<header>` es el encabezado, arriba de todo.
- **Incorrecta (B):** `<nav>` es la navegación, el menú.
- **Incorrecta (D):** `<footer>` es el pie de página, abajo de todo.

---

#### Actividad 2: Completar
**Instrucción:** Completá las etiquetas que faltan en la estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>
<body>
    <______>Título del sitio</______>
    <______>Menú: Inicio | Contacto</______>
    <______>Contenido principal aquí</______>
    <______>© 2026 - Mi sitio</______>
</body>
</html>
```

**Respuestas:** `header` / `header` · `nav` / `nav` · `main` / `main` · `footer` / `footer`

**Retroalimentación:**
- **Todo correcto:** ¡Perfecto! Recordaste las 4 partes en orden.
- **Algunas malas:** Revisá el orden: header → nav → main → footer.
- **Ninguna correcta:** Volvé a leer la explicación de las 4 partes.

---

### 5. Maquetado HTML (archivo separado)
Ver archivo: `oa-partes-pagina-web.html`

---

## PRODUCTO FINAL - Nota sobre IAG

**Materiales generados con IAG y cómo los revisé:**

1. **Imágenes del diagrama de las 4 partes:** Obtenidas de **MDN Web Docs** (Mozilla Developer Network), fuente educativa oficial. URLs directas a `sample-website.png` y `example-page.png` del repositorio de MDN. Verifiqué que las imágenes muestren la estructura semántica HTML5 correcta (header, nav, main, footer).

2. **Redacción de la explicación:** Usé ChatGPT para simplificar el texto a "lectura fácil" (frases cortas, palabras cotidianas). Revisé que no haya tecnicismos y que el orden sea header → nav → main → footer.

3. **Actividad de opción múltiple:** Generada con ayuda de IA para la redacción de retroalimentación. Verifiqué que la respuesta correcta sea `<main>` y que las incorrectas correspondan a las otras 3 etiquetas.

4. **Actividad completar:** Diseñada por mí basada en el esqueleto HTML visto en clase (DOCTYPE, html, head, body).

**Todo el contenido fue revisado por mí antes de incluirlo.** La estructura HTML la escribí yo manualmente aplicando lo visto en el Módulo 1.