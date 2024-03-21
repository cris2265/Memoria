import { Actualizar_vidas } from "./Actualizar_vidas.js";
import { vidas } from "./Actualizar_vidas.js";
import { Cargar_puntos } from "./puntos.js";
import { iniciar_cronometro } from "./Cargar_Cronometro.js";

let tablero = document.querySelector(".tablero")
let todas_las_cartad = document.querySelectorAll(".carta_trasera");
let cartas_Descubiertas = 0;

let contador_de_cartas = 0
let estado_del_cronometro = 0


    todas_las_cartad.forEach((cada_div)=>{

        cada_div.addEventListener("click",()=>{
           
            estado_del_cronometro++;
            if (estado_del_cronometro==1) {
                iniciar_cronometro(1,30)
            }

            

            let cantidad_descubiertas = document.querySelectorAll(".activar")
            let total_descubiertas = cantidad_descubiertas.length;
            
        

            if(total_descubiertas <2){
                


                cada_div.classList.add("activar")
                cantidad_descubiertas = document.querySelectorAll(".activar")
                if(total_descubiertas==1){
                    function comparar(){

                        let carta_1 = cantidad_descubiertas[0].textContent;
                        let carta_2 = cantidad_descubiertas[1].textContent;

                        if(carta_1 == carta_2){
                            console.log("verdadero")
                            cartas_Descubiertas++;
                            if (cartas_Descubiertas==todas_las_cartad.length/2) {
                                Cargar_puntos(vidas.length)
                            }
                            cantidad_descubiertas.forEach((carta)=>{
                                setTimeout(()=>{
                                    // Iterar sobre cada carta descubierta y quitar la clase "activar"
    
                                        cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                                            cada_carta_descubierta.classList.remove("activar")
                                            carta.innerHTML = "";
                                            carta.classList.remove("activar")
                                            carta.classList.add("ocultar")
                                            let listas_descubiertas =[];
                                            let encontradas = documen.querySelector(".encontradas")
                                            encontradas.innerHTML = `1. ${carta_1}`
                                        });
                                    },(1000))
                                    console.log(cartas_Descubiertas);
                            })
                            if (cartas_Descubiertas ==6) {
                                tablero.innerHTML = `
                                <h1 class="titulo">WINNER</h1>
                                `;
                            }
                        }else{
                            console.log("falso")
                            
                            console.log(cartas_Descubiertas);
                            setTimeout(()=>{
                                Actualizar_vidas(false);
                                // Iterar sobre cada carta descubierta y quitar la clase "activar"
                                    cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                                        cada_carta_descubierta.classList.remove("activar")
                    
                                    });
                                },(1000))
                        }

                    }
                    comparar();
                    
                    
                    

                    



                    
                    
                }
                

            }
           

        });
        
    });
    