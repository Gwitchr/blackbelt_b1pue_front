import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Perfil from './componentes/perfil/perfil';
import Login from './componentes/login/login';
import Restaurante from './componentes/restaurantes/restaurantes';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';

ReactDOM.render(
        <main className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/restaurantes" component={Restaurante}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/perfil" component={Perfil}/>
                </Switch>
            </Router>
            <Footer />
        </main>,
    document.getElementById('root'));


serviceWorker.unregister();
