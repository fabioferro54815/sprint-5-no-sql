import React, {Component} from 'react';
import '../../assets/css/PainelAdm.css';
import { Link } from 'react-router-dom';
import Rodape from '../../components/Rodape/Rodape';
import NavAdm from '../../components/NavAdm/NavAdm';

export default class PainelUsuario extends Component{

    render(){
        return(
            <div>
                <NavAdm></NavAdm>
                <section className="admcentro">
                    <h2>Painel do Administrador</h2>
                    <div className="btns">
                        <div className="englobo">

                        <div className="esquerda">
                            <div>
                                <Link to="/administradorLancamentos">Lancamentos</Link> 
                            </div>
                            <div>
                                <Link to="/">Usuarios</Link> 
                            </div>
                        </div>
                        <div className="esquerda">
                            <div>
                                <Link to="/">Plataformas</Link> 
                            </div>
                            <div>
                                <Link to="/">Categorias</Link> 
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <Rodape></Rodape>

            </div>
        );
    }
}