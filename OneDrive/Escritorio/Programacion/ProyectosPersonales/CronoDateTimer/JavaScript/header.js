window.addEventListener("load", () => {
    let contentLenguage = document.querySelector(".lenguage__content");
    let titleLenguage = document.querySelector(".lenguage__title");



    /*      Movilidad del botton "titleLenguage"        */
    // Alternar visibilidad al hacer clic en el botón
    titleLenguage.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
        contentLenguage.style.visibility = "visible";
        contentLenguage.style.opacity = "1";

    });

    // Cerrar el "lenguage__content" cuando se hace click afuera de él. 
    document.addEventListener("click", (event) => {
        if (!contentLenguage.contains(event.target)){
            contentLenguage.style.visibility = "hidden";
            contentLenguage.style.opacity = "0";
        }
    })

    // Cerrar el "lenguage__content" cuando se sale de él.
    contentLenguage.addEventListener("mouseleave", () => {
        contentLenguage.style.visibility = "hidden";
        contentLenguage.style.opacity = "0";
    })

    // Evitar que el clic dentro del menú lo cierre
    contentLenguage.addEventListener("click", (event) => {
        event.stopPropagation(); // Permite interactuar con el menú sin que desaparezca
    });    


    /*      Funcionalidad del boton "titleLenguage"       */
    let namePrincipal = document.querySelector(".lenguage__title-name")
    let nameContent = document.querySelectorAll(".lenguage__name");

    nameContent.forEach((names) => {
        names.addEventListener("click", () => {
            namePrincipal.textContent = names.textContent
        });
    });




});