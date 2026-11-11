/* ============================================
   El Clásico de las Páginas Web - script.js
   Sprint M3 · JavaScript básico
   1. Lógica: leer el formulario y decidir si la respuesta es correcta.
   2. Feedback con el DOM: mostrar el resultado en la página.
   3. Gamificación: sumar y restar goles y actualizar el tablero.
   ============================================ */

/* ---- Reglas del juego ---- */
var GOLES_ACIERTO = 10;   // goles que suma una respuesta correcta
var GOLES_ERROR = 3;      // goles que resta una respuesta incorrecta, se descuenta del total
var TOTAL_JUGADAS = 2;

/* ---- Respuestas correctas de la Jugada 2 ---- */
var RESPUESTAS = {
    'etiqueta-1': 'header',
    'etiqueta-2': 'nav',
    'etiqueta-3': 'main',
    'etiqueta-4': 'footer'
};

/* ---- Estado del partido ---- */
var estado = {
    goles: 0,
    jugadasGanadas: 0,
    multipleResuelta: false,
    completarResuelta: false
};


/* ============================================
   GAMIFICACIÓN
   ============================================ */

/**
 * Suma (o resta) goles y refresca el tablero.
 * El marcador nunca baja de 0.
 */
function sumarGoles(cantidad) {
    estado.goles = estado.goles + cantidad;

    if (estado.goles < 0) {
        estado.goles = 0;
    }

    actualizarTablero();
}

/**
 * Actualiza todos los tableros de la página (el del encabezado
 * y el de la sección de actividades) con los goles, las jugadas
 * ganadas y la barra de formación.
 */
function actualizarTablero() {
    var puntos = document.querySelectorAll('.puntos');
    var jugadas = document.querySelectorAll('.jugadas');
    var rellenos = document.querySelectorAll('.barra-relleno');
    var barras = document.querySelectorAll('.barra');
    var estados = document.querySelectorAll('.tablero-estado');
    var porcentaje = (estado.jugadasGanadas / TOTAL_JUGADAS) * 100;
    var textoEstado;

    if (estado.jugadasGanadas === 0) {
        textoEstado = 'Formación en armado: todavía no ganaste ninguna jugada.';
    } else if (estado.jugadasGanadas < TOTAL_JUGADAS) {
        textoEstado = 'Vas 1 de 2: falta la otra jugada para completar la formación.';
    } else {
        textoEstado = '🏆 ¡Formación completa! Ganaste las 2 jugadas.';
    }

    for (var i = 0; i < puntos.length; i++) {
        puntos[i].textContent = estado.goles;
        jugadas[i].textContent = estado.jugadasGanadas + ' / ' + TOTAL_JUGADAS;
        rellenos[i].style.width = porcentaje + '%';
        barras[i].setAttribute('aria-valuenow', estado.jugadasGanadas);
        estados[i].textContent = textoEstado;
    }

    document.getElementById('copa').hidden = estado.jugadasGanadas < TOTAL_JUGADAS;
}


/* ============================================
   FEEDBACK CON EL DOM
   ============================================ */

/**
 * Muestra un mensaje dentro de la página y le pone un color
 * según el tipo: acierto, error o aviso.
 */
function mostrarFeedback(caja, mensaje, tipo) {
    caja.textContent = mensaje;
    caja.className = 'feedback ' + tipo;
}


/* ============================================
   JUGADA 1 · OPCIÓN MÚLTIPLE
   ============================================ */

function corregirMultiple(evento) {
    evento.preventDefault();   // la página NO se recarga

    var formulario = document.getElementById('form-multiple');
    var feedback = document.getElementById('feedback-multiple');
    var elegida = formulario.querySelector('input[name="etiqueta"]:checked');

    // Respuesta vacía: aviso y no se descuentan goles.
    if (elegida === null) {
        mostrarFeedback(feedback, '⚠️ Elegí una opción antes de patear: el árbitro no cobra jugadas sin pelota.', 'aviso');
        return;
    }

    // La jugada ya está ganada: no se vuelven a sumar goles.
    if (estado.multipleResuelta) {
        mostrarFeedback(feedback, '✅ Esta jugada ya está ganada. Probá la Jugada 2 para completar la formación.', 'acierto');
        return;
    }

    if (elegida.value === 'main') {
        estado.multipleResuelta = true;
        estado.jugadasGanadas = estado.jugadasGanadas + 1;
        sumarGoles(GOLES_ACIERTO);
        mostrarFeedback(feedback, '⚽ ¡Gol! <main> es la delantera: el contenido principal de la página. +10 goles.', 'acierto');
    } else {
        sumarGoles(-GOLES_ERROR);
        mostrarFeedback(feedback, '🟨 ¡Afuera! Elegiste <' + elegida.value + '>, que es otra línea del equipo. −3 goles. Mirá la explicación de arriba y volvé a patear.', 'error');
    }
}


/* ============================================
   JUGADA 2 · COMPLETAR
   ============================================ */

/**
 * Deja el texto en minúsculas y sin <, >, / ni espacios,
 * así " <Header> " y "header" cuentan como la misma respuesta.
 */
function normalizarEtiqueta(texto) {
    return texto.toLowerCase().replace(/[<>\s\/]/g, '');
}

function corregirCompletar(evento) {
    evento.preventDefault();   // la página NO se recarga

    var feedback = document.getElementById('feedback-completar');
    var claves = Object.keys(RESPUESTAS);
    var faltantes = [];
    var aciertos = 0;
    var errores = 0;
    var golesGanados = 0;
    var i;
    var campo;

    // La jugada ya está ganada: no se vuelven a sumar goles.
    if (estado.completarResuelta) {
        mostrarFeedback(feedback, '✅ Esta jugada ya está ganada. Ya completaste la formación.', 'acierto');
        return;
    }

    // 1) Respuestas vacías: aviso y no se descuenta nada.
    for (i = 0; i < claves.length; i++) {
        campo = document.getElementById(claves[i]);
        campo.className = '';

        if (normalizarEtiqueta(campo.value) === '') {
            faltantes.push(i + 1);
        }
    }

    if (faltantes.length > 0) {
        mostrarFeedback(feedback, '⚠️ Te falta completar la casilla ' + faltantes.join(' y la ') + '. Escribí todas las etiquetas para que el árbitro cobre la jugada.', 'aviso');
        return;
    }

    // 2) Corrección campo por campo.
    for (i = 0; i < claves.length; i++) {
        campo = document.getElementById(claves[i]);

        if (normalizarEtiqueta(campo.value) === RESPUESTAS[claves[i]]) {
            campo.className = 'bien';
            aciertos = aciertos + 1;

            // Solo se pagan los goles la primera vez que acierta cada casilla.
            if (campo.getAttribute('data-acertada') !== 'si') {
                campo.setAttribute('data-acertada', 'si');
                golesGanados = golesGanados + GOLES_ACIERTO;
            }
        } else {
            campo.className = 'mal';
            errores = errores + 1;
        }
    }

    // 3) Puntos y mensaje final.
    if (errores === 0) {
        estado.completarResuelta = true;
        estado.jugadasGanadas = estado.jugadasGanadas + 1;
    }

    sumarGoles(golesGanados - errores * GOLES_ERROR);

    if (errores === 0) {
        mostrarFeedback(feedback, '⚽ ¡Formación perfecta! Las 4 etiquetas están en su posición: header, nav, main y footer.', 'acierto');
    } else if (aciertos === 0) {
        mostrarFeedback(feedback, '🟥 Ninguna etiqueta acertada. Repasá el orden: header → nav → main → footer. −' + (errores * GOLES_ERROR) + ' goles.', 'error');
    } else {
        mostrarFeedback(feedback, '🟨 ' + aciertos + ' de 4 acertadas: ganaste ' + golesGanados + ' goles y perdiste ' + (errores * GOLES_ERROR) + '. Las casillas en rojo hay que corregirlas.', 'error');
    }
}


/* ============================================
   INICIO
   ============================================ */

function iniciar() {
    document.getElementById('form-multiple').addEventListener('submit', corregirMultiple);
    document.getElementById('form-completar').addEventListener('submit', corregirCompletar);
    actualizarTablero();
}

document.addEventListener('DOMContentLoaded', iniciar);
