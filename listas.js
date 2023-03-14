const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");
//console.log(ciudadesDisponibles);

 //definir una lista de manera abreviada
 const paisesDisponibles = ["Colombia", "Peru", "Chile" ]
 //console.log(paisesDisponibles);

paisesDisponibles.push("Uruguay");//agrega al final
//console.log(paisesDisponibles);

 paisesDisponibles.unshift("Ecuador"); //ingresa al inicio de la lista
//console.log(paisesDisponibles);
 
//para imprimir dato de x posición
//console.log(paisesDisponibles[2]);

//Para eliminar elementos de la lista y agregar: primero la posición y cuántos a eliminar
paisesDisponibles.splice(0,1, "Venezuela", "Paraguay");
//console.log(paisesDisponibles);//los coloca en la posición donde se estan eliminando

//para conocer el tamaño de la lista
const cantidadPaises = paisesDisponibles.length;
//console.log(cantidadPaises);

//remover el primer elemento
paisesDisponibles.shift();
//console.log(paisesDisponibles);

//remover el ultimo elemento
paisesDisponibles.pop();
//onsole.log(paisesDisponibles);

//Filtro de elementos
const paisesFiltrados = paisesDisponibles.filter((e) => e == "Colombia");
//console.log(paisesFiltrados);
const paisesFiltradosCan = paisesDisponibles.filter((e) => e.length > 6);
//console.log(paisesFiltradosCan);

//cambia una lista a una cadena de caracteres y se separan por lo que se quiera colocar
//console.log(paisesDisponibles.join(" - "));

//ordenar una lista y la modifica 
paisesDisponibles.sort();
console.log(paisesDisponibles);

//conocer la posición
console.log(`Perú están en la posición ${paisesDisponibles.indexOf("Peru")}`);

//unificar dos listas
const ciudades = ["Bogotá", "Medellín", "pereira", "Soacha"];
const ciudadesYPaises = paisesDisponibles.concat(ciudades); //se hace copia de la lista
console.log(ciudadesYPaises);


