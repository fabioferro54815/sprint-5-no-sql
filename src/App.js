import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Logo from '../src/assets/img/9f59335a301b0a3a2be02eaabf676150.png';
import Rodape from '../src/components/Rodape/Rodape';
import Imagem1 from '../src/assets/img/filmes-de-comedia-na-Netflix.jpg';
import Imagem2 from '../src/assets/img/41678285-mockup-consisting-of-laptop-tablet-pc-in-landscape-orientation-and-mobile-smartphone-with-blank-scre.png';
import Imagem3 from '../src/assets/img/new-email-on-laptop-flat-vector-19105091.png';

export default class App extends Component {
  render (){
    return(
      <div className="App">
        <div className="content">
        <nav className="nav_bar">
            <img src={Logo}></img>
            <Link to="/login" className="btn">Entrar</Link>
        </nav>
          <header className="conteudo_principal">
            <hgroup className="frase_principal">
              <h1>Nunca mais perca um lançamento!</h1>
              <h2>Com o OpFlix você fica por dentro de todos os lançamentos da 7ª arte.</h2>
            </hgroup>
            <section className="conteudo">
              <div>
                <h3>Salve seus lançamentos.</h3>
                <p>Salve seus lançamentos favoritos e não perca o dia de sua estreia!</p>
              </div>
              <img src={Imagem1}></img>
            </section>
            <section className="conteudo">
              <img src={Imagem2}></img>
              <div>
                <h3>Se atualize em qualquer lugar.</h3>
                <p>Acesse pela web ou pelo celular.</p>
              </div>
            </section>
            <section className="conteudo">
              <div>
                <h3>Receba notificações de seus filmes favoritos.</h3>
                <p>Saiba tudo sobre aqueles filmes que você quer tanto ver.</p>
              </div>
              <img src={Imagem3}></img>
            </section>
          </header>
        </div>
        <Rodape></Rodape>
    </div>
    );
  }
}
