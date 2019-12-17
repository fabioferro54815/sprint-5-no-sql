import React, {Component} from 'react';
import IconeFacebook from '../../assets/img/857761_icone-facebook-png.png';
import IconeInstagram from '../../assets/img/1384015.png';
import IconeTwitter from '../../assets/img/twitter-icone.png';
import '../../assets/css/Rodape.css';

export default class Rodape extends Component{
    render(){
        return(
            <div className="pezinho">
                <footer>
                    <h4>Nos siga nas redes sociais</h4>
                <div className="icons">
                    <a href=""><img src={IconeFacebook}></img></a>
                    <a href=""><img src={IconeInstagram}></img></a>
                    <a href=""><img src={IconeTwitter}></img></a>
                </div>
                    <p>OpFlix® - 2019. Todas os direitos reservados.</p>
                </footer>
            </div>
        );
    }
}