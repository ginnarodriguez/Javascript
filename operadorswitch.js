const ciudadDestino = "pereira";
const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];
let valorPasaje = 0;

console.log(`Verificando pasajes para: ${ciudadDestino}`);
if (ciudades.indexOf(ciudadDestino) >= 0){
    //condicion con if
    /*if (ciudadDestino == "Bogotá"){
        valorPasaje = 500;
    }else if (ciudadDestino == "Medellín"){
        valorPasaje = 400;
    }else if (ciudadDestino == "pereira"){
        valorPasaje = 438;
    }else if (ciudadDestino == "Soacha"){
        valorPasaje = 200;
    }*/
    //condicion con switch
    switch(ciudadDestino){
        case "Bogotá":
            valorPasaje = 500;
            break;
        case "Medellín":
            valorPasaje = 400;
            break;
        case "pereira":
            valorPasaje = 438;
            break;
        case "Soacha":
            valorPasaje = 200;
            break;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`)
}else{
    console.log(`Ciudad no disponible para viajar`)
}



