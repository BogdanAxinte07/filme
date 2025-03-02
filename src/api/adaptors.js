export function getMovieList(apiResponse){
    if(!apiResponse || !apiResponse.response){
      return [];
    }
    //extragem datele din raspunsul api ului
    const rawMovieList = apiResponse.response.results;
    //mapam prin date si le transformam cum avem nevoie
    const adaptedMovieList = rawMovieList.map((movie)=>{
        return{
            id: movie.id,
            thumbnail: movie.fields.thumbnail,
            title: movie.field.headline,
            description: movie.fields.trailText,
        }
    })

    return adaptedMovieList;
}

export function getMovieDetails(apiResponse){
    if(!apiResponse || !apiResponse.response){
        return {};
    }
        const rawMovieDetails = apiResponse.response.content
        const adaptedMovieDetails ={
            date: rawMovieDetails.webPublicationDate,
            title: rawMovieDetails.fields.headline,
            description: rawMovieDetails.fields.trailText,
            image: rawMovieDetails.fields.main,
            content: rawMovieDetails.fields.body,
            author: rawMovieDetails.fields.byline,
            thumbnail: rawMovieDetails.fields.thumbnail
        };
        return adaptedMovieDetails;
      
}