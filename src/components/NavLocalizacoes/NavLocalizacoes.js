import React, {Component} from 'react';
import Logo from '../../assets/img/9f59335a301b0a3a2be02eaabf676150.png';
import { Link } from 'react-router-dom';
import '../../assets/css/PainelAdm.css';

export default class NavUsuario extends Component{

    constructor() {
        super();
        this.state = {
            imagem: '',
        };
    }

    limparstorage = (event) => {
        localStorage.clear();
    }

    render(){
        return(
            <nav className="navezera">
                <div className="navbar2">
                    <div className="content">
                        <div className="navflex">
                            <div className="navalgo">
                                <div>
                                    <Link to="/"><img src={Logo} alt="Logo Opflix"></img></Link>
                                </div>
                                <div className="listabar">
                                    <h2>Cinemas</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}