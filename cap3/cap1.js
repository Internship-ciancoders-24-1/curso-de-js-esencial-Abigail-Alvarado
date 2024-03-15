var Abigail = {
    nombre :'Abigail',
    apellido : 'Alvarado',
    edad:21,
    ingeniero :true,
    cocinero:false,
    guitarrista:false,
    marimba:true
}

function imprimirProfesiones(persona){
    console.log(`Si eres, ${persona.nombre}: `);
    if(persona.ingeniero === true){
        console.log('Si eres inge')
    }
    else {
        console.log('No eres inge :(')
    }
    if (persona.cocinero) {
        console.log('si eres Cocinero :(')
    } else {
        console.log('No eres Cocinero  :(')
    }
    if (persona.marimba) {
        console.log('Si eres marimbista')
    } else {
        console.log('No eres Marimbista :(')
    }
}

const mayoriaEdad = 18

const esMayor = (persona) => {
    return persona.edad >= mayoriaEdad
}

console.log(mayoriaEdad)

function MayorEdad(persona){
    if(esMayor(persona)){
        console.log(`${persona.nombre}, si es mayor de edad `);
    }
    else{
        console.log(`${persona.nombre}, no es mayor de edad `);
    }
}

imprimirProfesiones(Abigail)
MayorEdad(Abigail)

