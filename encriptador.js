// Elementos botones y text area
const botonencriptar = document.querySelector('.btn-encriptador');
const textoencriptador = document.querySelector('.texto-encriptado');
const avisotexto = document.querySelector('.aviso-texto');
const evaluador = document.querySelector('.comprobar-evaluar');
const contenidocard = document.querySelector('.card-contenedor');
const botoncopiar = document.querySelector('.btn-copiar');
// desencriptar
const botondesencriptar = document.querySelector('.btn-desencriptar');

botonencriptar.addEventListener('click', e => {
    e.preventDefault();
    let texto = textoencriptador.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto == "") {
        avisotexto.textContent = "El campo no debe estar vacío";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else if (texto !== txt) {
        avisotexto.textContent = "No debe haber caracteres especiales";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        avisotexto.textContent = "No debe tener mayúsculas";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else {
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');

        evaluador.innerHTML = texto;
        botoncopiar.style.visibility = 'inherit';
        contenidocard.remove();
    }
});

// boton de desencriptar
botondesencriptar.addEventListener('click', e => {
    e.preventDefault();
    let texto = textoencriptador.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto == "") {
        avisotexto.textContent = "El campo no debe estar vacío";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else if (texto !== txt) {
        avisotexto.textContent = "No debe haber caracteres especiales";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        avisotexto.textContent = "No debe tener mayúsculas";
        avisotexto.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            avisotexto.classList.remove('animate__animated', 'animate__shakeX');
            avisotexto.textContent = "Solo letras minúsculas y sin acentos";
        }, 1500);
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        evaluador.innerHTML = texto;
        botoncopiar.style.visibility = 'inherit';
        contenidocard.remove();
    }
});

// botoncopiar
botoncopiar.addEventListener('click', e => {
    e.preventDefault();
    let copiartexto = evaluador;
    copiartexto.select();
    document.execCommand('copy');
});
