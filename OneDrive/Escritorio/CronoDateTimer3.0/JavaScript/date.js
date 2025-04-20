window.addEventListener("load", () => {

    function cargarData(){
        const date = new Date();
        const dia = date.getDay();
        const diaDelMes = date.getDate();
        const mes = date.getMonth() ;
        const anio = date.getFullYear();
        const hora = date.getHours();
        const minutos = date.getMinutes();

        const diaSemanas = ["Domingo", "Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sabado"];
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        document.getElementById("dia").innerHTML = diaSemanas[dia];
        document.getElementById("mes").innerHTML = meses[mes];
        document.getElementById("diaDelMes").innerHTML = diaDelMes;
        document.getElementById("anio").innerHTML = anio;
        document.getElementById("Alarma-horas").innerHTML = hora < 10 ? "0" + hora : hora;
        document.getElementById("Alarma-minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    }

    cargarData();

    setInterval(  cargarData(), 1000 * 60 * 60 * 24); // Actualiza cada 24 horas




})