import React from 'react'

const Product = () => {
    const product = [
        {
            id:1,
            Title: "Mobile",
            Modal: "Vivo X100",
            menufucturing:"2024"
        },
        {
            id:2,
            Title: "Mobile",
            Modal: "iQ Note Pro",
            menufucturing:"2022"
        },
        {
            id:3,
            Title: "Mobile",
            Modal: "Samsung Galaxy Fold",
            menufucturing:"2022"
        },
        {
            id:4,
            Title: "Mobile",
            Modal: "Oppo F27 pro",
            menufucturing:"2020"
        }
    ]
  return (
    <div>
      {product.map((data) =>(
        <div
        style={
            {   
                background:"#16222a",
                textAlign:"center",
                padding: "10px",
                margin:"10px"
            }
            }>
            {/* key={data.id} */}
            <h1>{data.Title}</h1>
            <h1>{data.Modal}</h1>
            <h1>{data.menufucturing}</h1>
        </div>
      ))}
    </div>
  )
}

export default Product
