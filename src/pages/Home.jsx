import React from "react"
import Layout from "../components/Layout";
import  Container  from "react-bootstrap/Container";
import {useFetch} from "../utils/hooks/useFetch";
import { getMovieCategoriesEndpoint } from "../api/endpoints";
import MovieCardList from "../components/MovieCardList";
import { getMovieList} from "../api/adaptors"
import { Link } from "react-router-dom";

function Home(){
    //generam endpointuri pt cat de filme
    const movieNewEndpoint = getMovieCategoriesEndpoint("movie", 1 ,8);
    const seriesNewEndpoint = getMovieCategoriesEndpoint("series", 1 ,8);

    //fetchuim datele
    let movieData = useFetch(movieNewEndpoint)
   let seriesData = useFetch(seriesNewEndpoint)
//adptam daele de la server la datele necesare
const adaptedMovieData = getMovieList(movieData)
const adaptedSeriesData = getMovieList(seriesData)

    return( 
        <Layout>
            <section className="movie my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Filme</h1>
                    <MovieCardList movieList={adaptedMovieData}/>
                    <p>Vezi toate filmele in sectiunea {" "}
                        <Link to="/category/movie" className="text-secondary">Filme</Link>.</p>
                </Container>
            </section>

            <section className="series my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Seriale</h1>
                    <MovieCardList movieList={adaptedSeriesData}/>
                    <p>Vezi toate serialele in sectiunea <Link to="/category/series">Seriale</Link>.</p>
                </Container>
            </section>
            <section className="favorites my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Favorite</h1>
                    <p>Vrei să îți salvezi filmele favorite pentru a le vedea mai târziu?</p>
                    <p>
            În cadrul fiecărui film găsești un buton prin care îl poți adăuga
             la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea filmele adăugate.
          </p>
                </Container>
            </section>
        </Layout>
    )
}

export default Home;