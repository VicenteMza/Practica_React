<<<<<<< HEAD
import React from"react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7} from "./components/Eventos";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> 030113f7c0330f52df2b415cafd7fb5b37e98e10

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <section>
=======
>>>>>>> 030113f7c0330f52df2b415cafd7fb5b37e98e10
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
<<<<<<< HEAD
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional Expresado desde una prop"/>
          <Propiedades 
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={false}
            arreglo= {[1, 2, 4]}
            objeto= {{nombre: "Vicente", correo: "vicente@email.com"}}
            funcion={(num) => num*num}
            elementoReact= {<i>Esto es un elemento React</i>}
            componenteReact= {
              <Componente msg="Soy un componete pasado como Prop"/>
            }
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
        </section>
      </header>
      </div>
=======
      </header>
    </div>
>>>>>>> 030113f7c0330f52df2b415cafd7fb5b37e98e10
  );
}

export default App;
