

const carteleraPeliculas = async function () {
    try {
    
    const respond = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b9497f6dddc3b0606f3559d28ee7629a")
    const pelicula = await respond.json()
   
    let arrPeliculas= [];

    

    // const generoPeli = await (await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b9497f6dddc3b0606f3559d28ee7629a")).json()
   
    // console.log(generoPeli.genres);
    // console.log(`El genero ${generoPeli.genres[0].name} su ID es ${generoPeli.genres[0].id}`);


    // console.log(pelicula.results[0].genre_ids);


    let resultados = pelicula.results;
        resultados.forEach((pelicula) => {
        arrPeliculas.push(pelicula)
        console.log(pelicula.title); 
    });

    localStorage.setItem("listadoPeliculas",JSON.stringify( arrPeliculas))
    
console.log(resultados)

    let img = document.querySelectorAll(".grid img");
    let tituloP= document.querySelectorAll(".grid p");
        for (let i = 0; i < 6; i++) {
            tituloP[i].innerHTML= resultados[i].title 
             
        }

        for (let i = 0; i < 6; i++) {
            img[i].src = `https://image.tmdb.org/t/p/w500${pelicula.results[i].poster_path}`;
            
        }

    } catch(error){
        console.log(error);
    }

}

carteleraPeliculas()