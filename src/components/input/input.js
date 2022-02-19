import React, {useState} from 'react';
import './input.css';
import Clear from '../clear';
import Compare from '../compare';
import Case from '../case';

function Input() {
  const [first, setFirst] = useState("function(x, y) {\n  return x + y;\n}");
  const [second, setSecond] = useState("function(w, h) {\n  return w * h;\n}");

  return (
    <div className="container pt-3">
        <div className=" row">
            <Clear  first={first} setFirst={setFirst} second={second} setSecond={setSecond}/>
            <Case   first={first} setFirst={setFirst} second={second} setSecond={setSecond}/>
        </div>
      <div className="d-flex cols pt-4">
      
        <div className="input-col">
          <TextArea value={first} onChange={(text) => setFirst(text)} />
        </div>

        

        <div className="input-col">
          <TextArea value={second} onChange={(text) => setSecond(text)} />
        </div>
         
      </div>
      <Compare 
        first={first}
        second={second}
      />
      
    </div>
  )
}


function TextArea({ value, onChange }) {
  return <textarea cols='60' rows='20' value={value} onChange={(e) => onChange(e.target.value) } />
}




export default Input;


