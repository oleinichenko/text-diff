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


// export default class Input extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             textOne:'',
//             textSecond:''
//         }
      
//     }
    
//     inputTextOne=(e)=>{
//         this.setState({
//             textOne:e.target.value
//         })
//     }
    

//     inputTextSecond=(e)=>{
//         this.setState({
//             textSecond:e.target.value
//         })
//     }
//     clearAll=()=>{
//         Array.from(document.querySelectorAll("textarea")).forEach(
//         textarea => (textarea.value = "")
//   );
//         this.setState({
//             textOne:'',
//             textSecond:''
//         })
//     }
    
//     getDiff=(string,common,type)=>{
//             const result =[];
//             for (let i=0,j=0;i<string.length;i++){
//                 if (string[i]===common[j]){
//                     result.push(string[i]); 
                    
//                     j++; 
//                 }else{
//                     result.push(<span className={` diff-${type}`}>{string[i]}</span>);
//                 }
//             }
//             //console.log(result);
//             return result
//         }
   
    
//     render(){
//         const {textOne,textSecond}=this.state;

//         function lcs(stringOne,stringSecond,i,j,cache){
//         if (stringOne.length===i || stringSecond.length===j){
//             return '';
//         }
//         if(cache[i][j]){
//             return cache[i][j];
//         }
//         if (stringOne[i]===stringSecond[j]){
//             const next= stringOne[i]+lcs(stringOne,stringSecond,i+1,j+1,cache);
//             cache[i][j]=next;
//         }else{
//             const first =lcs(stringOne,stringSecond,i+1,j,cache);
//             const second =lcs(stringOne,stringSecond,i,j+1,cache);
//             cache[i][j]= first.length>second.length?first:second;
//         }
        
//             return cache[i][j];
//         } 
//         const cache=[...Array(textOne.length)].map(()=>Array(textSecond.length));
//         //console.log(cache);
//         const common=lcs(textOne,textSecond,0,0,cache);
        



//         return(
            
//             <div className=" input d-flex justify-content-around">
//                 <div className="">
//                     <textarea 
//                 cols="80" rows="20"
//                 onChange={this.inputTextOne}/>
//                 <div className="result-col">{this.getDiff(textOne,common,"red")}</div>
//                 </div>
                
//                 <div className="">
//                     <textarea 
//                 cols="80" rows="20"
//                 onChange={this.inputTextSecond}/>
//                 <div className="result-col">{this.getDiff(textSecond,common,"green")}</div>
//                 </div>
//                  <Clear clearAll={this.clearAll}/>
//             </div>
            
//         )
//     }
// }