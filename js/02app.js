
function calcularSalarioNeto() {

    var puesto = Number(document.querySelector("#puesto").value);
    var horas = Number(document.querySelector("#horas").value);
    var anios = Number(document.querySelector("#anios").value);

    var sueldoBase = 0;

    if (puesto === 1) {
        sueldoBase = horas * 150;
    } else if (puesto === 2) {
        sueldoBase = horas * 100;
    } else if (puesto === 3) {
        sueldoBase = horas * 80;
    } else if (puesto === 4) {
        sueldoBase = horas * 120;
    }

    var canastaBasica = sueldoBase * 0.10;
    var apoyo = sueldoBase * 0.05;
    var antiguedad = sueldoBase * 0.02 * anios;
    var estimulo = sueldoBase * 0.05;
    var bonoProductividad = sueldoBase * 0.05;

    var totalPercepciones =
        sueldoBase +
        canastaBasica +
        apoyo +
        antiguedad +
        estimulo +
        bonoProductividad;

    var ISR = totalPercepciones * 0.10;
    var servicioSalud = totalPercepciones * 0.03;
    var AFORE = totalPercepciones * 0.05;
    var sindicato = totalPercepciones * 0.02;
    var prestamo = sueldoBase * 0.03;

    var totalDeducciones =
        ISR +
        servicioSalud +
        AFORE +
        sindicato +
        prestamo;

    var salarioNeto = totalPercepciones - totalDeducciones;

    function mostrar(id, cantidad) {
        document.querySelector("#" + id).textContent =
            "$" + cantidad.toFixed(2);
    }

    mostrar("sueldoBase", sueldoBase);
    mostrar("canastaBasica", canastaBasica);
    mostrar("apoyo", apoyo);
    mostrar("antiguedad", antiguedad);
    mostrar("estimulo", estimulo);
    mostrar("bonoProductividad", bonoProductividad);

    mostrar("ISR", ISR);
    mostrar("servicioSalud", servicioSalud);
    mostrar("AFORE", AFORE);
    mostrar("sindicato", sindicato);
    mostrar("prestamo", prestamo);

    mostrar("totalPercepciones", totalPercepciones);
    mostrar("totalDeducciones", totalDeducciones);
    mostrar("salarioNeto", salarioNeto);
}

window.addEventListener("DOMContentLoaded", calcularSalarioNeto);
