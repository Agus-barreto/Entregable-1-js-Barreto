window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        headers.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})

window.addEventListener('load', ()=>{
    visulizarProductos();
    contenedorCompra.classList.add("none")
})

function visulizarProductos(){
    contenedor.innerHTML = ""
    for (let i = 0; i< visulizarProductos.length; i++)
    if (productos[i].existencia > 0){
    if(productos [i].existencia > 0){
        contenedor.innerHTML +=`<div>
        <img src="${productos[i].urlImagen}">
        <div class="informacion">
        <p>${productos[i].nombre}</p>
        <p class="precio">$${producto[i].valor}</p>
        <button onclick= comprar(${i})>Comprar</button>
        </div>
        </div>`
    }

    }
    else{
    contenedor.innerHTML +=`<div>
    <img src="${productos[i].urlImagen}">
    <div class="informacion">
    <p>${productos[i].nombre}</p>
    <p class="precio">$${producto[i].valor}</p>
    <p class="soldOut">Sold Out</p>
    </div>
</div>`
    }
}

function comprar(indice){
    lista.push({nombre: productos[indice].nombre, precio: productos[indice.valor]})

    let van = true
    let i = 0
    while(van==true){
        if(productos[i].nombre == producto [indice].nombre){
            productos[i].existencia -= 1
            if(productos[i].existencia == 0){
                visulizarProductos()

            }
            van = false
        }
        guardarAlmacenamientoLocal("productos", productos)
        i+= 1
    }
    numero.innerHTML= lista.length
    numero.classList.add("diseñoNumero")
    console.log(productos)
    console.log(lista)
    return lista
}
carrito.addEventListener("click",function(){
    body.styles.overflow="hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra ')

})

function mostrarElementosLista(){
    productosCompra.innerHTML= ""
    valortotal = 0
    for(let i = 0; i < lista.length; i++){
    productosCompra.innerHTML += `  <div class="img">
    <button onclick= eliminar(${i}) class="botonTrash"></button>
    <img src="img/img-gamulan.jpg" alt="">
    <p>${lista[i].nombre}</p>
  </div>
  <p>${lista[i].precio}</p>
</div>`
valortotal+=parseInt(lista[i].precio)
    }
    total.innerHTML= `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    let van = true
    let i = 0
    while(van==true){
        if(productos[i].nombre == lista [indice].nombre){
            productos[i].existencia += 1
            lista.splice(indices,1)
            }
            van = false
        }
        i+= 1
    
    numero.innerHTML= lista.length
    if(lista.length==0){
        numero.classList.remove("diseñoNumero")   
    }
    visualizarProductos()
    mostrarElementosLista()
}

x.addEventListener("click", function(){
    body.styles.overflow="auto"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra ')
})
