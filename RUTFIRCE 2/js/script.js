

const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const total = document.querySelector("#preciototal");

let itemsCarrito = [];
let precioTotal = 0;

let itemsGuardados = localStorage.getItem("carrito");
if(itemsGuardados) {
    itemsCarrito = JSON.parse(itemsGuardados);
    for(let item in itemsCarrito) {
        precioTotal += itemsCarrito[item].precio;
    }
    visulizarProductos();
}

function visulizarProductos(){
    lista.innerHTML = ""
    for (let i in itemsCarrito) {
        lista.innerHTML +=`<td><img src="${itemsCarrito[i].imagen}"width=100></td>
        <td>${itemsCarrito[i].titulo}</td>
        <td>$${itemsCarrito[i].precio}</td>
        <td><a herf="#" class="borrar" data-id="${itemsCarrito[i].id}"> X </a></td>`;
    }
    total.innerHTML = "$" + precioTotal;
}


cargarEventListeners();

function cargarEventListeners(){
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
    elementos1.addEventListener("click", comprarElemento);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: parseInt(elemento.querySelector(".precio").textContent.slice(1)),
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    itemsCarrito.push(elemento);
    precioTotal += elemento.precio;
    visulizarProductos();
    localStorage.setItem("carrito", JSON.stringify(itemsCarrito));
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')){
        let itemEliminado = itemsCarrito.splice(e.target.parentElement.parentElement.rowIndex-1, 1)[0];
        precioTotal -= itemEliminado.precio;
        visulizarProductos();
        localStorage.setItem("carrito", JSON.stringify(itemsCarrito));
    }
}

function vaciarCarrito(){
    itemsCarrito = [];
    precioTotal = 0;
    visulizarProductos();
    localStorage.setItem("carrito", JSON.stringify(itemsCarrito));
    return false;
}
//-------------------------------------------------