import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(10)
    const handleCounter = () => {
        setCounter(counter + 1)
        
      }
      
    function increase(){
        setCounter(counter + 1)
       }
       function decrease(){
        setCounter(counter - 1)
       }
  return (
    <>
      <h1>Count:{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrese</button>
    </>
  )
}

export default Counter
