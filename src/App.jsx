import React, {Fragment, useState, useEffect} from 'react';

//components imports
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'; 


function App() {

  //using state hook
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  //using useEffect
  useEffect(() =>{
    const consultarAPI = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=8eb904bbb6a14d9ca70146c6d4f3bdaa`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticas"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App
