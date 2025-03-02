import Container from "react-bootstrap/Container"
import Row from  "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MovieCard from "./MovieCard"

function MovieCardList(props){
    const{movieList} = props;

    return(
        //folosim grid ul bootstrap
        <Container>
            <Row>
                {movieList.map((movie)=>{
                    return(
                        <Col>
                        <MovieCard
                        imdbId={movie.id}
                        year = {movie.year}
                        type = {movie.type}
                        title={movie.title}
                        poster={movie.poster}
                        />
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}

export default MovieCardList