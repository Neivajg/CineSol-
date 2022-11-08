const usuarios = [
    {email: "usuario1@duello.com", password: "usuario1", rol: "trabajador", favoritas:[]},
    {email: "usuario2@duello.com", password: "usuario2", rol: "trabajador",favoritas:[]},
    {email: "usuario3@duello.com", password: "usuario3", rol: "trabajador",favoritas:[]},
    {email: "usuario4@duello.com", password: "usuario4", rol: "trabajador",favoritas:[]},
    {email: "usuario5@duello.com", password: "usuario5", rol: "trabajador",favoritas:[]},
    {email: "usuario6@duello.com", password: "usuario6", rol: "trabajador",favoritas:[]},
    {email: "usuario7@duello.com", password: "usuario7", rol: "trabajador",favoritas:[]},
    {email: "usuario8@duello.com", password: "usuario8", rol: "trabajador",favoritas:[]},
    {email: "usuario9@duello.com", password: "usuario9", rol: "trabajador",favoritas:[]},
    {email: "usuario10@duello.com", password: "usuario10", rol: "trabajador",favoritas:[]},
    


    {email: "usuario11@duello.com", password: "usuario11", rol: "admin"},
    {email: "usuario12@duello.com", password: "usuario12", rol: "admin"},
    {email: "usuario13@duello.com", password: "usuario13", rol: "admin"},
]

// localStorage.setItem("usuarios", JSON.stringify(usuarios.rol));




if (isLogged) {
    document.getElementById("areaRegistro").style.display = "none";
    document.getElementById("areaUsuario").style.display = "block";
    document.getElementById("nombreUsuario").innerHTML = loggedUser.email ;


    if (isAdm){
        document.querySelector(".nombreUsuario").innerHTML += "(ADM)"
        document.querySelector(".botonUsuario").style.display="inline"
    }else{
        document.querySelector(".botonAdm").style.display="inline"
    }

}

const allUsers = JSON.parse(localStorage.getItem("usuarios"));

const loginBtn = document.querySelector('#login')

loginBtn.onclick = function(e) {
    e.preventDefault()
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')

    const currentUser = allUsers.find((user) => user.email === emailInput.value && user.password === passwordInput.value)
    console.log(currentUser)
    if (currentUser) {
        localStorage.setItem("usuarioLogeado", JSON.stringify(currentUser));

        document.getElementById("areaRegistro").style.display = "none";
        document.getElementById("areaUsuario").style.display = "block";

        isAdm = loggedUser && loggedUser.rol === "admin" 
        
        if (isAdm){
            document.querySelector(".nombreUsuario").innerHTML += "(ADM)"
            document.querySelector(".botonUsuario").style.display="inline"
        }else{
            document.querySelector(".botonAdm").style.display="inline"
        }



    } else {
        console.log("NO HAY USER")
    }   
} 

document.getElementById("deslogear").onclick = function() {
    localStorage.removeItem("usuarioLogeado");

    document.getElementById("areaRegistro").style.display = "block";
    document.getElementById("areaUsuario").style.display = "none";
}


// document.getElementById("favorito").onclick = function(){
//     document.getElementById("peliculasFavoritas").innerHTML= ;
// }