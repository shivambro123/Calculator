import React, { useState } from 'react'
import './Calcicss.css';

const Calci = () => {
    // const [value,setValue]=useState('');
    const [store,setStore]=useState('');

    const changeInput = () =>{

    } 

    const changeValue = (e) =>{
      console.log(store);
      // (e.target.innerText == "+" || '-' || "*" || "/") ? setStore(store) :
      setStore(store.concat(e.target.innerText)); 
    }

    const changeOutput = (e) =>{
      setStore(eval(store));
    }
    const resetAll = () =>{
      setStore('');
    }
    const backValue = () =>{
      setStore(store.slice(0,-1));
    }

    

  return (
    <div>   
      <div className='main'>
        <div className='inputfield'>
            <input type="text" onChange={changeInput} value={store}/>
        </div>
        <div className='buttons'>
            <button onClick={resetAll}>C</button>
            <button onClick={changeValue}>%</button>
            <button onClick={backValue}>B</button>
            <button onClick={changeValue}>/</button>
        </div>
        <div className='buttons'>
            <button onClick={changeValue}>7</button>
            <button onClick={changeValue}>8</button>  
            <button onClick={changeValue}>9</button>
            <button onClick={changeValue}>*</button>
        </div> 
         <div className='buttons'>
            <button onClick={changeValue}>4</button>
            <button onClick={changeValue}>5</button>
            <button onClick={changeValue}>6</button>
            <button onClick={changeValue}>-</button>
        </div>  <div className='buttons'>
            <button onClick={changeValue}>1</button>
            <button onClick={changeValue}>2</button>
            <button onClick={changeValue}>3</button>
            <button onClick={changeValue}>+</button>
        </div>
        <div className='buttons'>
            <button onClick={changeValue}>00</button>
            <button onClick={changeValue}>0</button>
            <button onClick={changeValue}>.</button>
            <button onClick={changeOutput}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calci
