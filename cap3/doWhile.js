/*var contador = 0;
const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

console.log(`Fui a ver si llovía ${contador} veces.`);
*/

var signo = prompt('Cuál es tu signo');
console.log(signo);

switch (signo.toLowerCase()) {
    case 'acuario':
        console.log("Prepárate para un período de crecimiento personal y profesional. Es hora de demostrar al mundo de lo que eres capaz.");
        break;
    case 'cancer':
        console.log("Hoy es un excelente día para poner en práctica tus proyectos personales. Confía en ti mismo y verás grandes resultados.");
        break;
    case 'leo':
        console.log("Deja de tratar de controlar todo a tu alrededor. Aprende a fluir con la vida y verás cómo las cosas se alinean a tu favor.");
        break;
    case 'virgo':
        console.log("Es momento de planificar nuevos proyectos y metas. No temas avanzar y persigue aquello que te hace sentir realizado.");
        break;
    case 'aries':
        console.log("Hoy es un buen día para demostrar tu generosidad y hospitalidad. Aprovecha para agasajar a tus seres queridos.");
        break;
    case 'tauro':
        console.log("No temas al esfuerzo y la persistencia. Recuerda que la constancia es clave para alcanzar tus objetivos.");
        break;
    case 'geminis':
        console.log("Trabaja en fortalecer tu confianza en ti mismo. Una actitud positiva te ayudará a superar cualquier obstáculo.");
        break;
    case 'libra':
        console.log("Vive cada momento con intensidad y pasión. Confía en tus fuerzas para superar cualquier desafío que se presente.");
        break;
    case 'escorpio':
        console.log("Tu energía y pasión te llevarán lejos. Avanza con determinación y lograrás alcanzar tus metas.");
        break;
    case 'sagitario':
        console.log("Este es un momento para destacarte socialmente. Aprovecha las oportunidades que se presenten para crecer y avanzar.");
        break;
    case 'capricornio':
        console.log("Apuesta por tu crecimiento personal y profesional. Planifica tu futuro con confianza y determinación.");
        break;
    case 'piscis':
        console.log("Hoy es un día para relajarte y explorar nuevas posibilidades. Atrévete a salir de tu zona de confort.");
        break;
    default:
        console.log("Tu signo no está en la lista.");
        break;
}
