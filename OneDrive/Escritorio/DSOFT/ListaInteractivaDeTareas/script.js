// Variable global (¡Ojo con esto!)

mensajeGlobal = "¡Bienvenido a tu lista de tareas!";
function inicializarLista() {
    let nombreLista = "Tareas Pendientes";
    const mensajeInicial = mensajeGlobal;
    mostrarMensaje(mensajeInicial);
    mostrarTareasIniciales();
    configurarBotonAgregarTarea(); // Nueva función para el botón
    }

function mostrarMensaje(texto) {
    const elementoMensaje = document.getElementById('mensaje');
    elementoMensaje.textContent = texto;
}
function mostrarTareasIniciales() {
    const tareas = ["Comprar víveres", "Estudiar JavaScript","Hacer ejercicio", "Llamar a un amigo"];
    const listaTareasElemento = document.getElementById('listatareas');
    for (let i = 0; i < tareas.length; i++) {
        const tareaTexto = tareas[i];
        const elementoLista = document.createElement('li');
        elementoLista.textContent = tareaTexto;
        listaTareasElemento.appendChild(elementoLista); 
    }
}


let contadorTareasAgregadas = 0; // Variable Global 
function configurarBotonAgregarTarea() {

        const botonAgregar = document.getElementById('boton-agregartarea');
        botonAgregar.addEventListener('click', function() {
        // Vamos a usar un switch para mostrar diferentes mensajes (ejemplo simplificado)
        const nuevaTarea = prompt("¿Qué tarea querés agregar?");

        if(nuevaTarea.trim() === ""){
            mostrarMensaje("Tarea Vacia, no se agrego")
            return
        }

        // Agregar la tarea a la lista
        agregarTareaALista(nuevaTarea);

        let opcion = contadorTareasAgregadas % 3; // Valor predefinido para el ejemplo del switch
        contadorTareasAgregadas++;
        switch (opcion) {
            case 0:
                // mostrarMensaje("¡Excelente! Vamos a agregar una nueva tarea.");
                mostrarMensaje("Seguís sumando tareas como un campeón ");

                break;
            case 1:
                // mostrarMensaje("¿Listo para ser productivo?");
                mostrarMensaje("¡No te olvides de tomarte un descanso! 😴");

                break;
            case 2:
                // mostrarMensaje("Haz clic en 'Agregar Tarea' para empezar.");
                mostrarMensaje(`Ya agregaste ${contadorTareasAgregadas} tareas, ¡increíble productividad! 🚀`);
                break
        }
    });
}
    
function agregarTareaALista(tarea) {
    const listaTareasElemento = document.getElementById('listatareas');

    const elementoLista = document.createElement('li');
    elementoLista.textContent = tarea;
    listaTareasElemento.appendChild(elementoLista);
} 


    
inicializarLista();
         // Llamamos a la función para que se ejecute al cargar la página


console.log("Variable global mensajeGlobal:", mensajeGlobal);

// Podemos acceder a la variable global desde fuera de la función
// console.log("Variable local nombreLista:", nombreLista);
// Esto generaría un error porque nombreLista tiene scope local


