
import React, { useState } from 'react';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { Screen } from './components/Screen';
import { ButtonBox } from './components/ButtonBox';
import { Button } from './components/Button';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })
  
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
        calc.num === 0 && value === "0"
          ? "0"
          : removeSpaces(calc.num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(calc.num + value)))
          : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res
      })
    }
  }

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num : !calc.num.toString().includes(".") ? calc.num + value: calc.num
    })
  }

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res & calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => 
      sign === "+"
      ? a + b
      : sign === "-"
      ? a - b
      : sign === "*"
      ? a * b
      : a / b;
    
      setCalc({
        ...calc,
        res:
        calc.num === "0" && calc.sign === "/"
        ? "Can't divide with 0"
        : math(
          Number(removeSpaces(calc.res)), 
          Number(removeSpaces(calc.num)), 
          calc.sign),
        sign: "",
        num: 0
      })
    }

    
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num : calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0
    })
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0
    })
  }

  const percentClickHandler = (e) => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100,1)),
      res: (res /= Math.pow(100, 1)),
      sign: ""
    })
  }
  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res}/>
      <ButtonBox>
        {btnValues.flat().map((btn, index) => {
          return (
            <Button
            key={index}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={
              btn === "C"
                ? resetClickHandler
                : btn === "+-"
                ? invertClickHandler
                : btn === "%"
                ? percentClickHandler
                : btn === "="
                ? equalsClickHandler
                : btn --- "/" || btn === "X" || btn === "-" || btn === "+"
                ? signClickHandler
                : btn === "."
                ? commaClickHandler
                : numClickHandler
            }

            />

          )
        })}
       
      </ButtonBox>

    </Wrapper>
  );
}

export default App;



// const [ number, setNumber ] = useState(798789)
  
//   const clear = () => {
//     setNumber(0)
//   }

//   const addDigit = (digit) =>{
//     setNumber(parseInt(number.toString() + digit))
//    }






// <div className="App">
//       <div id="formula">{number}</div>
//       <div id="display">{number}</div>
//       <div onClick={clear} className="buttons large" id="clear" >AC</div>
//       <div onClick={()=>addDigit('/')} className="buttons" id="divide">/</div>
//       <div onClick={()=>addDigit('x')} className="buttons" id="multiply">x</div>
//       <div onClick={()=>addDigit(7)} className="buttons" id="seven">7</div>
//       <div onClick={()=>addDigit(8)} className="buttons" id="eight">8</div>
//       <div onClick={()=>addDigit(9)} className="buttons" id="nine">9</div>
//       <div onClick={()=>addDigit('-')} className="buttons" id="subtract">-</div>
//       <div onClick={()=>addDigit(4)} className="buttons" id="four">4</div>
//       <div onClick={()=>addDigit(5)} className="buttons" id="five">5</div>
//       <div onClick={()=>addDigit(6)} className="buttons" id="six">6</div>
//       <div onClick={()=>addDigit('+')} className="buttons" id="add">+</div>
//       <div onClick={()=>addDigit(1)} className="buttons" id="one">1</div>
//       <div onClick={()=>addDigit(2)} className="buttons" id="two">2</div>
//       <div onClick={()=>addDigit(3)} className="buttons" id="three">3</div>
//       <div onClick={()=>addDigit('=')} className="buttons tall" id="equals">=</div>
//       <div onClick={()=>addDigit(0)} className="buttons large" id="zero">0</div>
//       <div onClick={()=>addDigit('.')} className="buttons" id="decimal">.</div>
//     </div>