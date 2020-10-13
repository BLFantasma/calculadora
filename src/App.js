import React from 'react';
import logo from './logo.svg';
import './App.css';

function mult(x,y) {
  return x * y;
}
function div(x,y) {
  return x / y;
}
function soma(x,y) {
  return x + y;
}
function sub(x,y) {
  return x - y;
}
let num = {
  decimal: 0,
  inteiro: 0
}
class NoPilha {
  constructor(dado, proximo) {
    this.dado = dado;
    this.proximo = proximo;
  }
  getdado(){
    return this.dado;
  }
  getproximo() {
    return this.proximo;
  }
  setdado(dado) {
    this.dado = dado;
  }
  setproximo(proximo) {
    this.proximo = proximo;
  }
}




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      semvirgula: 'true',
      atual: '0',
      anterior: '0',
      operacao: ''
    };
  }
  atAtual(num) {
    this.setState((state, props) =>(
        {atual: state.atual + num}
    ));
  }
  adVir() {
    if (this.state.semvirgula){
      this.setState((state, props) =>(
          {atual: state.atual + ','}
      ));
      this.setState((state, props) =>(
          {semvirgula: false}
      ));
    };
  }
  atOp(op){
    this.setState((state, props) =>(
        {operacao: op}
    ));
    this.setState((state, props) =>(
        {anterior: state.atual}
    )); 
    this.setState((state, props) =>(
        {atual: '0'}
    ));
  }

  Equal(){
    if (this.state.operacao == '/') {
      this.setState((state, props) =>(
        {anterior:  (parseFloat(this.state.anterior)/parseFloat(this.state.atual)).toString()}
      )
    )};
    if (this.state.operacao == 'x') {
      this.setState((state, props) =>(
        {anterior:  (parseFloat(this.state.anterior)*parseFloat(this.state.atual)).toString()}
      )
    )};
    if (this.state.operacao == '-') {
      this.setState((state, props) =>(
        {anterior:  (parseFloat(this.state.anterior)-parseFloat(this.state.atual)).toString()}
      )
    )};
    if (this.state.operacao == '+') {
      this.setState((state, props) =>(
        {anterior:  (parseFloat(this.state.anterior)+parseFloat(this.state.atual)).toString()}
      )
    )};
  }

  render(){
    return (
      <div class="calc"> 
        <div class="tela">
          <div class="anterior">
            {this.state.anterior+this.state.operacao}
          </div>
          <div class="atual">
            {this.state.atual}
          </div>
        </div>
        <div class="teclado">
          <table>
            <tr>
              <td><button onClick={() => this.atAtual('7')}>7</button></td>
              <td><button onClick={() => this.atAtual('8')}>8</button></td>
              <td><button onClick={() => this.atAtual('9')}>9</button></td>
              <td><button onClick={() => this.atOp('/')}>&divide;</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.atAtual('4')}>4</button></td>
              <td><button onClick={() => this.atAtual('5')}>5</button></td>
              <td><button onClick={() => this.atAtual('6')}>6</button></td>
              <td><button onClick={() => this.atOp('x')}>&times;</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.atAtual('1')}>1</button></td>
              <td><button onClick={() => this.atAtual('2')}>2</button></td>
              <td><button onClick={() => this.atAtual('3')}>3</button></td>
              <td><button onClick={() => this.atOp('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.adVir()}>,</button></td>
              <td><button onClick={() => this.atAtual('0')}>0</button></td>
              <td><button onClick={() => this.apAtual()}>AC</button></td>
              <td><button onClick={() => this.atOp('+')}>+</button></td>
            </tr>
            <tr>
              <td colspan="4"><button onClick={() => this.Equal()}>=</button></td>
            </tr>
          </table>
        </div> 
      </div>
    );
  }
}

export default App;
