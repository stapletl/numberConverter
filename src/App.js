import './App.css';
import Textarea from './Textarea'
import RoundSwitch from './RoundSwitch';
import React, { useState } from 'react';

let toggle = 1;
let back = '#424242';

function App() {

  const [dec, setdec] = useState(0);
  const [bin, setbin] = useState(0);
  const [hex, sethex] = useState(0);
  const [oct, setoct] = useState(0);
  //const [back, setback] = useState('#424242');
  const [col, setcol] = useState(back);

  function cleanDec(num) {
    if(num.length === 0) {
      return [true, ""];
    }
    if (isNaN(num))
      return [true, num];
    return [false, num];
  }

  function cleanBin(num) {
    if(num.length === 0) {
      return [true, ""];
    }
    if (isNaN(num)) {
      return [true, num];
    }
    let temp = num.toString();
    for (let i = 2; i < 10; i++) {
      if (temp.indexOf(i) !== -1) {
        return [true, num];
      }
    }
    return [false, parseInt(num.toString(),2)];
  }

  function cleanHex(num) {
    if(num.length === 0) {
      return [true, ""];
    }
    let allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let str = num.toString();
    for(let i = 0; i < str.length; i++){
      if(allowed.indexOf(str[i]) === -1){
        return [true, num];
      }
    }
    return [false, parseInt(num, 16)];
  }

  function cleanOct(num) {
    if(num.length === 0) {
      return [true, ""];
    }
    if (isNaN(num))
      return [true, num];

    let temp = num.toString();
    for (let i = 8; i < 10; i++) {
      if (temp.indexOf(i) !== -1)
        return [true, num];
    }
    return [false, parseInt(num.toString(),8)];
  }

  function update(event, type) {

    let updatedValue = event.target.value;

    let err = false;

    switch (type) {
      case "Decimal":
        [err, updatedValue] = cleanDec(updatedValue);
        break;
      case "Binary":
        [err, updatedValue] = cleanBin(updatedValue);
        break;
      case "Hexadecimal":
        [err, updatedValue] = cleanHex(updatedValue);
        break;
      case "Octal":
        [err, updatedValue] = cleanOct(updatedValue);
        break;
      default:
        err = true;
        updatedValue = '';
        break;
    }

    if (err) {

      setcol('#FF8095'); //set background red

      if(updatedValue === "")
        setcol(back); //set background red

      setdec(updatedValue);
      setbin(updatedValue);
      sethex(updatedValue);
      setoct(updatedValue);
      //do some error shit
    }
    else {
      if(updatedValue > 4294967295 || updatedValue < -4294967295)
      {
        updatedValue = 0;
        alert("Overflow! lol");
      }
      setcol(back); //set background white

      setdec(updatedValue);
      setbin((updatedValue >>> 0).toString(2));
      sethex((updatedValue >>> 0).toString(16));
      setoct((updatedValue >>> 0).toString(8));
    }
  }

  function colorMode() {
    console.log(toggle);
    if(toggle % 2 === 1)
    {
      back = ('white');
    }
    if(toggle % 2 === 0)
    {
      back = ('#424242'); 
    }
    toggle++;
    if(col !== '#FF8095')
    setcol(back);
  }

  return (
    <div className="Window" style={{backgroundColor: (col)}}>
      <div className="App" >        
        <div className='Wrapper'>
          <div onChange={colorMode}>
            <RoundSwitch />
          </div>
          <h1 className='Header'>
            Decimal
          </h1>
          <Textarea onChange={update} value={dec} type="Decimal" />
          <h1 className='Header'>
            Binary
          </h1>
          <Textarea onChange={update} value={bin} type="Binary" />
          <h1 className='Header'>
            Hexadecimal
          </h1>
          <Textarea onChange={update} value={hex} type="Hexadecimal" />
          <h1 className='Header'>
            Octal
          </h1>
          <Textarea onChange={update} value={oct} type="Octal" />
        </div>
      </div>
    </div>
  );
}

export default App;
