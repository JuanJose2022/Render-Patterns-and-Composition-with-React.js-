import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index.js';
import './index.css';

function App(props) {
  return (
    <h2>!{props.saludo}, {props.nombre}¡</h2>
  );
}

function withSaludo(WrapperdComponent) {
  return function WrapperdComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad (props) {
      return (
        <React.Fragment>
          <WrapperdComponent {...props} saludo={saludo}/>
          <p>Estamos acompañamdo al Wrapperdomponent</p>
        </React.Fragment>
      );
    }
  }
}

const AppwithSaludo = withSaludo(App)
const AppwithSaludo2 =AppwithSaludo('Buenass');
const AppwithSaludo3 =AppwithSaludo('Buenass amigos');



ReactDOM.render(
  <React.Fragment>
    <AppwithSaludo2 nombre={"Alex"} />
    <AppwithSaludo3 nombre={"jose"} />
  </React.Fragment>,
  document.getElementById('root')
);