import  { useState} from "react"
import "./Header.css"
import  Container  from "react-bootstrap/Container"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Header(){
    const [isDisplayed, setIsDisplayed]= useState(false)


    function handleMenuClick(){
        setIsDisplayed((prevIsDisplayed)=> !prevIsDisplayed)
    }

    let dropdownMenuClasses = "custom-dropdown-menu"
    if(isDisplayed){
        dropdownMenuClasses += "display-mobile-menu"
    }

    return(
        <header className="Header"> 
            <nav className="nav bg-primary w-100">
                <Container className="d-flex justify-content-between align-items-center">
                    <Link to="/">
                    <img className="p-3"
                    src={logo}
                    alt="Imagine logo"
                    />
                    </Link>

                    <div className="menu-icon-container">
                        <span 
                        onClick={handleMenuClick} 
                        className="material-icons menu-icon text-light">
                            {" "}
                            menu{" "}
                            </span>
                        <ul className={dropdownMenuClasses}>
                            <li className={isDisplayed ? "container" : null}>
                                <Link to ="/category/movie" className="text-uppercase text-light p-3">
                                    Filme
                                    </Link>
                            </li>

                            <li className={isDisplayed ? "container" : null}>
                                <Link to="/category/series" className="text-uppercase text-light p-3">Seriale</Link>
                            </li>

                            <li className={isDisplayed ? "container" : null}>
                                <Link to="/favorites" className="text-uppercase text-light p-3">Favorite
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>

            </nav>
        </header>

    );
}

export default Header;