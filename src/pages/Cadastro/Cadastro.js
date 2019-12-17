import React, {Component} from 'react';
import Rodape from '../../components/Rodape/Rodape';
import Logo from '../../assets/img/9f59335a301b0a3a2be02eaabf676150.png';
import { Link } from 'react-router-dom';

export default class Login extends Component{
    render(){
        return(
            <div className="Login">

                <header>
                    <img src={Logo}></img>
                </header>

                <main>
                    <form>
                        <div>
                            <h2>Cadastro</h2>
                        </div>
                        <div>
                            <input type="name" />
                            <input type="email" />
                            <input type="password" />
                            <input type="file" />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                </main>

                <Rodape></Rodape>
                
            </div>
        );
    }
}