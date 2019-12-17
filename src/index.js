import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import PainelUsuario from './pages/PainelUsuario/PainelUsuario';
import PainelAdm from './pages/PainelAdm/PainelAdm';
import LancamentosAdm from './pages/LancamentosAdm/LancamentosAdm';
import Erro from './pages/Erro/Erro';
import { parseJwt } from './services/Auth';
import Mapa from './pages/Mapa/Mapa';

import 'antd/dist/antd.css';

// const RotaPrivada = ({component: Component}) =>(
//     <Route
//         render={props =>
//             localStorage.getItem("usuario-opflix") !== null ? (
//                 <Component {...props} /> 
//             ) : (
//                 <Redirect 
//                     to={{ pathname: "/Erro", state: {from: props.location}}}
//                 />
//             )
//         }
//     />        
// );

const RotaPrivada = ({ component: Component}) => (
    <Route
        render={
            props => 
                parseJwt().Autorizacao === "2" ? (
                    <PainelUsuario {...props} />
                ) : (
                    <PainelAdm {...props} />
                )
        }
    />
);

const RotaPrivadaAdm = ({ component: Component}) => (
    <Route
        render={
            props => 
                parseJwt().Autorizacao === "1" ? (
                    <Component {...props} />
                ) : (
                    <Erro {...props} />
                )
        }
    />
);



const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/mapa' component={Mapa}/>
                <RotaPrivada path='/usuario' component={PainelUsuario}></RotaPrivada>
                <RotaPrivada path='/administrador' component={PainelAdm}></RotaPrivada>
                <RotaPrivadaAdm path='/administradorLancamentos' component={LancamentosAdm}></RotaPrivadaAdm>
                <Route path="/Erro" component={Erro}></Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
