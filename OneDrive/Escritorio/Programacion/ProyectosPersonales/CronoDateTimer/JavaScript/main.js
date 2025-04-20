window.addEventListener("DOMContentLoaded", () => {

    // Generar dinamicamente las opciones Horas, Minuros y Segundos

    const selectHours = document.getElementById("hours");
    const selectMinutes = document.getElementById("minutes");
    const selectSeconds = document.getElementById("seconds");

    for (let i = 0; i <= 168; i++){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i.toString().padStart(2,"0");
        selectHours.appendChild(option);

        if (i <= 59){
            let optionMinutes = document.createElement("option");
            optionMinutes.value = i;
            optionMinutes.textContent = i.toString().padStart(2,"0")
            selectMinutes.appendChild(optionMinutes)

            let optionSeconds = document.createElement("option");
            optionSeconds.value = i;
            optionSeconds.textContent = i.toString().padStart(2,"0");
            selectSeconds.appendChild(optionSeconds)
        }


    }





    



})