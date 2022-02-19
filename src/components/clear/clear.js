import React from 'react';
import './clear.css';

function Clear({first,setFirst,second,setSecond}) {
   const clearAll=()=>{
       Array.from(document.querySelectorAll("textarea")).forEach(
        textarea => (textarea.value = "")
        
   );
    //setFirst(first.toUpperCase())
    setFirst('');
    setSecond('');
    
}
    return(
        <div className="col-6 d-flex justify-content-center">
            <button className="buttons "  onClick={clearAll}>Clear All </button>   
        </div>
        
    ) 
}
export default Clear;