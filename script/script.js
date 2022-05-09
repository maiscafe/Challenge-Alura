var btnCriptografar = document.querySelector(".btnCriptografar");
var btnDescriptografar = document.querySelector(".btnDescriptografar");
var btnCopy = document.querySelector(".btnCopy");
const regex = new RegExp(/^[a-z\s]+$/, "i");

btnCriptografar.addEventListener('click', criptografar );
btnDescriptografar.addEventListener('click', descriptografar);
btnCopy.addEventListener('click', btnCopyfunction);

var textAfter = document.querySelector(".text-after");
var textBox = document.querySelector(".text-before")


function criptografar () {

    var textValue = textBox.value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

    if (textValue.length > 0) {
            document.querySelector("#erro-cripto").textContent = "";
            let textoEncriptado = textValue
                .replaceAll('e', 'enter')
                .replaceAll('i', 'imes')
                .replaceAll('a', 'ai')
                .replaceAll('u', 'ufat')
                .replaceAll('o', 'ober');
           textAfter.textContent = textoEncriptado;
           limpaMsg();
    } else {
    document.querySelector("#erro-cripto").textContent = "O campo está em branco";
    }

    

   
}

function descriptografar () {
    var textValue = textBox.value;
    limpaMsg();

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
    document.querySelector("#msg-copy").textContent = "Copiado com sucesso!";
    var copiar = textAfter.textContent;
    navigator.clipboard.writeText(copiar);
    };

function limpaMsg (){
    document.querySelector("#msg-copy").textContent = "";
    document.querySelector("#erro-cripto").textContent = "";

}