//operadores de comparación
const ciudadDestino = "Soacha";
const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];

//if
if (ciudades.indexOf(ciudadDestino)>= 0){
    console.log("Pasaje disponble para venta");
}else{
    console.log("Ciudad no disponible para viajar");
}

const valorPasaje = 1000;

if (valorPasaje === 1000){//pueden ser dos o tres iguales pero los tres es más estricto
    console.log("El pasaje vale 1000")
}

//operadores logidos y(and: &&) o(or: ||) no(not)
