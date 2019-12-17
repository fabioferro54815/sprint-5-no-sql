import React, { Component } from 'react';
import Axios from 'axios';
import '../../assets/css/LancamentoAdm.css';
import NavAdm from '../../components/NavAdm/NavAdm';
import Rodape from '../../components/Rodape/Rodape';

export default class LancamentoAdm extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            listaCategoria: [],
            listaPlataforma: [],
            listaTipo: [],
            titulo: '',
            sinopse: '',
            idCategoria: 0,
            tempoDuracao: '',
            dataLancamento: '',
            idTipo: 0,
            idPlataforma: 0,
            urlApi: 'http://192.168.4.195:5000'
            
        };
    }
    
    componentDidMount() {
        const USER_TOKEN = localStorage.getItem('usuario-opflix')
        const AuthStr = 'Bearer '.concat(USER_TOKEN)
        Axios.get('http://192.168.4.195:5000/api/Lancamentos', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ lista: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://192.168.4.195:5000/api/Categorias', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ listaCategoria: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://192.168.4.195:5000/api/Plataformas', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ listaPlataforma: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
            Axios.get('http://192.168.4.195:5000/api/Tipos', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ listaTipo: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        }
        
    Cadastrar = (event) =>{
        event.preventDefault();
        const USER_TOKEN = localStorage.getItem('usuario-opflix')
        const AuthStr = 'Bearer ' + USER_TOKEN;
        Axios.post('http://192.168.4.195:5000/Api/Lancamentos',{
            Titulo: this.state.titulo,
            Sinopse: this.state.sinopse,
            IdCategoria: 1,
            TempoDuracao: this.state.tempoDuracao,
            DataLancamento: this.state.dataLancamento,
            IdTipo: this.state.idTipo,
            IdPlataforma: this.state.idPlataforma
        }, 
        { headers: { Authorization: AuthStr }, "Content-Type": "application/json" })
        console.log();
    }
    
    atualizaEstadoTitulo = (event) =>{
        this.setState({titulo: event.target.value});
    }
    atualizaEstadoSinopse = (event) =>{
        this.setState({sinopse: event.target.value});
    }   
    atualizaEstadoCategoria = (event) =>{
        this.setState({idCategoria: event.target.value});
        console.log(this.state.idCategoria)
    }   
    atualizaEstadoTempo = (event) =>{
        this.setState({tempoDuracao: event.target.value});
    }   
    atualizaEstadoData = (event) =>{
        this.setState({dataLancamento: event.target.value});
    }   
    atualizaEstadoTipo = (event) =>{
        this.setState({idTipo: event.target.value});
    }   
    atualizaEstadoPlataforma = (event) =>{
        this.setState({idPlataforma: event.target.value});
    }

    render() {
        return (
            <div>
                <NavAdm></NavAdm>
                <section className="listagem">
                    <h2>Lançamentos</h2>
                    <div className="tabelalancamento">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Lancamento</th>
                                    <th>Sinopse</th>
                                    <th>Categoria</th>
                                    <th>Duração</th>
                                    <th>Data de Lancamento</th>
                                    <th>Tipo</th>
                                    <th>Plataforma</th>
                                    <th>Imagem</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.lista.map(element => {
                                        return (
                                            <tr>
                                                <td>{element.idLancamento}</td>
                                                <td>{element.titulo}</td>
                                                <td>{element.sinopse}</td>
                                                {/* <td>{element.idCategoriaNavigation.nome}</td> */}
                                                <td>{element.tempoDuracao}</td>
                                                <td>{element.dataLancamento}</td>
                                                {/* <td>{element.idTipoNavigation.nome}</td> */}
                                                {/* <td>{element.idPlataformaNavigation.nome}</td> */}
                                                <img src={this.state.urlApi+element.imagem} className="imgFilme"></img>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="cadastrolancamentoadm">
                    <h2>Cadastrar Lancamento</h2>
                    <div>
                        <form onSubmit={this.Cadastrar}>
                            <input type="text" name="titulo" placeholder="Titulo" onInput={this.atualizaEstadoTitulo}/>
                            <input type="text" name="sinopse" placeholder="Sinopse" onInput={this.atualizaEstadoSinopse}/>
                            <select name="categoria" onChange={this.atualizaEstadoCategoria}>
                                {
                                    this.state.listaCategoria.map(element => {
                                        return (
                                            <option value={element.id}>{element.nome}</option>
                                        )
                                    })
                                }
                            </select>
                            <input type="text" name="email" placeholder="Duração" onInput={this.atualizaEstadoTempo} />
                            <input type="date" name="data" placeholder="Data" onInput={this.atualizaEstadoData} />
                            <select name="tipo" onInput={this.atualizaEstadoTipo}>
                                {
                                    this.state.listaTipo.map(element => {
                                        return (
                                            <option value={element.id}>{element.nome}</option>
                                        )
                                    })
                                }
                            </select>
                            <select name="plataforma" onInput={this.atualizaEstadoPlataforma}>
                                {
                                    this.state.listaPlataforma.map(element => {
                                        return (
                                            <option value={element.id}>{element.nome}</option>
                                        )
                                    })
                                }
                            </select>

                            <input type="submit" value="Cadastrar" />
                        </form>
                    </div>
                </section>

                <Rodape></Rodape>
            </div>
        );
    }
}
