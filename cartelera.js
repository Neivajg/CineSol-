

const carteleraPeliculas = async function () {
    try {
    
    const respond = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b9497f6dddc3b0606f3559d28ee7629a")
    const pelicula = await respond.json()

        for (let i = 0; i < 6; i++) {
            console.log(pelicula.results[i].poster_path)
            
        }

    } catch(error){
        console.log(error);
    }

}

carteleraPeliculas()