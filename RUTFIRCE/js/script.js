const pedirsiono = confirm("¿Querés estar día con nuestras novedades?.")
console.log(pedirsiono)
console.log(typeof pedirsiono)
ingreso=true

//------------------------------------------------------------

//Login

const fondo = document.querySelector(".fondo");
const loginlink =document.querySelector(".login-link");
const registrarlink= document.querySelector(".registar-link");
const btn = document.querySelector(".btn-I");
const iconocerrar = document.querySelector(".icono-cerrar");

registrarlink.addEventListener("click", () => {
    fondo.classList.add('active');
});

loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
});

btn.addEventListener("click", () => {
    fondo.classList.add('active-btn-I');
});

iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn-I')
});

//-----------------------------------------------------------------------



