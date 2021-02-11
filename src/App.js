import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Principal from './components/Principal';
import Libro from './components/Libro';
import Header from './components/layout/Header';
import Navegacion from './components/layout/Navegacion';
import Categorias from './components/Categorias';
import Login from './components/Login';
import Footer from './components/layout/Footer';

import AuthState from './context/autenticacion/authState';
import RutaPrivada from './components/rutas/RutaPrivada';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



function App() {

  const [item, setItem] = useState({});

  const ConsultarCategoria = async () => {
    const url2 = `http://biblioteca.ceprevitest.com/backend/public/api/categorias`;
    const resultado = await axios.get(url2);
    setItem(resultado.data);
    // console.log(resultado.data);
  }
    useEffect( () => {
      ConsultarCategoria();
      // eslint-disable-next-line
  }, []);

  return (
    <AuthState>
    <Router>
      <Header></Header>
      <Navegacion items={item} />
      <div className="contenido">
      <Switch>
        <RutaPrivada exact path="/" component={Principal}/>
        <RutaPrivada exact path="/categorias/:id" component={Categorias} />
        <RutaPrivada exact path="/libro/:id" component={Libro} />
        <Route exact path="/login"><Login /></Route>
      </Switch>
        </div>
      {Object.keys(item).length===0 ? null : <Footer />}
    </Router>
    </AuthState>
  );
}

export default App;
