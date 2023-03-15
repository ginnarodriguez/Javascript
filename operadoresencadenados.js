const ciudadDestino = "pereira";
const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];
let edadPasajero = 14;
let estaAcompanado = false;

if (edadPasajero >= 18 || estaAcompanado){
    if (ciudades.indexOf(ciudadDestino) >= 0){
        console.log("Pasaje disponible para la venta");
   } else{
        console.log("Ciudad no disponible para viajar");
   }
}else{
    if (edadPasajero >= 16 && ciudadDestino == "pereira"){
        console.log("Pasaje disponible para la venta ")
    }else{
        console.log("Pasajero no cumple las reglas")
}
    }
    