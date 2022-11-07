

const carteleraPeliculas = async function () {
    try {
    
    const respond = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b9497f6dddc3b0606f3559d28ee7629a")
    const pelicula = await respond.json()

    const generoPeli = await (await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b9497f6dddc3b0606f3559d28ee7629a")).json()
   
    console.log(generoPeli.genres);
    console.log(`El genero ${generoPeli.genres[0].name} su ID es ${generoPeli.genres[0].id}`);


    console.log(pelicula.results[0].genre_ids);
    let resultados = pelicula.results;
    resultados.forEach((pelicula) => {
        console.log(pelicula.title); 
    });

    let img = document.querySelectorAll(".grid img");

        for (let i = 0; i < 6; i++) {
            // console.log(pelicula.results[i].poster_path)

            img[i].src = `https://image.tmdb.org/t/p/w500${pelicula.results[i].poster_path}`;
            
        }

    } catch(error){
        console.log(error);
    }

}

carteleraPeliculas()