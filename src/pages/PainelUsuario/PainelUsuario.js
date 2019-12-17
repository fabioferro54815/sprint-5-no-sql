import React, { Component } from 'react';
import Axios from 'axios';
import '../../assets/css/PainelUsuario.css';
import NavUsuario from '../../components/NavUsuario/NavUsuario';
import Rodape from '../../components/Rodape/Rodape';
import ItemsCarousel from 'react-items-carousel';
import { Button, Icon, Modal } from 'antd';
import { Link } from 'react-router-dom';

export default class PainelUsuario extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            lista2: [],
            lista3: [],
            lista4: [],
            urlApi: 'http://192.168.4.195:5000',
            setActiveItemIndex: 0,
            activeItemIndex: 0,
            chevronWidth: 40,
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

            Axios.get('http://192.168.4.195:5000/api/Lancamentos/tipo/1', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ lista2: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });

            Axios.get('http://192.168.4.195:5000/api/Lancamentos/tipo/2', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ lista3: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });

            Axios.get('http://192.168.4.195:5000/api/Lancamentos/favoritos', { headers: { Authorization: AuthStr } })
            .then(data => {
                this.setState({ lista4: data.data });
                console.log(this.state.lista4)
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    mostrarDados(element) {
        Modal.info({
            title: element.titulo,
            content: (
                <div>
                    <p>Sinopse: {element.sinopse}</p>
                    <p>Duração: {element.tempoDuracao}</p>
                    <p>Data de lançamento: {element.dataLancamento}</p>
                </div>
            ),
            onOk() { },
        });
    }


    render() {
        return (
            <div>

                <NavUsuario></NavUsuario>

                <main>
                    <div className="content">

                        <h2 className="titulolanca">Favoritos</h2>
                        <div className="lancamentos">
                            <div style={{ "padding": 0, "maxWidth": "100%", "margin": "0", height: '85vh', zIndex: "2" }}>
                                <ItemsCarousel
                                    infiniteLoop={false}
                                    gutter={12}
                                    activePosition={'center'}
                                    chevronWidth={60}
                                    disableSwipe={false}
                                    alwaysShowChevrons={false}
                                    numberOfCards={3}
                                    slidesToScroll={3}
                                    outsideChevron={false}
                                    showSlither={false}
                                    firstAndLastGutter={false}
                                    activeItemIndex={this.state.activeItemIndex}
                                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                                    rightChevron={
                                        <Button shape="circle">
                                            <Icon type="right" />
                                        </Button>
                                    }
                                    leftChevron={
                                        <Button shape="circle">
                                            <Icon type="left" />
                                        </Button>
                                    }
                                >
                                    {
                                        this.state.lista4.map(element => {
                                            return (
                                                <Link onClick={() => this.mostrarDados(element)}>
                                                    <img src={this.state.urlApi + element.imagem} className="imgLancamento"></img>
                                                </Link>
                                            )
                                        })
                                    }
                                </ItemsCarousel>
                            </div>
                        </div>
                        <h2 className="titulolanca">Lancamentos</h2>
                        <div className="lancamentos">
                            <div style={{ "padding": 0, "maxWidth": "100%", "margin": "0", height: '85vh', zIndex: "2" }}>
                                <ItemsCarousel
                                    infiniteLoop={false}
                                    gutter={12}
                                    activePosition={'center'}
                                    chevronWidth={60}
                                    disableSwipe={false}
                                    alwaysShowChevrons={false}
                                    numberOfCards={3}
                                    slidesToScroll={3}
                                    outsideChevron={false}
                                    showSlither={false}
                                    firstAndLastGutter={false}
                                    activeItemIndex={this.state.activeItemIndex}
                                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                                    rightChevron={
                                        <Button shape="circle">
                                            <Icon type="right" />
                                        </Button>
                                    }
                                    leftChevron={
                                        <Button shape="circle">
                                            <Icon type="left" />
                                        </Button>
                                    }
                                >
                                    {
                                        this.state.lista.map(element => {
                                            return (
                                                <Link onClick={() => this.mostrarDados(element)}>
                                                    <img src={this.state.urlApi + element.imagem} className="imgLancamento"></img>
                                                </Link>
                                            )
                                        })
                                    }
                                </ItemsCarousel>
                            </div>
                        </div>
                        <h2 className="titulolanca">Filmes</h2>
                        <div className="lancamentos">
                            <div style={{ "padding": 0, "maxWidth": "100%", "margin": "0", height: '85vh', zIndex: "2" }}>
                                <ItemsCarousel
                                    infiniteLoop={false}
                                    gutter={12}
                                    activePosition={'center'}
                                    chevronWidth={60}
                                    disableSwipe={false}
                                    alwaysShowChevrons={false}
                                    numberOfCards={3}
                                    slidesToScroll={3}
                                    outsideChevron={false}
                                    showSlither={false}
                                    firstAndLastGutter={false}
                                    activeItemIndex={this.state.activeItemIndex}
                                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                                    rightChevron={
                                        <Button shape="circle">
                                            <Icon type="right" />
                                        </Button>
                                    }
                                    leftChevron={
                                        <Button shape="circle">
                                            <Icon type="left" />
                                        </Button>
                                    }
                                >
                                    {
                                        this.state.lista2.map(element => {
                                            return (
                                                <Link onClick={() => this.mostrarDados(element)}>
                                                    <img src={this.state.urlApi + element.imagem} className="imgLancamento"></img>
                                                </Link>
                                            )
                                        })
                                    }
                                </ItemsCarousel>
                            </div>
                        </div>
                        <h2 className="titulolanca">Series</h2>
                        <div className="lancamentos">
                            <div style={{ "padding": 0, "maxWidth": "100%", "margin": "0", height: '85vh', zIndex: "2" }}>
                                <ItemsCarousel
                                    infiniteLoop={false}
                                    gutter={12}
                                    activePosition={'center'}
                                    chevronWidth={60}
                                    disableSwipe={false}
                                    alwaysShowChevrons={false}
                                    numberOfCards={3}
                                    slidesToScroll={3}
                                    outsideChevron={false}
                                    showSlither={false}
                                    firstAndLastGutter={false}
                                    activeItemIndex={this.state.activeItemIndex}
                                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                                    rightChevron={
                                        <Button shape="circle">
                                            <Icon type="right" />
                                        </Button>
                                    }
                                    leftChevron={
                                        <Button shape="circle">
                                            <Icon type="left" />
                                        </Button>
                                    }
                                >
                                    {
                                        this.state.lista3.map(element => {
                                            return (
                                                <Link onClick={() => this.mostrarDados(element)}>
                                                    <img src={this.state.urlApi + element} className="imgLancamento"></img>
                                                </Link>
                                            )
                                        })
                                    }
                                </ItemsCarousel>
                            </div>
                        </div>
                    </div>
                </main>

                <Rodape></Rodape>

            </div>
        );
    }
}
