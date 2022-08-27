import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const [calculate,setCalculate]=useState("");
const [value,setValue]=useState("");
const [error,setError]=useState("");



const AddValue = (event)=>{
  //clear error
  setError("");
  const operation = ["+","-","/","*","%","(",")"]
  //catch error ---if the last string is operation except for "-"
  if (operation.includes(event.target.value) 
      && operation.includes(calculate.substring(calculate.length-1,calculate.length)
      &&event.target.value!=="-")){
    setError("Please check the formula");
    //catch error --- if the first clicked is operation excpe for "-"
  }else if(calculate===""
    &&operation.includes(event.target.value)
    &&event.target.value!=="-"){
    setError("Please enter a number");
  }else {
  setCalculate(calculate+event.target.value);
}}
const removeItem = ()=>{
setCalculate("");
setValue("");

}

const GetResult = () =>{
  // catch error --- if entered formular is not valid
 try{
  setValue(eval(calculate))
 }catch {
  setError("Please check the formular")
 
  setCalculate(calculate)
 }
//  finally {
//   setValue(calculate);
//  }
}
const removeValue = () =>{
  setCalculate(calculate.slice(0,-1))
}
  //number 버튼 구성
  const NumBtn = [1,2,3,4,5,6,7,8,9];
  const NumArr = [];
  for (let i=0;i<NumBtn.length;i++){
    NumArr.push(<button  onClick={AddValue} className="number-btn"key={i}value={NumBtn[i]}>{NumBtn[i]}</button>)
  }

  
  return (
    <div className="App">
       <h1>My Calculator</h1>
       <div className="input-container">
        <p>{(calculate==="")?"0":calculate}</p>
        <input type="text" onChange={AddValue} value={value}disabled />
       </div>
       <div className="calculator-container">
          <button className="op-btn" value={"C"} onClick={removeItem}>C</button>
          <button className="op-btn" value="(" onClick={AddValue}>(</button>
          <button className="op-btn" value=")" onClick={AddValue}>)</button>
          <button className="op-btn" value="/" onClick={AddValue}>/</button>
          {NumArr.splice(6,3)}
          <button className="op-btn" value="*"  onClick={AddValue}>*</button>
          {NumArr.splice(3,3)}
          <button className="op-btn" value="-"  onClick={AddValue}>-</button>
          {NumArr.splice(0,3)}
          <button className="op-btn" value="+"  onClick={AddValue}>+</button>
          <button className="op-btn" value="."  onClick={AddValue}>.</button>
          <button className="number-btn" value="0" onClick={AddValue}>0</button>
          <button className="op-btn" value="" onClick={removeValue}>Back </button>
          <button className="op-btn" value="=" onClick={GetResult}>=</button>
          
       </div>
      <p className='error'>{error}</p>
    </div>
  );
}

export default App;
