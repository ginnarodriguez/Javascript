const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];
const precioCiudad = [500, 400, 380, 200];
const datos = [ //para hacer un mapa, en este caso lista de mapas
    {
        "ciudad": "Bogotá",
        "precio": 500
    },
    {
        "ciudad": "Medellín",
        "precio": 400
    },{
        "ciudad": "Pereira",
        "precio": 380
    },{
        "ciudad": "Soacha",
        "precio": 200
    },
]
const presupuesto = 300;
//for valor inicial para un valor final 


let = ciudadSeleccionada = " ";
 for (let i = 0; i < datos.length && ciudadSeleccionada == " "; i++) {
    
    if (datos[i].precio < presupuesto){
        ciudadSeleccionada = datos[i].ciudad;
    }
    
 }


if (ciudadSeleccionada == " ")
    console.log("No tenemos pasajes disponibles");
else
    console.log("puedes comprar pasaje para " + ciudadSeleccionada);