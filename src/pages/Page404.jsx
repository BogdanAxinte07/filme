import "./Page404.css"
import  Container  from "react-bootstrap/Container"

function Page404(){
    return(
        <div className="Page404 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <p className="h4 text-center">Acesta pagina nu mai este disponibila.</p>
                <strong className="error404">404 :(</strong>
                <p className="h4 text-center">Incearca alta pagina!</p>

            </Container>
        </div>
    )

}

export default Page404;