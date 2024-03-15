var nombre = 'Abigail '
var edad = 21

function ImprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`);

}

ImprimirEdad(nombre,edad)



////////////////////////////////////////////////////////////////
//Objetos
var Abigail = {
    nombre: 'Abigail',
    apellido: 'Alvarado',
    edad: 21
}


function ImprimirMayus({nombre, apellido, edad }){
    console.log(nombre.toUpperCase())
    console.log(apellido.toUpperCase())
    console.log(edad)
}

ImprimirMayus(Abigail)


////////////////////////////////////////////////////////////////////
var Abigail = {
nombre: 'Abigail',
apellido: 'Alvarado',
edad: 21
}


function ImprimirMayus(persona){
var {nombre} = persona
console.log(nombre.toUpperCase())
}

ImprimirMayus(Abigail)

function imprimirNombreEdad(persona) {

    var { nombre } = persona;
    var { edad } = persona; 
    console.log('Hola soy ' + nombre.toUpperCase() + ' y tengo ' + edad + ' años. ');
}
imprimirNombreEdad(Abigail)

/////////////////////////////////////////////////////////////////////
function cumple(persona){
    return {
        ...persona,
        edad : persona.edad+1
    }
}

cumple('Tiene '+Abigail)

