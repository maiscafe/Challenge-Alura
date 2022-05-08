var btnCriptografar = document.querySelector(".btnCriptografar");
var btnDescriptografar = document.querySelector(".btnDescriptografar");
var btnCopy = document.querySelector(".btnCopy");
const regex = new RegExp(/^[a-z\s]+$/, "i");

btnCriptografar.addEventListener('click', criptografar );
btnDescriptografar.addEventListener('click', descriptografar);
btnCopy.addEventListener('click', btnCopyfunction);

var textAfter = document.querySelector(".text-after");



function criptografar () {
    var textBox = document.querySelector(".text-before")
    var textValue = textBox.value;

    if (textValue.length > 0) {
            document.querySelector("#erro-cripto").textContent = "";
            let textoEncriptado = textValue
                .replaceAll('e', 'enter')
                .replaceAll('i', 'imes')
                .replaceAll('a', 'ai')
                .replaceAll('u', 'ufat')
                .replaceAll('o', 'ober');
           textAfter.textContent = textoEncriptado;
           document.querySelector("#erro-cripto").textContent = "";
    } else {
    document.querySelector("#erro-cripto").textContent = "O campo está em branco"
    }

    

   
}

function descriptografar () {
    var textBox = document.querySelector(".text-before")
    var textValue = textBox.value;

    if (regex.test(textValue) == true){
        let textoDescriptado = textValue
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ufat', 'u')
            .replaceAll('ober', 'o');
       textAfter.textContent = textoDescriptado;
    }
}

function btnCopyfunction() {
    var copiar = textAfter.textContent;
    navigator.clipboard.writeText(copiar);
}