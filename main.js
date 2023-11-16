//criando a função tocaSomAplausos e buscando a id da tecla para TransformStreamDefaultController.
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//referência constante listaDeTeclas que busca todos botões com a .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//laço de repetição While trocado pelo "for" tecla, efeito, idAudio e tocaSom 
for(let contador = 0;contador < listaDeTeclas.length);contador = contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; // busca do item 1 dos botões
    const idAudio = '#som_${efeito}'; // uso do template string
    tecla.onclick = function(){ //função anônima auxiliar ao tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }
}