var Abigail = {
    nombre :'Abigail',
    apellido : 'Alvarado',
    edad:21,
    peso:75
}

console.log(`Al inicio del año ${Abigail.nombre}, pesa ${Abigail.peso.toFixed(1)} kg `);


const AumentaPeso = (persona) =>{
    persona.peso += 0.2;
}

const Adelgazar = (persona) =>{
    persona.peso -= 0.2;
}



for(i=1; i<=365; i++){
    var random = Math.random()
    if(random < 0.25){
        //aumenta de peso
        AumentaPeso(Abigail)

    } else  if(random < 0.50 ){
        //Baja de peso
        Adelgazar(Abigail)
    } else{
        //No pasa nada 
    }
}
console.log(`Al final del año ${Abigail.nombre}, pesa ${Abigail.peso.toFixed(1)} kg `);