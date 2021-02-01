import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Principal from './components/Principal';
import Libro from './components/Libro';
import Header from './components/layout/Header';
import Navegacion from './components/layout/Navegacion';
import Categorias from './components/Categorias';
import Footer from './components/layout/Footer';

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
    
    <Router>
      <Header></Header>
      <Navegacion items={item} />
      <div className="contenido">
      <Switch>
        <Route exact path="/"><Principal /></Route>
        <Route exact path="/libro"><Principal /></Route>
        <Route exact path="/categorias/:id"><Categorias /></Route>
        <Route exact path="/libro/:id"><Libro /></Route>
      </Switch>
        </div>
      {Object.keys(item).length===0 ? null : <Footer />}
    </Router>
  );
}

export default App;
