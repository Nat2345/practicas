function calcularSalarioNeto() {
    let puesto=parseInt(document.getElementById('puesto').value);
    let horas=parseInt(document.getElementById('horas').value);
    let anios=parseInt(document.getElementById('anios').value);
    let sueldoHora=0;
    switch(puesto){
        case 1: sueldoHora=300; break;
        case 2: sueldoHora=100; break;
        case 3: sueldoHora=120; break;
    }window.addEventListener('DOMContentLoaded', () => {
    const selectHoras = document.getElementById('horas');
    const selectAños = document.getElementById('años');

    for (let i = 0; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectHoras.appendChild(option);
    }

    for (let i = 0; i <= 40; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectAños.appendChild(option);
    }

   
    calcularSalarioNeto();
});

function calcularSalarioNeto() {
    const puesto = parseInt(document.getElementById('puesto').value);
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const años = parseInt(document.getElementById('años').value) || 0;

   
    let sueldoHora = 0;
    switch (puesto) {
        case 1:
            sueldoHora = 300; 
            break;
        case 2:
            sueldoHora = 100; 
            break;
        case 3:
            sueldoHora = 120; 
            break;
        default:
            sueldoHora = 0;
    }

    
    const sueldoBase = parseFloat(sueldoHora * horas);
    const canastaBásica = parseFloat(sueldoBase * 0.025); 
    const apoyo = parseFloat(sueldoBase * 0.05);          
    const antigüedad = parseFloat(años * 150);            
    const estímulo = parseFloat(sueldoBase * 0.02);       

    const totalPercepciones = sueldoBase + canastaBásica + apoyo + antigüedad + estímulo;

   
    const isr = parseFloat(sueldoBase * 0.10);            
    const servicioSalud = parseFloat(sueldoBase * 0.035); 
    const afore = parseFloat(sueldoBase * 0.04);           
    const sindicato = parseFloat(sueldoBase * 0.01);       

    const totalDeducciones = isr + servicioSalud + afore + sindicato;

   
    const salarioNeto = totalPercepciones - totalDeducciones;

   
    document.getElementById('sueldoBase').innerHTML = '<b>$' + sueldoBase.toFixed(2) + '</b>';
    document.getElementById('canastaBásica').innerHTML = '<b>$' + canastaBásica.toFixed(2) + '</b>';
    document.getElementById('apoyo').innerHTML = '<b>$' + apoyo.toFixed(2) + '</b>';
    document.getElementById('antigüedad').innerHTML = '<b>$' + antigüedad.toFixed(2) + '</b>';
    document.getElementById('estímulo').innerHTML = '<b>$' + estímulo.toFixed(2) + '</b>';
    document.getElementById('totalPercepciones').innerHTML = '<b>$' + totalPercepciones.toFixed(2) + '</b>';

    document.getElementById('isr').innerHTML = '<b>$' + isr.toFixed(2) + '</b>';
    document.getElementById('servicioSalud').innerHTML = '<b>$' + servicioSalud.toFixed(2) + '</b>';
    document.getElementById('afore').innerHTML = '<b>$' + afore.toFixed(2) + '</b>';
    document.getElementById('sindicato').innerHTML = '<b>$' + sindicato.toFixed(2) + '</b>';
    document.getElementById('totalDeducciones').innerHTML = '<b>$' + totalDeducciones.toFixed(2) + '</b>';

    document.getElementById('salarioNeto').innerHTML = '<b>$' + salarioNeto.toFixed(2) + '</b>';
}
    let sueldoBase=sueldoHora*horas;
    let canastaBasica=parseFloat(sueldoBase*0.025);
    let apoyo=parseFloat(sueldoBase*0.05);
    let antiguedad=parseFloat(anios*0.15);
    let estimulo=parseFloat(sueldoBase*0.02);
    let totalPercepciones=parseFloat(sueldoBase+canastaBasica+apoyo+antiguedad+estimulo);
    let ISR=parseFloat(sueldoBase*0.15);
    let servicioSalud=parseFloat(sueldoBase*0.035);
    let AFORE=parseFloat(sueldoBase*0.04);
    let sindicato=parseFloat(sueldoBase*0.01);
    let totalDeducciones=parseFloat(ISR+servicioSalud+AFORE+sindicato);
    let salarioNeto=parseFloat(totalPercepciones-totalDeducciones);
    document.getElementById("sueldoBase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("apoyo").innerHTML="<h3>$"+apoyo.toFixed(2)+"</h3>";
    document.getElementById("canastaBasica").innerHTML="<h3>$"+canastaBasica.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>$"+antiguedad.toFixed(2)+"</h3>";
    document.getElementById("estimulo").innerHTML="<h3>$"+estimulo.toFixed(2)+"</h3>";
    document.getElementById("totalPercepciones").innerHTML="<h3>$"+totalPercepciones.toFixed(2)+"</h3>";
    document.getElementById("ISR").innerHTML="<h3>$"+ISR.toFixed(2)+"</h3>";
    document.getElementById("servicioSalud").innerHTML="<h3>$"+servicioSalud.toFixed(2)+"</h3>";
    document.getElementById("AFORE").innerHTML="<h3>$"+AFORE.toFixed(2)+"</h3>";
    document.getElementById("sindicato").innerHTML="<h3>$"+sindicato.toFixed(2)+"</h3>";
    document.getElementById("totalDeducciones").innerHTML="<h3>$"+totalDeducciones.toFixed(2)+"</h3>";
    document.getElementById("salarioNeto").innerHTML="<h3>$"+salarioNeto.toFixed(2)+"</h3>";
}