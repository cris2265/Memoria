let header = document.querySelector("#header")

header.innerHTML = `
    <div class="nivel">
        Nivel
        <div class="num_nivel">1</div>
        <div class="puntos"></div>
    </div>    
    
    <div class="vidas"></div>
    <div class="tiempo">
        <span class="material-symbols-outlined">
            timer
            </span>
            <span class="cronometro">00:00</span>

    </div>
`;
let title = document.querySelector(".title")
title.innerHTML = `🏆 Encontradas`;