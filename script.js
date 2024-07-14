let textoInserido = document.querySelector("#texto__de__entrada");

function criptografarTexto() {
    let texto = textoInserido.value;

    let resultadoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('conteudo__saida').innerHTML = '<textarea id="texto__criptografado" readonly>' + resultadoCriptografado + '</textarea>' + '<button class="botao__copiar" onclick="copiarTexto()">Copiar</button>';

}

function descriptografarTexto() {
    let texto = textoInserido.value;

    let resultadoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('conteudo__saida').innerHTML = '<textarea id="texto__criptografado" readonly>' + resultadoDescriptografado + '</textarea>' + '<button class="botao__copiar" onclick="copiar()">Copiar</button>';
}

function copiarTexto() {
    let textoCopiar = document.getElementById('texto__criptografado');

    textoCopiar.select();
    document.execCommand('copy');
 
}