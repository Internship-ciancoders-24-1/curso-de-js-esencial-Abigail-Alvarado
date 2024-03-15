const Abigail = {
    nombre: 'Abigail',
    apellido: 'Alvarado',
    edad: 21,
    peso: 75
};

console.log(`Al inicio del año ${Abigail.nombre}, pesa ${Abigail.peso.toFixed(1)} kg`);

const aumentaPeso = (persona) => {
    persona.peso += 0.2;
};

const adelgazar = (persona) => {
    persona.peso -= 0.2;
};

const comeMucho = () => Math.random() < 0.3;
const deporte = () => Math.random() < 0.4;
let dias = 0;
const meta = Abigail.peso - 3;

while (Abigail.peso > meta) {
    if (comeMucho()) {
        aumentaPeso(Abigail);
    }
    if (deporte()) {
        adelgazar(Abigail);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${Abigail.nombre} bajó de peso.`);
