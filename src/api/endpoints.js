const API_KEY = "1bad500d";

//functie care returneaza endpointul pt o anumita categorie de filme
 export function getMovieCategoriesEndpoint(
    type, 
    pageNumber = 1, 
    ){
     //query string
     const queryParams = `?apikey=${API_KEY}&page=${pageNumber}&type=${type}`
     //returnam link ul aferent api ul
     return `https://www.omdbapi.com/${queryParams}`
 }


 //functia are returneaza endpointul pt un anumit film 

 export function getMovieDetailsEndpoint(movieId){
    //construim query string
     const queryParams = `?apikey=${API_KEY}&i=${movieId}`
     //returnam link ul aferent
     return `https://www.omdbapi.com/${queryParams}`;
 }