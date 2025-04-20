window.addEventListener("DOMContentLoaded", () => {

    function cargarData(){
        const date = new Date();
        const dia = date.getDay();
        const diaDelMes = date.getDate();
        const mes = date.getMonth() ;
        const anio = date.getFullYear();
        const hora = date.getHours();
        const minutos = date.getMinutes();

        const diaSemanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        document.getElementById("dia").innerHTML = diaSemanas[dia - 1];
        document.getElementById("mes").innerHTML = meses[mes];
        document.getElementById("diaDelMes").innerHTML = diaDelMes;
        document.getElementById("anio").innerHTML = anio;
    }

    cargarData();

    setInterval(  cargarData(), 1000 * 60 * 60 * 24); // Actualiza cada 24 horas




})