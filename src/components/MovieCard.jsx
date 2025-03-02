import { Link } from "react-router-dom";
import  Card  from "react-bootstrap/Card";

function MovieCard(props){
    const {movieId, imgSrc, title, description } = props;
    return(
        <Link to = {`/movie/${encodeURIComponent(movieId)}`}>
            <Card>
                <Card.Img variant="top" src={imgSrc}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>

        </Link>
    )
}

export default MovieCard;