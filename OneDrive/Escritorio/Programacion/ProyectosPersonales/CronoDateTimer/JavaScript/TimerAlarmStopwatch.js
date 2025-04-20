window.addEventListener("DOMContentLoaded", () => {

    // Cronometro

    let minDom = document.querySelector(".minutes__item-timer");
    let secDom = document.querySelector(".seconds__item-timer");
    let minSecDom = document.querySelector(".miliseconds__item");

    let timerStart = document.querySelector(".btn__start-timer");
    let timerReset = document.querySelector(".btn__reset-timer");
    let timerLap = document.querySelector(".btn__lap-timer");

    let lapConteiner = document.querySelector(".lap__date");
    let lapDom = document.querySelector(".crono__lap");

    let minutes = 0;
    let seconds = 0;
    let miliSecnods = 0;
    let time = null;
    let ct = 0;

    let stateStart = false; 
    timerStart.addEventListener("click", () => {
        if (!stateStart){
            timerRun();
            timerStart.innerHTML =  `<i class="fa-solid fa-pause"></i>Pausar`
            timerStart.style.backgroundColor = "#37B773"
            timerStart.style.display = "flex"
            timerStart.style.justifyContent = "center"
            timerStart.style.alignItems = "center";
            timerStart.style.gap = "0.5rem";
            
        } else {
            clearInterval(time);
            time = null;
            timerStart.innerHTML = `<i class="fa-solid fa-play"></i>Iniciar`
            timerStart.style.backgroundColor = "#43D688"
            timerStart.style.display = "flex"
            timerStart.style.gap = "0.5rem"
            timerStart.style.justifyContent = "center"
            timerStart.style.alignItems = "center";
        }
        stateStart = !stateStart;
    })

    timerReset.addEventListener("click", () => {
        minutes = 0;
        seconds = 0;
        miliSecnods = 0;
        clearInterval(time);
        displayTimer()
        lapDom.style.display = "none";
        lapConteiner.replaceChildren();
        ct = 0;
    })

    timerLap.addEventListener("click", () => {
        lapDom.style.display = "flex";
        displayLap()
    })


    const timerRun = () => {
        if(!time){
            time = setInterval( () => {
                miliSecnods++;
                if (miliSecnods >= 60){
                    seconds++;
                    miliSecnods = 0;
                }
                if (seconds >= 60){
                    minutes++;
                    seconds = 0;
                }
                displayTimer()

            }, 10)
        }
    }


    const displayTimer = () => {
        if (miliSecnods <= 9){
            minSecDom.innerHTML  = "0" + miliSecnods;
        }else {
            minSecDom.innerHTML = miliSecnods;
        }
        if (seconds <= 9){
            secDom.innerHTML  = "0" + seconds;
        } else {
            secDom.innerHTML = seconds;
        }
        if (minutes <= 9){
            minDom.innerHTML  = "0" + minutes;
        } else {
            minDom.innerHTML = minutes;
        };
    }

    function formatTimeUnit(unit, digits = 2) {
        return String(unit).padStart(digits, '0');
    }

    const displayLap = () => {
        ct ++;
        let box = document.createElement("div");
        let spanVuelta = document.createElement("span");
        let spanTime = document.createElement("span");

        box.classList.add("lap__container");
        spanVuelta.classList.add("date__lap-vuelta")
        spanTime.classList.add("date__lap-time")



        spanVuelta.textContent = `Vuelta ${ct}`;
        spanTime.textContent = `${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}:${formatTimeUnit(miliSecnods, 2)}`;


        lapConteiner.appendChild(box);
        box.appendChild(spanVuelta);
        box.appendChild(spanTime);

        if (ct >= 3 && ct <= 5){
            box.style.borderBottomColor = "#b5b5b5"
        }
        if (ct >= 6 ){
            box.style.borderBottomColor = "#bdbdbd"
        }



    }




    // Stopwatch (Temporizador)

    /* functionality setting of the stopwatch */

    let boxSound = document.querySelector(".sound__type-conteiner");
    let barScroll  = document.querySelector(".bar__scroll-sound");




    let stateScroll = false;

    barScroll.addEventListener("click", () => {
        if (stateScroll) {  
            console.log("Es TRUE, cambiando a FALSE");
            barScroll.classList.add("bar__scroll-active")
            barScroll.classList.remove("bar__scroll-inactive");
        } else {
            console.log("Es FALSE, cambiando a TRUE");
            barScroll.classList.add("bar__scroll-inactive");
            barScroll.classList.remove("bar__scroll-active");
            
        }
        stateScroll = !stateScroll;// 🔹 Invertirlo DESPUÉS de evaluarlo       
    });




    let soundContent = document.querySelector(".soundContent__selector");
    let soundType = document.querySelector(".soundType__content");

    
    // Muestra el menú cuando se hace clic en soundContent
    soundContent.addEventListener("click", (event) => {
        event.stopPropagation();
        soundType.style.display = (soundType.style.display === "none" || soundType.style.display === "") ? "flex" : "none";
    });
    
    // Oculta el menú cuando el mouse sale de soundContent

    
    // Si el usuario hace clic fuera del menú, se oculta
    document.addEventListener("click", (event) => {
        if (!soundContent.contains(event.target) && !soundType.contains(event.target)) {
            soundType.style.display = "none"; // Se oculta el menú
        } 
    }); 
    
    // Alarm (alarma)






    //  Iterative functionality
 // Selección de los botones
let btnTimer = document.querySelector(".list__item-timer");
let btnStopWatch = document.querySelector(".list__item-stopWatch"); // Corregido el nombre


// Selección de las secciones principales
let crono = document.querySelector(".main__crono");
let stopWatch = document.querySelector(".main__timer"); // Asegúrate de que esta clase es correcta


// Función para manejar la activación de los botones
function activateButton(activeBtn, color) {
    let buttons = [btnTimer, btnStopWatch, lapDom];

    // Iterar sobre los botones y desactivar todos
    buttons.forEach(btn => {
        btn.style.color = "rgb(50,49,49)";
        btn.style.borderBottom = "none";
    });

    // Activar el botón clicado
    activeBtn.style.color = color;
    activeBtn.style.borderBottom = `4px solid ${color}`;
}

// Eventos para cada botón
btnTimer.addEventListener("click", () => {
    activateButton(btnTimer, "#1DB3EB");
    stopWatch.style.display = "none";
    crono.style.display = "flex";
    
    
});

btnStopWatch.addEventListener("click", () => {
    activateButton(btnStopWatch, "#43D688");
    stopWatch.style.display = "flex";
    crono.style.display = "none";
    lapDom.style.display = "none"

});







})