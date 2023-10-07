
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ number, setNumber ] = useState(798789)
  
  const clear = () => {
    setNumber(0)
  }

  const addDigit = (digit) =>{
    setNumber(parseInt(number.toString() + digit))
   }

  //  TODO:
  // -Add way to input string and/or digit using buttons
  // -Display them on formula and display. Display will not show strings (*/+-)
  // -Apply CSS to build a calculator, can be worked on anytime.
  // -Add functions to equals sign, reading the expression and applying answer into the display.
  return (
    <div className="App">
      <div id="formula">{number}</div>
      <div id="display">{number}</div>
      <div onClick={clear} className="buttons large" id="clear" >AC</div>
      <div onClick={()=>addDigit('/')} className="buttons" id="divide">/</div>
      <div onClick={()=>addDigit('x')} className="buttons" id="multiply">x</div>
      <div onClick={()=>addDigit(7)} className="buttons" id="seven">7</div>
      <div onClick={()=>addDigit(8)} className="buttons" id="eight">8</div>
      <div onClick={()=>addDigit(9)} className="buttons" id="nine">9</div>
      <div onClick={()=>addDigit('-')} className="buttons" id="subtract">-</div>
      <div onClick={()=>addDigit(4)} className="buttons" id="four">4</div>
      <div onClick={()=>addDigit(5)} className="buttons" id="five">5</div>
      <div onClick={()=>addDigit(6)} className="buttons" id="six">6</div>
      <div onClick={()=>addDigit('+')} className="buttons" id="add">+</div>
      <div onClick={()=>addDigit(1)} className="buttons" id="one">1</div>
      <div onClick={()=>addDigit(2)} className="buttons" id="two">2</div>
      <div onClick={()=>addDigit(3)} className="buttons" id="three">3</div>
      <div onClick={()=>addDigit('=')} className="buttons tall" id="equals">=</div>
      <div onClick={()=>addDigit(0)} className="buttons large" id="zero">0</div>
      <div onClick={()=>addDigit('.')} className="buttons" id="decimal">.</div>
    </div>
  );
}

export default App;
