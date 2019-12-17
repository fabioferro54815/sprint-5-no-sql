import React, {Component} from 'react';
import Logo from '../../assets/img/9f59335a301b0a3a2be02eaabf676150.png';
import { Link } from 'react-router-dom';
import '../../assets/css/PainelAdm.css';
import { parseJwt } from '../../services/Auth';


export default class NavAdm extends Component{

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
            <nav>
                <div className="navbar">
                    <div className="content">
                        <div className="navflex">
                            <div className="navalgo">
                                <div>
                                    <img src={Logo} alt="Logo Opflix"></img>
                                </div>
                                <div className="tituloflex">
                                    <h1>Painel do Administrador</h1>
                                </div>
                            </div>
                            <div className="usuarioinfo">
                                <p className="nomeusu">{parseJwt().Nome}</p>
                                <img src={'http://192.168.4.195:5000'+parseJwt().Imagem} className="imgusu" alt="Imagem Usuario"></img>
                                <div className="dropdown">
                                    <button className="dropbtn">▼
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <Link to="/Login" onClick={this.limparstorage}>Sair</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}