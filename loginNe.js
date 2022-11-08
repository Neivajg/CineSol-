


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