

function promedio(lista){

// let sumalista = 0;
// for(let i=0;i<lista.length;i++){
//     sumalista=sumalista+lista[i];
// }

const sumalista = lista.reduce(
    (valoracumulado=0,element)=>{
        return valoracumulado+element;
    }
);

let promedio = sumalista/lista.length;
return promedio;
}

function mediana(lista){
    const mitadlista = parseInt(lista.length/2);
    lista = lista.sort();
    if(lista.length%2===0)
    {
        const element1 = lista[mitadlista-1];
        const element2 = lista[mitadlista];
        const prom = parseInt((element1+element2)/2);
        return prom;
    }else{
        return lista[mitadlista];
    }
}

function moda(lista){
 const listacount={};

 lista.map(
     (elemento)=>{
         if(listacount[elemento]){
            listacount[elemento]+=1;
         }else{
         listacount[elemento] = 1;
         }
     }
    
 );

 const listaArray = Object.entries(listacount).sort(
     (valoracumulado, nuevovalor)=>{
        return valoracumulado[1]-nuevovalor[1];
     }
 );

 return listaArray[listaArray.length-1];
}

function mediaponderada(lista)
{
    let sumacreditos = 0;
    let sumadivisora = 0;
    lista.forEach(element => {
        sumacreditos+=(element[0]*element[1]);
        sumadivisora+=element[1];
    });
    return sumacreditos/sumadivisora;
}
16