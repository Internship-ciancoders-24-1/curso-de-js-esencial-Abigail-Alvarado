var nombre = 'Abigail', apellido = 'Alvarado'
//var edad =  21
//console.log('Hola '+ nombre+ ' ' + apellido, 'tengo  ' + edad +'años' )

var nombreMayus = nombre.toUpperCase()
var apellidoMinus = apellido.toLocaleLowerCase()

console.log(nombre+ ' ' + apellido)
console.log(nombreMayus + ' ' + apellidoMinus)

var primeraLetra = nombre[0]
console.log(primeraLetra)


var edad = 21 
var peso = 75

console.log((peso= peso-2))

precioVino = 200.3

//Refondear el total 
var total = Math.round(precioVino * 100 * 3 )/ 100
console.log(total)

//dos decimales despues del resultado 
var totalStr = total.toFixed(2)
console.log(totalStr)

//pasar a decimal de nuevo 
var total3 = parseFloat(totalStr)
console.log(total3)

////////////////////////////////////////////////////////////////
var pizza = 8
var personas = 2 
var cantidad = pizza / personas
console.log('Los pedazos de pizza por persona son: ' + cantidad)