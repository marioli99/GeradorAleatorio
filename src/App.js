import React from 'react';
import { useState } from 'react';
import './app.css';
import swal from 'sweetalert';

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [numeroAleatorio, setNumeroAleatorio] = useState(undefined);

  const calcularAleatorio = () => {
    if (primeiroNumero === segundoNumero) {
      swal({
        title: 'Insira numeros diferentes',
        icon: 'info',
      });
    } else {
      var numeroGerado;
      if (primeiroNumero < segundoNumero) {
        numeroGerado = parseInt(
          Math.random() * (segundoNumero - primeiroNumero) + primeiroNumero
        );
      } else {
        numeroGerado = parseInt(
          Math.random() * (primeiroNumero - segundoNumero) + segundoNumero
        );
      }

      setNumeroAleatorio(String(numeroGerado));
    }
  };

  return (
    <div className="App">
      <h1>Gerador de Numero</h1>

      <input
        type="text"
        placeholder="Primeiro Numero"
        onChange={(e) => setPrimeiroNumero(e.target.value)}
      />
      <input
        type="text"
        placeholder="Segundo Numero"
        onChange={(e) => setSegundoNumero(e.target.value)}
      />
      <br />
      {/* {primeiroNumero && <label> Primeiro Numero: {primeiroNumero}</label>}
      <br/>

      {segundoNumero && <label> Segundo Numero: {segundoNumero}</label>}
      <br/> */}

      <br />

      <button onClick={(e) => calcularAleatorio()}>Gerar</button>
      <br />
      {numeroAleatorio ? (
        <label className="aleatorio">
          Numero Aleatorio: {numeroAleatorio}{' '}
        </label>
      ) : null}

      <footer>
        Feito por <a href="https://github.com/marioli99">mim</a>
      </footer>
    </div>
  );
}

export default App;
