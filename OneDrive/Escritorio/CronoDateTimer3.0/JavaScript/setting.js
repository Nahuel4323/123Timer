window.addEventListener("DOMContentLoaded", () => {

    for(let i = 0; i < 24; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        document.getElementById("horas").appendChild(option);
    }

    for(let i = 0; i < 60; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        document.getElementById("minutos").appendChild(option);
    }

    const checkboxMessage = document.getElementById("toggleChackbox-M"); // Define la variable checkbox
    console.log(checkboxMessage);
    checkboxMessage.addEventListener('change', () => {
        if (checkboxMessage.checked) {
            document.querySelector(".activeMessage").style.opacity = "1"; // Asegúrate de que el selector sea correcto
            console.log("checked");
        } else {
            document.querySelector(".activeMessage").style.opacity = "0.5"; // Asegúrate de que el selector sea correcto
            console.log("unchecked");
        }
    });


    const checkboxSound = document.getElementById("toggleChackbox-S"); // Define la variable checkbox

    checkboxSound.addEventListener('change', () => {
        if (checkboxSound.checked) {
            document.querySelector(".activeSound").style.opacity = "1"; // Asegúrate de que el selector sea correcto
            console.log("checked");
        } else {
            document.querySelector(".activeSound").style.opacity = "0.5"; // Asegúrate de que el selector sea correcto
            console.log("unchecked");
        }
    });

    console.log(document.querySelector(".SettingAlarm"))
    document.querySelector(".SettingAlarm").addEventListener("click", () => {
        document.querySelector(".contenedorSetting").classList.toggle("activeSetting");
        document.querySelector(".container-info").classList.toggle("activeSetting-info");
})




})