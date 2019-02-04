var tabla = [
    { nombreEmpleado: "Pedro", edad: 32, sueldo: 1000 },
    { nombreEmpleado: "Barbara", edad: 25, sueldo: 1000 },
    { nombreEmpleado: "Pepe", edad: 21, sueldo: 500 }
];

window.onload = cargarEventos;

function cargarEventos() {
    document.getElementById("actualizar").addEventListener("click", actualizarDatos, false);
    document.getElementById("nuevoEmpleado").addEventListener("submit", nuevoEmpleado, false);
}

function actualizarDatos() {
    var cuerpoTabla = document.getElementById("nuevosEmpleados");
    var tablaCompleta = "";

    for (let i = 0; i < tabla.length; i++) {

        tablaCompleta += "<tr><td>" + tabla[i].nombreEmpleado + "</td><td>" + tabla[i].edad + "</td><td>" + tabla[i].sueldo + "</td></tr>";
    }
    cuerpoTabla.innerHTML = tablaCompleta;
}

function nuevoEmpleado(event){
   
    event.preventDefault();
    var empleadoIntroducido= document.getElementById("nombreNuevoEmpleado").value;
    var edadIntroducida= document.getElementById("edadNuevoEmpleado").value;
    var sueldoIntroducido= document.getElementById("sueldoNuevoEmpleado").value;
    var nuevoEmpleado= { nombreEmpleado: empleadoIntroducido , edad: edadIntroducida, sueldo: sueldoIntroducido}
    tabla.push(nuevoEmpleado);
    actualizarDatos();
}

