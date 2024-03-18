//Siguen siendo prototipos
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
        if(fn){
            fn(this.nombre, this.apellido, true); // Corregido el paso de parámetros
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`No sabía que eras desarrollador/a`);
    }
}

var Abigail = new Desarrollador('Abigail', 'Alvarado', 1.59);
var carla = new Persona('Carla', 'Alvarado', 1.59);
Abigail.saludar(responderSaludo);
carla.saludar(responderSaludo);