import React from 'react'
import { useState } from 'react'
import Product from './Product'

// useState, useEffect, useContext, [useParams, useNavigation, useLocation],[useSelector, useDispatch]

export const App = () => {
  // let counter = 0
  const [counter, setCounter] = useState(0)
  const increase = ()=>{
    setCounter (counter + 1)
  }

  const decrease = ()=>{
    setCounter (counter - 1)
  }
  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Product/>
    </>
  )
}

export default App