// BASE DE DATOS - Temporal
const coches = {

    BMW: {
        "Serie 3": ["E30", "E36", "E46", "E90", "F30", "G20"],
        "Serie 5": ["E34", "E39", "E60", "F10", "G30"],
        "M3": ["E30", "E36", "E46", "E92", "F80", "G80"]
    },

    Audi: {
        "A3": ["8L", "8P", "8V", "8Y"],
        "A4": ["B5", "B6", "B7", "B8", "B9"],
        "RS3": ["8P", "8V", "8Y"]
    },

    Honda: {
        "Civic": ["EG", "EK", "EP", "FN", "FK", "FL"],
        "Accord": ["5ª Gen", "6ª Gen", "7ª Gen", "8ª Gen"],
        "S2000": ["AP1", "AP2"]
    }

};


let marcaSeleccionada = null;
let modeloSeleccionado = null;
let generacionSeleccionada = null;


// FUNCION PARA RESETEAR MENUS
function resetMenu(menuId, texto) {
    const menu = document.getElementById(menuId);
    menu.querySelector(".opcion_seleccionada").textContent = texto;
    menu.querySelector(".seleccion_opciones").innerHTML = "";
}


// FUNCION PARA CREAR OPCIONES
function llenarOpciones(selectId, opciones, callback) {
    const select = document.querySelector(`#${selectId}`);
    const contenedor = select.querySelector(".seleccion_opciones");
    contenedor.innerHTML = "";
    opciones.forEach(opcion => {
        const div = document.createElement("div");
        div.textContent = opcion;
        div.onclick = () => {
            select.querySelector(".opcion_seleccionada").textContent = opcion;
            select.classList.remove("active");
            callback(opcion);
        };
        contenedor.appendChild(div);
    });
}


// ABRIR / CERRAR SELECT
document.querySelectorAll(".menu_activo").forEach(menu =>
{
    menu.querySelector(".opcion_seleccionada").onclick = () =>
    {
        if(menu.classList.contains("disabled")) return;
        document.querySelectorAll(".menu_activo").forEach(m =>
            m.classList.remove("active")
        );
        menu.classList.toggle("active");
    };
});



// CARGAR MARCAS
llenarOpciones("menu_marca", Object.keys(coches), (marca) => {
    marcaSeleccionada = marca;
    //Resetear Menús dependientes
    resetMenu("menu_modelo", "Selecciona modelo");
    resetMenu("menu_generacion", "Selecciona generación");
    document.getElementById("menu_modelo").classList.remove("disabled");
    document.getElementById("menu_generacion").classList.remove("disabled");
    llenarOpciones("menu_modelo", Object.keys(coches[marca]), (modelo) => {
        modeloSeleccionado = modelo;
        resetMenu("menu_generacion", "Selecciona Generación");
        document.getElementById("menu_generacion").classList.remove("disabled");
        llenarOpciones("menu_generacion", coches[marca][modelo], (generacion) => {
            generacionSeleccionada = generacion;
            console.log("Seleccionado:", marca, modelo, generacion);
        });
    });
});


// Cerrar si haces click fuera
document.addEventListener("click", e => {
    if (!e.target.closest(".menu_activo")) {
        document.querySelectorAll(".menu_activo").forEach(select => {
            select.classList.remove("active");
        });
    }
});


// CREAR URL Y AVISAR CAMPOS NO SELECCIONADOS
document.getElementById("boton_buscar").addEventListener("click", () => {
    if (!marcaSeleccionada || !modeloSeleccionado || !generacionSeleccionada) {
        alert("Por favor selecciona todas las opciones");
        return;
    }
    // Crear URL dinámica
    const url = `../Paginas/coche.html?marca=${marcaSeleccionada}&modelo=${modeloSeleccionado}&generacion=${generacionSeleccionada}` // Para q la URL se muestre tiene que ir con backticks (`), sino lo interpreta como texto plano
        .replaceAll(" ", "_");
    window.location.href = url;
});