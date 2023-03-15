const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];
const precioCiudad = [500, 400, 380, 200];
const presupuesto = 390;
let i = 0;
//while repite 0 o más veces
//dowhile 1 o más veces

while (precioCiudad[i] > presupuesto && i < ciudades.length){
    i++;    
}
if (i==ciudades.length)
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudades[i])
