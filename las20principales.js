console.log(isLogged)
console.log(isAdm)


let pagina = 1;
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");

btnSiguiente.addEventListener("click", function () {
    if (pagina<=1000) {
        pagina++;
        cargarBDPeliculas();
    }
})
btnAnterior.addEventListener("click", function () {
    if (pagina > 1) {
        pagina--;
        cargarBDPeliculas();
    }
})  


// ----------------------fetch con las peliculas por genero-------------------------------
const generoPeli = async function () {
    try{
        const respondGender = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b9497f6dddc3b0606f3559d28ee7629a`);
        const generoPeli = await respondGender.json();
        //console.log(generoPeli.genres);//esto es un array
        //console.log(`PRUEBA: ID: ${generoPeli.genres[0].id} name: ${generoPeli.genres[0].name}`)
        
    } catch (error){
        console.log(error);
    }
}
generoPeli();

const pintarPeliculas  = function() {

    const misPeliculas = JSON.parse(localStorage.getItem("peliculas"))
   
    // let generosos = datosPeli.results.filter((pelicula) => {
    //     return pelicula.genre_ids.includes(28)//28 es el id para el genero accion
    // });
    // console.log(generosos)//imprime las peliculas de accion con id 28

    let todasPeliculas = "";

    let buttons = ""; 
    if(isLogged) {
        console.log("VAMOSS")
        if(isAdm) {
            buttons = `<button class="botonAdm">botón Adm</button>`  
        } else {
            buttons = `<button class="botonUsuario">botón usuario</button>`
        }
    }
    
    misPeliculas.forEach(pelicula => {
        todasPeliculas += 
        `<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
            
                <h3 class="titulo">${pelicula.title}</h3>
                ${buttons}
            </div>`
    });

    document.querySelector("#contenedor").innerHTML = todasPeliculas

    document.querySelectorAll('#contenedor .botonUsuario').forEach((boton) => {

        boton.addEventListener('click', function(e) {

           // e.currentTarget.parentNode.style.display = 'none'

        })
    })  
}
pintarPeliculas()

/*--------------------seleccion de peliculas-------------------*/
let movies = JSON.parse(localStorage.getItem("pelicula"));
console.log(movies);//peliculas 

//agregar propiedad "enCartelera: true;"
const moviesCar = movies.map((movie)=> {
    
    
    return {...movie, enCartelera: true}
    
}) 
console.log(moviesCar);

let selectListaPelis = document.querySelector(".listaPeliculas");
let listaMovie = "";

for (let i = 0; i < movies.length; i++) {
    listaMovie += `<option value="">${movies[i].title}</option>`
}
selectListaPelis.innerHTML = listaMovie




