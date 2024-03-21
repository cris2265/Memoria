let cronometro = document.querySelector(".cronometro")

function iniciar_cronometro(minutos, segundos) {
    cronometro.innerHTML = `${minutos}:${segundos}`
    
    function actualizr() {
        
        if (segundos == 1 && minutos ==0) {
            clearInterval(tiempo)
        }
        
        segundos--;
        
        if (segundos == 0) {
            if (minutos >=1) {
                segundos = 60
                minutos--;
            }

        }


        cronometro.innerHTML = "";
        
        if (segundos < 10) {
            cronometro.innerHTML=`0${minutos}:0${segundos}`;
            if (minutos < 10){
                cronometro.innerHTML=`0${minutos}:0${segundos}`; 
            }else{
                cronometro.innerHTML=`${minutos}:0${segundos}`; 
            }
        }else{
        cronometro.innerHTML=`0${minutos}:${segundos}`;
        }

    }
    
    
    //realiza un intervalo osea accion de tiempo
    let tiempo = setInterval(actualizr, 1000);

}

export {iniciar_cronometro}