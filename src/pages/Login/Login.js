import React, {Component} from 'react';
import Rodape from '../../components/Rodape/Rodape';
import Logo from '../../assets/img/9f59335a301b0a3a2be02eaabf676150.png';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';
import Axios from 'axios';


export default class Login extends Component{
    
    constructor(){
        super();
        this.state = {
            email: "",
            senha: ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }

    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.4.195:5000/api/Login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix",response.data.token);
                    this.props.history.push('/usuario');
                }else{
                    console.log('erro');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }
    
    render(){
        return(
            <div className="Login">
                <div className="cinzinha"> 
                <div className="content">

                <header>
                    <img src={Logo}></img>
                </header>
<div className="centrao">

                <main className="redondola">
                    <form className="form_Login" onSubmit={this.efetuarLogin}>
                    <h2>Login</h2>
                            <div className="inputs">
                                <input type="email" placeholder="Email:" onInput={this.atualizaEstadoEmail} />
                                <input type="password" placeholder="Senha:" onInput={this.atualizaEstadoSenha}/>
                            </div>
                            <div>
                                <input type="submit" value="Enviar"/>
                            </div>
                            <div>
                                <p>Não tem uma conta? <Link to="/Cadastro">Crie uma agora!</Link></p>
                            </div>
                        </form>
                </main>
</div>


                </div>
                </div>
                <Rodape></Rodape>
            </div>
        );
    }
}