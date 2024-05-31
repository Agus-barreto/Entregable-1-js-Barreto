

document.getElementById("btnRedireccionar").addEventListener("click", function(){
    window.location.href = "../pages/carrito.html";
})

document.getElementById("comprar").addEventListener("click", function(){
    window.out;
})

document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    e.preventDefault();
    if(e.target.classList.contains("comprar")){
        ealse
    }
    Compra.addEventListener('click', function() {
        // Mostrar el mensaje de agradecimiento
        alert('¡Gracias por tu compra!');
    });

    // Validar campos (ejemplo de validación simple)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    if (name && email && phone && address  && payment) {
        // Mostrar mensaje de confirmación en el modal
        const modal = document.getElementById('confirmationModal');
        modal.classList.remove('hidden');
        modal.style.display = "block";

        // Cerrar el modal cuando se hace clic en el botón de cerrar
        document.getElementById('closeButton').onclick = function() {
            modal.style.display = "none";
        }

        // Cerrar el modal cuando se hace clic fuera del contenido del modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Ocultar formulario
        document.getElementById('purchaseForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});





// Inicio de sesión
const correoElectronico = document.getElementById("email")
const ingreseSuContraseña = document.getElementById("password")

//----------------------------------------------

//Registro 

const nombre = document.getElementById ("neme")
const apellido = document.getElementById("last-name")
const direccionDeCorreoElectronico = document.getElementById("email")
const contraseña = document.getElementById("password")

