//Cuadrado
console.group("Cuadrado");

//console.log("Los lados del cuadrado miden "+ladocuadrado+"cm");

function perimetrocuadrado(lado) {return lado*4;}
//console.log("El perimetro es "+perimetrocuadrado+"cm");

function areacuadrada (lado) {return lado * lado};
//console.log("El area es "+areacuadrada+"cm^2");
console.groupEnd();
//Triangulo
console.group("Triangulo");



function perimetrotriangulo (lado, lado2, base) {return parseInt(lado)+parseInt(lado2)+parseInt(base);}
// console.log("El perimetro es "+perimetrtriangulo+"cm");

function areatriangulo (base, altura) {return(base * altura)/2;}
// console.log("El area es "+areatriangulo+"cm^2");
console.groupEnd();

///Circulo
console.group("Circulo");


function diametro(radio)
{return radio*2;}

function perimetroCirculo (radio) {return Math.PI* diametro(radio);}
console.log("El perimetro del Circulo es "+perimetroCirculo);
function areacirculo (radio) {return (radio*radio)*Math.PI;}
console.log("El area del Circulo es "+areacirculo);
console.groupEnd();

function calcularPerimetroCuadrado()
{
    let lado =document.getElementById("cuadrado").value;
    alert(perimetrocuadrado(lado));
}

function calcularAreaCuadrado()
{
    let lado =document.getElementById("cuadrado").value;
    alert(areacuadrada(lado));
}

function calcularPerimetroTriangulo()
{
    let lado1=document.getElementById("triangulo1").value;
    let lado2=document.getElementById("triangulo2").value;
    let base =document.getElementById("base").value;
    alert(perimetrotriangulo(lado1,lado2, base));
}

function calcularAreaTriangulo()
{
    let base =document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    alert(areatriangulo(base, altura));
}

function calcularPerimetroCirculo()
{
    let radio=document.getElementById("circulo").value;
    alert(perimetroCirculo(radio));
}

function calcularAreaCirculo()
{
    let radio=document.getElementById("circulo").value;
    alert(areacirculo(radio));
}