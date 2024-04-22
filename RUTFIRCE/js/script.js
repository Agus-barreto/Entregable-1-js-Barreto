// Simulador de tienda de ropa web
// Log in

const pedirMail = prompt ("Registrate con tu mail para no perderte nuestras imperdibles ofertas.")
console.log(pedirMail)
console.log(typeof pedirMail)

function solicitarNombreyApellido() {
    const nombreyapellidoIngresado = prompt("Ingrese su Nombre y Apellido")
    alert("Bienvenido/a " + nombreyapellidoIngresado)
}
solicitarNombreyApellido()
    

const pedirsiono = confirm("Si sigues estas aceptando los terminos y condiciones.")
console.log(pedirsiono)
console.log(typeof pedirsiono)
ingreso=true
alert("Esperamos que disfrutes la recorrida por nuestro sitio web, estamos a las ordenes!")

//----------------------------------------------------------

let prendajeans1 = "Jeans Wide Leg Recto";
let prendajeans2 = "Jeans Chupin";
let prendajeans3 = "Jeans Wide Leg";

const tienda = "RutFirce"
//---------------------------------------------------------

//arrays
const productos = [prendajeans1,prendajeans2]
console.log(productos)

productos.push(prendajeans3)
console.log(productos)

for (let i = 0; i < productos.length; i++){
    console.log(productos[i])
}
//----------------------------------------------------------
 
//funcion 

const IVA = 0.22 
const IVAenprendas = precio => precio*IVA

const jeanschupin = IVAenprendas(1200)

console.log(jeanschupin)
