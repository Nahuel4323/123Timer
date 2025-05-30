window.addEventListener('DOMContentLoaded' , () => {
    
    const app = document.getElementById("main");

    const routes = {
        "#Cronometro": `
        <h1 class="display-5 text-center fw-semibold mb-0 mt-5 ">Cronometro Online</h1>
        <p class="lead text-center mt-0">Cronómetro simple y conveniente en línea y gratis</p>

        <div class="container-fluid contenedor bg-white  d-flex- justify-content-center flex-column align-items-center mt-5 ">
            <div class="row justify-content-center align-items-center  mt-5 " > 
                <div class="col-4    text-center">
                    <span class="number " id="Alarma-horas">10</span>
                </div>
                <div class="col-4 text-center">
                    <span class="points" >:</span>
                </div>
                <div class="col-4 text-center">
                    <span class="number " id="Alarma-minutos">50</span>
                </div>
                <div class="col-4 text-center ms-5 " style="margin-top: 80px; width: 40px;">
                    <span class="points " style="font-size: 70px" >.</span>
                </div>
                <div class="col-4 justify-content-center align-items-start  " style="margin-top: 80px; margin-left: 0; padding-left: 0;">
                    <span class=" fw-semibold  me-5 " style="padding-right: 1500px; font-size: 50px;" id="crono-miniSeconds">50</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center  ">
                <div class="col-md-6 text-center">
                    <p class="setting-text" >MINUTOS</p>
                </div>
                <div class="col-md-6 text-center">
                    <p class="setting-text" >SEGUNDOS</p>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mt-2">
                <div class="col-12 d-flex justify-content-center align-items-center gap-4 m-5  " "> 
                    <button class="btn btn-primary w-100 rounded-5 text-white" id="iniciarCrono"  >
                        <i class="fa-solid fa-play "></i>
                        <span class="fw-semibold fs-5 ">Iniciar</span>
                    </button>
                    <button class="btn w-100 rounded-5 text-white " id="vueltaCrono" >
                        <i class="fa-solid fa-gear"></i>
                        <span class="fw-semibold fs-5">Vuelta</span>
                    </button>
                    <button class="btn w-100 rounded-5 text-white " id="resetCrono">
                        <i class="fa-solid fa-gear"></i>
                        <span class="fw-semibold fs-5">Reiniciar</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex flex-column  justify-content-center align-items-center contenedorSetting activeSetting" >
            <div class="row">
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">HORAS</span>
                    <select name="horas" id="horas" class="form-select w-25">
                        <option value="1"></option>
                    </select>
                </div>
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">MINUTOS</span>
                    <select name="horas" id="minutos" class="form-select w-25">
                    <!-- <option value="1"></option>-->
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeSound">
                        <div class="me-5">
                            <span class="setting-text">SONIDO</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-S"> 
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <div class="  text-center m-0">
                            <button class="button-dropdown  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-volume-high " style="color:black; opacity: 0.6;"></i>
                                <span class="fw-semibold fs-5">Sonido</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Sonido 1</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 2</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 3</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeMessage">
                        <div class="me-5">
                            <span class="setting-text">MENSAJE</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-M">
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <input type="text" class="form-control " id="input--message" placeholder="Mensaje...">
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center mt-5 ps-1 container-info " > 
        <div class="mt-5">
            <img src="assets/img/main/clock_no_bg_no_text.png"  style="width: 500px;" alt="">
        </div>
        <div class="p-3 d-flex justify-content-center align-items-start flex-column gap-2">
            <h2 class="display-5 fw-semibold">Sobre 123AlarmClock</h2>
            <p class="lead " style="font-size: 17.5px;">Nuestro despertador online le será útil en una variedad de casos. Por ejemplo, si necesita despertarse a una hora establecida, para no perderse algo importante. Además, un reloj despertador puede ser útil al cocinar en el horno, en juegos deportivos y en otras ocasiones. <br> 
                Para configurar una alarma en línea, simplemente seleccione las horas / minutos y una señal de sonido (opcional), luego presione el botón Inicio. Puede estar seguro de que la alarma sonará a la hora exacta.</p>
            <div class="d-inline-flex justify-content-center align-items-center gap-3">
                <p class="fw-semibold fs-5">Valora 123AlarmClock</p>
                <div class="stars ms-3 mb-3">
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p class="lead"><span class="fw-semibold fs-5">4.0</span> / 5 </p>
                <p class="lead ms-2 " style="font-size: 12px;margin-bottom:10px ;">  890</p>
            </div>
            <div class="d-inline-flex justify-content-center align-items-center gap-3 mb-5">
                <button class="btn button-info rounded-1 text-center " style="color:#2c76a1;border: 1px solid #bac0c4;">Facebook</button>
                <button class="btn button-info rounded-1 text-center " style="color:#8DC2F6;border: 1px solid #8DC2F6;">Twitter</button>
                <button class="btn button-info rounded-1 text-center " style="color:#FF7A00;border: 1px solid #FF7A00;">Reddit</button>
                <button class="btn button-info rounded-1 text-center " style="color:#EC2C71;border: 1px solid #EC2C71;">Pinterest</button>
            </div>
        </div>

    </div>
        `,
        "#Temporizador": `
            <h1 class="display-5 text-center fw-semibold mb-0 mt-5 ">Temporizador</h1>
        <p class="lead text-center mt-0">Temporizador práctico, eficiente y gratuito en línea</p>

        <div class="container-fluid contenedor bg-white  d-flex- justify-content-center flex-column align-items-center mt-5 ">
            <div class="row justify-content-center align-items-center  mt-5 " > 
                <div class="col-4    text-center">
                    <span class="number " id="Alarma-horas">10</span>
                </div>
                <div class="col-4 text-center">
                    <span class="points" >:</span>
                </div>
                <div class="col-4 text-center">
                    <span class="number " id="Alarma-minutos">50</span>
                </div>
                <div class="col-4 text-center">
                    <span class="points" >:</span>
                </div>
                <div class="col-4 text-center">
                    <span class="number " id="Alarma-minutos">50</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center  ">
                <div class="col-4 text-center">
                    <p class="setting-text" >HORAS</p>
                </div>
                <div class="col-4 text-center">
                    <p class="setting-text" >MINUTOS</p>
                </div>
                <div class="col-4 text-center">
                    <p class="setting-text" >SEGUNDOS</p>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mt-2">
                <div class="col-12 d-flex justify-content-center align-items-center gap-4 m-5  " "> 
                    <button class="btn btn-primary w-100 rounded-5 text-white" id="startAlarm"  >
                        <i class="fa-solid fa-play "></i>
                        <span class="fw-semibold fs-5 ">Iniciar</span>
                    </button>
                    <button class="btn w-100 rounded-5 text-white " id="resetAlarm" >
                        <i class="fa-solid fa-gear"></i>
                        <span class="fw-semibold fs-5">Reiniciar</span>
                    </button>
                    <button class="btn w-100 rounded-5 text-white SettingAlarm" id="SettingTimer">
                        <i class="fa-solid fa-gear"></i>
                        <span class="fw-semibold fs-5">Ajustes</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex flex-column  justify-content-center align-items-center contenedorSetting activeSetting" >
            <div class="row">
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">HORAS</span>
                    <select name="horas" id="horas" class="form-select w-25">
                        <option value="1"></option>
                    </select>
                </div>
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">MINUTOS</span>
                    <select name="horas" id="minutos" class="form-select w-25">
                    <!-- <option value="1"></option>-->
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeSound">
                        <div class="me-5">
                            <span class="setting-text">SONIDO</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-S"> 
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <div class="  text-center m-0">
                            <button class="button-dropdown  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-volume-high " style="color:black; opacity: 0.6;"></i>
                                <span class="fw-semibold fs-5">Sonido</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Sonido 1</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 2</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 3</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeMessage">
                        <div class="me-5">
                            <span class="setting-text">MENSAJE</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-M">
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <input type="text" class="form-control " id="input--message" placeholder="Mensaje...">
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center mt-5 ps-1 container-info " > 
        <div class="mt-5">
            <img src="assets/img/main/clock_no_bg_no_text.png"  style="width: 500px;" alt="">
        </div>
        <div class="p-3 d-flex justify-content-center align-items-start flex-column gap-2">
            <h2 class="display-5 fw-semibold">Sobre 123AlarmClock</h2>
            <p class="lead " style="font-size: 17.5px;">Nuestro despertador online le será útil en una variedad de casos. Por ejemplo, si necesita despertarse a una hora establecida, para no perderse algo importante. Además, un reloj despertador puede ser útil al cocinar en el horno, en juegos deportivos y en otras ocasiones. <br> 
                Para configurar una alarma en línea, simplemente seleccione las horas / minutos y una señal de sonido (opcional), luego presione el botón Inicio. Puede estar seguro de que la alarma sonará a la hora exacta.</p>
            <div class="d-inline-flex justify-content-center align-items-center gap-3">
                <p class="fw-semibold fs-5">Valora 123AlarmClock</p>
                <div class="stars ms-3 mb-3">
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p class="lead"><span class="fw-semibold fs-5">4.0</span> / 5 </p>
                <p class="lead ms-2 " style="font-size: 12px;margin-bottom:10px ;">  890</p>
            </div>
            <div class="d-inline-flex justify-content-center align-items-center gap-3 mb-5">
                <button class="btn button-info rounded-1 text-center " style="color:#2c76a1;border: 1px solid #bac0c4;">Facebook</button>
                <button class="btn button-info rounded-1 text-center " style="color:#8DC2F6;border: 1px solid #8DC2F6;">Twitter</button>
                <button class="btn button-info rounded-1 text-center " style="color:#FF7A00;border: 1px solid #FF7A00;">Reddit</button>
                <button class="btn button-info rounded-1 text-center " style="color:#EC2C71;border: 1px solid #EC2C71;">Pinterest</button>
            </div>
        </div>

    </div>
        
        `,
        "#Alarma": `<h1 class="display-5 text-center fw-semibold mb-0 mt-5 ">Alarma</h1>
        <p class="lead text-center mt-0">Alarma práctico, eficiente y gratuito en línea</p>

        <div class="container-fluid contenedor bg-white  d-flex- justify-content-center flex-column align-items-center mt-5 ">
            <div class="row justify-content-center align-items-center  mt-5 " > 
                <div class="col-4    text-center">
                    <span class="number " id="Alarma-horas">10</span>
                </div>
                <div class="col-4 text-center">
                    <span class="points" >:</span>
                </div>
                <div class="col-4 text-center">
                    <span class="number " id="Alarma-minutos">50</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mt-5 ">
                <p class="fs-4 fw-bold text-center " ><span id="dia">Martes</span> - <span id="mes">Marz</span> <span id="diaDelMes">20</span>, <span id="anio">2025</span></p>
            </div>
            <div class="row justify-content-center align-items-center mt-2">
                <div class="col-12 d-flex justify-content-center align-items-center gap-4 m-5  " "> 
                    <button class="btn btn-primary w-100 rounded-5 text-white" id="startAlarm"  >
                        <i class="fa-solid fa-play "></i>
                        <span class="fw-semibold fs-5 ">Iniciar</span>
                    </button>
                    <button class="btn w-100 rounded-5 text-white SettingAlarm" id="SettingAlarm">
                        <i class="fa-solid fa-gear"></i>
                        <span class="fw-semibold fs-5">Ajustes</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex flex-column  justify-content-center align-items-center contenedorSetting activeSetting" >
            <div class="row">
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">HORAS</span>
                    <select name="horas" id="horas" class="form-select w-25">
                        <option value="1"></option>
                    </select>
                </div>
                <div class="col-md-6 d-inline-flex justify-content-center align-items-center gap-2">
                    <span class="setting-text">MINUTOS</span>
                    <select name="horas" id="minutos" class="form-select w-25">
                    <!-- <option value="1"></option>-->
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeSound">
                        <div class="me-5">
                            <span class="setting-text">SONIDO</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-S"> 
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <div class="  text-center m-0">
                            <button class="button-dropdown  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-volume-high " style="color:black; opacity: 0.6;"></i>
                                <span class="fw-semibold fs-5">Sonido</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Sonido 1</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 2</a></li>
                                <li><a class="dropdown-item" href="#">Sonido 3</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-inline-flex justify-content-center align-items-center gap-5 activeMessage">
                        <div class="me-5">
                            <span class="setting-text">MENSAJE</span>
                            <label class="bar__scroll bar__scroll-message">
                                <input type="checkbox" id="toggleChackbox-M">
                                <span class="bar__scrol-circle"></span>
                            </label>
                        </div>
                        <input type="text" class="form-control " id="input--message" placeholder="Mensaje...">
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center mt-5 ps-1 container-info " > 
        <div class="mt-5">
            <img src="assets/img/main/clock_no_bg_no_text.png"  style="width: 500px;" alt="">
        </div>
        <div class="p-3 d-flex justify-content-center align-items-start flex-column gap-2">
            <h2 class="display-5 fw-semibold">Sobre 123AlarmClock</h2>
            <p class="lead " style="font-size: 17.5px;">Nuestro despertador online le será útil en una variedad de casos. Por ejemplo, si necesita despertarse a una hora establecida, para no perderse algo importante. Además, un reloj despertador puede ser útil al cocinar en el horno, en juegos deportivos y en otras ocasiones. <br> 
                Para configurar una alarma en línea, simplemente seleccione las horas / minutos y una señal de sonido (opcional), luego presione el botón Inicio. Puede estar seguro de que la alarma sonará a la hora exacta.</p>
            <div class="d-inline-flex justify-content-center align-items-center gap-3">
                <p class="fw-semibold fs-5">Valora 123AlarmClock</p>
                <div class="stars ms-3 mb-3">
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning "></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p class="lead"><span class="fw-semibold fs-5">4.0</span> / 5 </p>
                <p class="lead ms-2 " style="font-size: 12px;margin-bottom:10px ;">  890</p>
            </div>
            <div class="d-inline-flex justify-content-center align-items-center gap-3 mb-5">
                <button class="btn button-info rounded-1 text-center " style="color:#2c76a1;border: 1px solid #bac0c4;">Facebook</button>
                <button class="btn button-info rounded-1 text-center " style="color:#8DC2F6;border: 1px solid #8DC2F6;">Twitter</button>
                <button class="btn button-info rounded-1 text-center " style="color:#FF7A00;border: 1px solid #FF7A00;">Reddit</button>
                <button class="btn button-info rounded-1 text-center " style="color:#EC2C71;border: 1px solid #EC2C71;">Pinterest</button>
            </div>
        </div>

    </div>
            `,
        "#Formulario": `<h1 class="display-5 fs-3 mt-3" >Formulario</h1>`
        }

        // Funciona para cargar el contenido segun las rutas

        function loadContent() {
            const hash = window.location.hash || "#Cronometro";
            const content = routes[hash] || `<h1 class="display-5 fs-3 mt-3" >Pagina no encontrada</h1>`;

            // Cambia el color de los elementos de la barra de navegación según la ruta
            if ( hash == "#Alarma"){
                reiniciarColoresNavegacion();
                document.getElementById("itemAlarma").style.color = "#EC2C71";
                document.querySelector(".nav-item-alarma").style.borderBottom = "4px solid #EC2C71"
                agregarEstiloExterno("Estilos/alarma.css");
                eliminarEstiloExterno("Estilos/cronometro.css")


            } else if (hash == "#Cronometro"){
                reiniciarColoresNavegacion();
                document.getElementById("itemCronometro").style.color = "#43D688";
                document.querySelector(".nav-item-cronometro").style.borderBottom = "4px solid #43D688"
                eliminarEstiloExterno("Estilos/alarma.css");
                agregarEstiloExterno("Estilos/cronometro.css")




            } else if (hash == "#Temporizador"){
                reiniciarColoresNavegacion();
                document.getElementById("itemTemporizador").style.color = "#14AEE6";
                document.querySelector(".nav-item-temporizador").style.borderBottom = "4px solid #14AEE6"
                eliminarEstiloExterno("Estilos/alarma.css");
                agregarEstiloExterno("Estilos/temporizador.css");
                eliminarEstiloExterno("Estilos/cronometro.css")



            }
            else if (hash == "#Formulario"){
                reiniciarColoresNavegacion();
                document.getElementById("itemFormulario").style.color = "#F9C94D";
                document.querySelector(".nav-item-formulario").style.borderBottom = "4px solid #F9C94D"
                eliminarEstiloExterno("Estilos/alarma.css");
                eliminarEstiloExterno("Estilos/cronometro.css")




            }

            

            // 
            app.innerHTML = content;
        }


        function reiniciarColoresNavegacion(){
            // Reinicia los colores de los elementos de la barra de navegación
            document.getElementById("itemCronometro").style.color = "#000";
            document.querySelector(".nav-item-cronometro").style.borderBottom = "none";

            document.getElementById("itemTemporizador").style.color = "#000";
            document.querySelector(".nav-item-temporizador").style.borderBottom = "none";

            document.getElementById("itemAlarma").style.color = "#000";
            document.querySelector(".nav-item-alarma").style.borderBottom = "none";

            document.getElementById("itemFormulario").style.color = "#000";
            document.querySelector(".nav-item-formulario").style.borderBottom = "none";
        }
        
        // Carga el contenido inicial
        loadContent();
        window.addEventListener('hashchange', loadContent);

        function agregarEstiloExterno(url) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }

        function eliminarEstiloExterno(url) {
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
                if (link.href.includes(url)) {
                    link.parentNode.removeChild(link);
                }
            });
        }
})