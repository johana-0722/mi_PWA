//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}


function actualizarContador() {
    // Verificamos si hemos llegado a 50
    if (proyectos <= 50) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        // Incrementamos el contador en 1
        proyectos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 30
    if (clientes <= 30) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementamos el contador en 1
        clientes++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 40
    if (cursos <= 40) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills() {
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 200) { // Asegúrate de ajustar este valor según el diseño
        const progressBars = document.querySelectorAll('.progreso'); // Selecciona todas las barras
        progressBars.forEach(bar => {
            const percentage = bar.querySelector('span').textContent.replace('%', ''); // Extrae el porcentaje
            bar.style.width = `${percentage}%`; // Establece el ancho dinámicamente
        });
    }
}

// Detecta el desplazamiento para activar la animación
window.onscroll = function () {
    animacionNumeros(); // Si tienes otra animación de números
    animacionesSkills(); // Para las barras de progreso
};
