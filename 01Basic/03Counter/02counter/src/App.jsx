
import {useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)
  let [message, setMessage] = useState("");
  // let counter = 0;

  // const addValue = () => {
  //   console.log("value added ",counter)
  //   counter ++;
  // }
  // let [counter, setCounter]= useState(15)
  // const addValue = () => {

  //   //counter ++
  //   setCounter(counter+1)
  //   console.log("value added ",counter)
  // }
  // const removeValue =() => {
  //   setCounter(counter -1)
  // }


  const addValue = () =>{
    if(counter < 20 ){
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)

      
      
      console.log("value added ",counter)
    }else{
      
      setMessage("counter cannot be more  than 20 ")
    }
    
    

  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter -1)
      console.log("value removed ",counter)
    }else{
      
      setMessage("counter cannot be less than 0")
    }
    

    
    
    
  }


  return (
    <>
      <h1>react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button 
      onClick={removeValue}
      >remove value{counter}</button>

      <p>{message}</p>


    </>
  )
}

export default App
