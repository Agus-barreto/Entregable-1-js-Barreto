
    let pedido = fetch ("../js/prenda.json");
    pedido.then((datos) => {
    return datos.json(); 
    }).then((prendas)=>{
        const catalogo = document.getElementById("catalogo");
        for (let i in prendas.productos){
            catalogo.innerHTML += `<div class="product">
            <img src="../${prendas.productos[i].img}" alt="">
            <div class="product-txt">
                <h3>${prendas.productos[i].nombre}</h3>
                <p class="precio">$${prendas.productos[i].precio}</p>
                <a href="#" class="agregar-carrito btn-2" data-id="${prendas.productos[i].id}">Agregar al Carrito</a>
            </div>
            </div>` 
        }
    })