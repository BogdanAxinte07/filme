import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import  Container  from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getMovieCategoriesEndpoint } from "../api/endpoints";
import { getMovieList } from "../api/adaptors";
import MovieCardList from "../components/MovieCardList";

function NewMovie(){
    const {typeId} = useParams();
    //generam endpointul pt tipul curent
    const newMovieEndpoint = getMovieCategoriesEndpoint(typeId);
    const newMovie = useFetch(newMovieEndpoint)
    //adaptam datele
    const adaptedMovieList = getMovieList(newMovie)
    let title =""
    switch (typeId){
        case "movie":
            title = "Filme"
            break;
            case "series":
            title = "Seriale"
            break;
            default:
                break;
    }

    return(
        <Layout>
            <Container>
                <h1>{title}</h1>
              <MovieCardList movieList={adaptedMovieList}/>
            </Container>
        </Layout>
    )
}

export default NewMovie;