function tocasom (idElementoAudio) {

   const elemento = document.querySelector(idElementoAudio);
     
       
    
    if(elemento != null && elemento.localName === 'audio') {
    
        elemento.play();
    }
    else  {
        console.log('O instrumento não existe');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');





for (let contador=0 ; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador];

    const instrumentos = teclas.classList[1];

    const idaudio =`#som_${instrumentos} `; //template string

    listaDeTeclas[contador].onclick = function () {

        tocasom(idaudio);

    }
    teclas.onkeydown = function(evento) { // se o evento (onkeydown) acontecer add senão remove
        if (evento.code === 'Space') {
        teclas.classList.add('ativa')
                }
        teclas.onkeyup = function () {
            teclas.classList.remove('ativa')
        }
    }
    

    //console.log(contador);
}



