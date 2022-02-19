import React from 'react';
import './case.css';

function Case({first,setFirst,second,setSecond}) {
    const toUpperCase=()=>{
        setFirst(first.toUpperCase());
        setSecond(second.toUpperCase());
    }
    const toLowerCase=()=>{
        setFirst(first.toLowerCase());
        setSecond(second.toLowerCase());
    }
    return(
        <div className=" d-flex col-6 justify-content-around  ">
            <button className="buttons " onClick={toUpperCase}>To Upper Case</button>
            <button className="buttons " onClick={toLowerCase}>To Lower Case</button>
        </div>
    )
}
export default Case;