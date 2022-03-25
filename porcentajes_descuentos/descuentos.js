function calcularPrecioDescuento(precioNeto, descuento){

let porcentajePrecio = 100-descuento;
let precioDescuento = (precioNeto * porcentajePrecio)/100;
return precioDescuento;
}

function CalcularPriceDiscount(){

    const InputPrice=document.getElementById("InputPrice").value;
    const InputDiscount = document.getElementById("InputDiscount").value;

    const PrecioDescontado = calcularPrecioDescuento(InputPrice,InputDiscount);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText='El precio con descuento es $'+PrecioDescontado;
}