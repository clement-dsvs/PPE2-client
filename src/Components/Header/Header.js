import './Header.css'
import logo from '../../Ressources/logo_Promeo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'


import { Link } from 'react-router-dom';

function Header(){
    //Informations à récuperer de la session
    const [isConnected, setisConnected] = useState(true)
    let userName = "Clément DESAVIS"

    if(isConnected){
        return(
            <div className="outerContainer">
                <img src={logo} alt="logo Promeo" className={"logoPromeo"}/>
                <div className="linksHeader">
                    <div className={"toolsHeader"}>
                        <Link className={"linkHeader"}>
                            <p>Menu</p>
                        </Link>
                        <Link to={"/"} className={"linkHeader"}>
                            <p>Accueil</p>
                        </Link>
                    </div>

                    <div className={"toolsProfile"}>
                        <Link to={"/profile"} className={"linkHeader"}>
                            <p title={"Accéder au Profil"} id={"userName"}>{userName}</p>
                        </Link>
                        <FontAwesomeIcon icon={faPowerOff} id={"powerOff"}/>
                    </div>


                </div>
            </div>
        )
    }
    else {
        return(
            <div className="outerContainer">
                <img src={logo} alt="logo Promeo" className={"logoPromeo"}/>
                <div className="linksHeader">

                    <Link to={"/login"} className={"linkHeader"} id={"espaceFormateur"}>
                        <p>Espace Formateur <FontAwesomeIcon icon={faUser}/></p>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Header;