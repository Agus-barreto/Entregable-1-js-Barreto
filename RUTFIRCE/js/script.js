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
//variable
let prendajeans1 = "Wide Leg Recto";
let prendajeans2 = "Jeans Chupin";
let prendajeans3 = "Jeans Wide Leg";

const nombredetienda = "RutFirce"

//---------------------------------------------------------
//arrays
const producto1 ={
    nombre:"Jeans Wide Leg Recto",
    codigo: V15,
    precio:1190,
}
console.log(producto1.nombre) ;'Jeans Wide Leg Recto'

const producto2 = {
    nombre: "Jeans chupin", 
    codigo: v16,
    precio: 1090,
}
console.log(producto2.nombre);  'Jeans Chupin'

const producto3 ={
    nombre: "Jeans Wide Leg", 
    codigo: v17,
    precio: 990,
}
console.log(producto3.nombre) ; 'Jeans Wide Leg'

const productos = ['Jeans Wide Leg Recto','Jeans Chupin', 'Jeans Wide Leg']

for (let i = 0; i < productos.length; i++){
    console.log(productos[i])
}



//----------------------------------------------------------
//ciclos
for(let i=0;i<9;i++){
    console.log('Interación Nº ' + i);
}

//cantidad de jeans wide leg recto

for(let i=1;i<=6;i++){
    if(i==5){
        console.warn("Interracion interrumpida en el ciclo", i , "por la capsula BREAK.")
        break
    }
    alert(i);
}

//----------------------------------------------------------

//suma de pedidos
function sumar(){
    const primeraprenda = Number(prompt(1190))
    const segundaprenda = Number(prompt(1090))
return 1190 + 1090
}

let resutado =2280

function sumar (prendajeans1,prendajeans2){
    resultado= prendajeans1+prendajeans2;
}
        
function mostrar(mensaje){
    console.log(mensaje);
}

console.log (sumar)
console.log (sumar())


