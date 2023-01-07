// Função que remove caracteres especiais / acentos para codificar/decodificar a frase
function normalizar(frase) {
    fraseLimpa = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return fraseLimpa;
}

// Botão para leitura do campo input e codificação da frase.
var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function () {
    event.preventDefault();
    var formCodificar = document.querySelector('#criptografa');
    var formMensagem = document.querySelector('#mensagem')
    var caixaTexto = document.querySelector('#msg')
    var fraseCriptografar = formCodificar.inputtexto.value;
    fraseCriptografar = normalizar(fraseCriptografar);
    var fraseCodificada = codificar(fraseCriptografar);
    caixaTexto.value = fraseCodificada;

});

// Função para codificar a palavra / frase
function codificar(frase) {
    frasecod = frase.replace(/i/gi, "imes").replace(/e/gi, "enter").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat").toLowerCase();
    alert('Criptografada com sucesso!');
    return frasecod;
}


// Leitura do campo input e descodifica a frase!
var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function () {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto2 = document.querySelector('#inputtexto')
    var frasedescriptografar = formcodificar.inputtexto.value;
    var frasedescodificada = descodificar(frasedescriptografar);
    console.log(frasedescodificada);
    console.log(caixatexto2);
    caixatexto2.value = frasedescodificada;
});

//Esta função descodifica a frase
function descodificar(frase) {
    frasedecod = frase.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u").toLowerCase();
    alert('Descriptografada com sucesso!');
    return frasedecod;
}

//Este botão copia o conteúdo da caixa do texto criptografado para a área de transferência (CTRL + C)
var botaoCopiar = document.querySelector('#btn-copy');
botaoCopiar.addEventListener("click", function () {
    event.preventDefault();
    var textArea = document.querySelector('#msg');
    textArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!')
});