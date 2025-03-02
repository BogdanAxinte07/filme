import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import  Container  from "react-bootstrap/Container";

function NewDetails(){
    const {movieId} = useParams()

    return(
        <Layout>
            <Container>
                <h1>Titlul filmului</h1>
                <p>Parametrul venit din ruta: {movieId}</p>
            </Container>
        </Layout>
    )
}

export default NewDetails;