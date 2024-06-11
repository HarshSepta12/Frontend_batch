import React from 'react'

const product = ({title, description, price,image}) => {
  return (
    <div
    style={{
        textAlign:'center',
        width:'80%',
        margin: 'auto',
        border: '1px solid yellow',
        padding: '10px',
        marginBlock: '10px'
    }}>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{price}</h1>
        <img src={image} alt="img" width={200}/>
    </div>
  )
}

export default product

// title description img price 