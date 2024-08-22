const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const indicacion = document.querySelector(".indicaciones-texto");


function btnEncriptar () {

    if (/[^a-z\s]/.test(textarea.value)) {
        indicacion.value = indicacion.style.color = "#D00000";
    }
    else {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    indicacion.value = indicacion.style.color = "#0A3871";
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}

function encriptar (stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)  {

        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar (stringDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)  {

        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}


function copiarTexto() {
    let textarea = document.querySelector('.mensaje');
    navigator.clipboard.writeText(textarea.value);
}