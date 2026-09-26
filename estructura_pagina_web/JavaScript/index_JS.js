// Función del menú del logo
function MenuLogo() {
  const menu = document.getElementById("menu_desplegable_logo");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Función del menú del inicio
function MenuInicio() {
  const menu = document.getElementById("menu_desplegable_inicio");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}



// CARRUSEL DE COMENTARIOS
const cinta = document.querySelector(".cinta");
const contenedorCinta = document.querySelector("#contenedor_cinta");

const flechaIzq = document.querySelector(".flecha_izquierda");
const flechaDer = document.querySelector(".flecha_derecha");

let desplazamiento = 0;
const desplazamientoPorClick = 300;

// Actualiza posición, límites, rebotes y flechas
function actualizarCarrusel(conRebote = false) {
    const anchoCinta = cinta.scrollWidth; // Ancho total de todos los comentarios
    const anchoVisible = contenedorCinta.clientWidth; // Ancho visible del carrusel (contenedor de la cinta)

    const limiteDerecho = 0;
    const limiteIzquierdo = -(anchoCinta - anchoVisible);

    let rebote = false;

    if (desplazamiento > limiteDerecho) {
        desplazamiento = limiteDerecho;
        rebote = true;
    }

    if (desplazamiento < limiteIzquierdo) {
        desplazamiento = limiteIzquierdo;
        rebote = true;
    }

    // Aplicar movimiento
    cinta.style.transform = `translateX(${desplazamiento}px)`;

    // Rebote visual
    if (rebote && conRebote) {
        cinta.classList.add("rebote");
        cinta.style.transform = `translateX(${desplazamiento + 20}px)`;

        setTimeout(() => {
            cinta.style.transform = `translateX(${desplazamiento}px)`;
            setTimeout(() => cinta.classList.remove("rebote"), 150);
        }, 100);
    }

    // Activar / desactivar flechas
    flechaIzq.classList.toggle("disabled", desplazamiento === limiteDerecho);
    flechaDer.classList.toggle("disabled", desplazamiento === limiteIzquierdo);
}

// Eventos
flechaDer.addEventListener("click", () => {
    if (flechaDer.classList.contains("disabled")) return;
    desplazamiento -= desplazamientoPorClick;
    actualizarCarrusel(true);
});

flechaIzq.addEventListener("click", () => {
    if (flechaIzq.classList.contains("disabled")) return;
    desplazamiento += desplazamientoPorClick;
    actualizarCarrusel(true);
});

// Inicialización
actualizarCarrusel();


