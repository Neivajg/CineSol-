const usuarios = [
    {email: "usuario1@duello.com", password: "usuario1", rol: "trabajador", favoritas:[]},
    {email: "usuario2@duello.com", password: "usuario2", rol: "trabajador"},
    {email: "usuario3@duello.com", password: "usuario3", rol: "trabajador"},
    {email: "usuario4@duello.com", password: "usuario4", rol: "trabajador"},
    {email: "usuario5@duello.com", password: "usuario5", rol: "trabajador"},
    {email: "usuario6@duello.com", password: "usuario6", rol: "trabajador"},
    {email: "usuario7@duello.com", password: "usuario7", rol: "trabajador"},
    {email: "usuario8@duello.com", password: "usuario8", rol: "trabajador"},
    {email: "usuario9@duello.com", password: "usuario9", rol: "trabajador"},
    {email: "usuario10@duello.com", password: "usuario10", rol: "trabajador"},
    


    {email: "usuario11@duello.com", password: "usuario11", rol: "admin"},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin"},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin"},
]

localStorage.setItem("usuarios", JSON.stringify(usuarios));

const loggedUser = JSON.parse(localStorage.getItem("usuarioLogeado"));

isLogged = (loggedUser) ? loggedUser : false;

if (isLogged) {
    document.getElementById("areaRegistro").style.display = "none";
    document.getElementById("areaUsuario").style.display = "block";
    document.getElementById("nombreUsuario").innerHTML = loggedUser.email  ;
}

const allUsers = JSON.parse(localStorage.getItem("usuarios"));

const loginBtn = document.querySelector('#login')

loginBtn.onclick = function(e) {
    e.preventDefault()
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')

    const currentUser = allUsers.find((user) => user.email === emailInput.value && user.password === passwordInput.value)

    if (currentUser) {
        localStorage.setItem("usuarioLogeado", JSON.stringify(currentUser));

        document.getElementById("areaRegistro").style.display = "none";
        document.getElementById("areaUsuario").style.display = "block";

    } else {
        console.log("NO HAY USER")
    }   
} 

document.getElementById("deslogear").onclick = function() {
    localStorage.removeItem("usuarioLogeado");

    document.getElementById("areaRegistro").style.display = "block";
    document.getElementById("areaUsuario").style.display = "none";
}


document.getElementById("favorito").onclick = function(){
    // document.getElementById("peliculasFavoritas").innerHTML=;
}