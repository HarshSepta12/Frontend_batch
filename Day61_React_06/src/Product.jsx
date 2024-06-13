import React from 'react'
import { useState } from 'react'
const Product = () => {
    const [product, setProduct] = useState("Sony Xperia")

    const samsung = () =>{
        setProduct ("Samsung Galaxy Tab")
    }
    const Vivo = () =>{
        setProduct ("Vivo X100")
    }
  return (
    <>
    <h1>Product: {product}</h1>
    <button onClick={samsung}>Samsung</button>
    <button onClick={Vivo}>Vivo</button>
    </>
  )
}

export default Product