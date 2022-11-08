let pagina= 1;
const btnAnterior =document.getElementById('btnAnterior');
const btnSiguiente =document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', function() {
    if (pagina<=1000) {
     pagina++;
     cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', ()=>{
    if (pagina > 1) {
     pagina--;
     cargarPeliculas();
    }
});

//Siempre que se utiliza async y await , utilizar TRY y CATCH
const cargarPeliculas= async() =>{
    //Intenta ejecutarme ese codigo 
      try{
          const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5dfa558924d0c803dbef7f8540472232&language=es-ES&page=${pagina}`);
          
          if(respuesta.status === 200){
              const datos = await respuesta.json();
  
              let peliculas='';
              datos.results.forEach(pelicula => {
                   peliculas +=  
                   `<div class="pelicula"><img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                   <h3 class="titulo">${pelicula.title}</h3> 
                   </div>`
                    
                  console.log(pelicula.genre_ids)
                
              });
  
              document.getElementById('contenedor').innerHTML = peliculas
  
          }else if (respuesta.status === 401){
              console.log("La Llave es incorrecta")
          }else if (respuesta.status === 404){
              console.log("La Pelicula: No Exite")
          }else{
              console.log("No sabemos que ocurrio")
          }
      }catch(error){// Sihay algun error CAtch va a intentar capturarme ese error
  }
  }
  
  cargarPeliculas()
