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




//------------------------------fetch con todas las peliculas populares
const cargarBDPeliculas = async function () {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9497f6dddc3b0606f3559d28ee7629a&page=${pagina}`);
        const datosPeli = await respuesta.json()
        console.log(datosPeli.results);//pelicula (solo me muestra las 20 primeras)
        
        localStorage.setItem("peliculas", JSON.stringify(datosPeli.results))

        if (respuesta.status === 200) {
            console.log(`Promesa recibida`);        
        } else if(respuesta.status === 401){
            console.log(`La key de Pipe no es correcta`)
        } else if (respuesta.status === 404){
            console.log(`No existe esa pelicula`)
        } else{
            console.log(`Error desconocido`)
        }
        
    } catch (error){
        console.log(error);
    }
}
//cargarBDPeliculas();