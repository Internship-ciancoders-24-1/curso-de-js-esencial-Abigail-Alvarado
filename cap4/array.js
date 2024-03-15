var maria = {
    nombre: 'Maria',
    apellido: 'Lopez',
    altura: 1.62,
}

var juan = {
    nombre: 'Juan',
    apellido: 'Garcia',
    altura: 1.79,
}

var ana = {
    nombre: 'Ana',
    apellido: 'Martinez',
    altura: 1.73,
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Hernandez',
    altura: 1.81,
}

var luisa = {
    nombre: 'Luisa',
    apellido: 'Flores',
    altura: 1.65,
}

var diego = {
    nombre: 'Diego',
    apellido: 'Ruiz',
    altura: 1.88,
}

var personas = [maria, juan, ana, pedro, luisa, diego]

console.log(personas)

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura * 100}cm`)
}

var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
})

console.log(personasAltas)

var personasCms = personas.map(function (persona) {
    return {
        ...persona,
        altura: persona.altura * 100
    }
})

console.log(personasCms)
