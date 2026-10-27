function calcular() {

    
    var productos = {
        tv: {
            nombre: "TENIS",
            precio: 1200,
            imagen: "img/signos/tenis.jpg"
        },

        comedor: {
            nombre: "BOLSA",
            precio: 850,
            imagen: "img/signos/bolsa.jpg"
        },

        lavadora: {
            nombre: "MOCHILA",
            precio: 650,
            imagen: "img/signos/mochila.jpg"
        },

        moto: {
            nombre: "CARRO",
            precio: 185000,
            imagen: "img/signos/carro.jpg"
        },

        sala: {
            nombre: "ELECTRODOMÉSTICOS",
            precio: 4500,
            imagen: "img/signos/electrodomesticos.jpg"
        }
    };

    
    var productoId = document.getElementById("producto").value;
    var cantidad = Number(document.getElementById("cantidad").value);

    var precio = document.getElementById("precio");
    var contado = document.getElementById("contado");
    var credito = document.getElementById("credito");
    var abono = document.getElementById("abono");
    var imagen = document.getElementById("img");
    var mensaje = document.getElementById("mensaje");

    var producto = productos[productoId];

    
    function moneda(valor) {
        return valor.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN"
        });
    }

    
    precio.textContent = "Precio unitario: " + moneda(producto.precio);

    // MOSTRAR IMAGEN DEL PRODUCTO
    imagen.innerHTML =
        '<img src="' + producto.imagen +
        '" alt="' + producto.nombre +
        '" class="img-fluid rounded-3 shadow-sm" style="max-width:250px;">';

    
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 10) {
        contado.textContent = moneda(0);
        credito.textContent = moneda(0);
        abono.textContent = moneda(0);

        mensaje.textContent = "Ingresa una cantidad entera del 1 al 10.";
        mensaje.style.color = "#E6007E";

        return;
    }

    mensaje.textContent = "";

    
    var precioContado = producto.precio * cantidad;

   
    var meses;
    var porcentaje;

    if (document.getElementById("uno").checked) {
        meses = 6;
        porcentaje = 0.10;
    } else if (document.getElementById("dos").checked) {
        meses = 12;
        porcentaje = 0.15;
    } else {
        meses = 18;
        porcentaje = 0.20;
    }

    
    var precioCredito = precioContado * (1 + porcentaje);
    var abonoMensual = precioCredito / meses;

   
    contado.textContent = moneda(precioContado);
    credito.textContent = moneda(precioCredito);
    abono.textContent = moneda(abonoMensual);
}


window.addEventListener("DOMContentLoaded", calcular);
