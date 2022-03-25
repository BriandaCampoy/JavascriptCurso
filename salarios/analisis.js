const salariosmx=mexico.map(
    (persona)=>{
        return persona.salary;
    }
);

const salariosmxSorted = salariosmx.sort(
    (salaryA,salaryB)=>{
        return salaryA-salaryB;
    }
); 

function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length/2);

    if(lista.length%2==0){
        const mitad1 = lista[mitad-1];
        const mitad2 = lista[mitad]; 
        return (mitad1+mitad2)/2;
    }else{
        return lista[mitad];
    }
}

function medianaTop()
{
    const splice1 =(salariosmxSorted.length*90)/100;
    const splicecount= salariosmxSorted.length -splice1;
    const salariostop10 = salariosmxSorted.splice(splice1,splicecount);
    return salariostop10;
}

function medianaAntiTop()
{   
    const splice1 =(salariosmxSorted.length*90)/100;
    const splicecount= salariosmxSorted.length -splice1;
    const salariostop10 = salariosmxSorted.splice(0,splicecount);
    return salariostop10;
}

//const medianaGeneral =medianaSalarios(salariosmxSorted); 
console.log(salariosmxSorted);
console.log(medianaSalarios(salariosmxSorted), medianaTop(),medianaAntiTop());