import React from 'react';
import { products } from './products'; // Make sure this is correctly imported

const Product = ({ productData, setProductData }) => {
  const filterByCategory = (category) => {
    const newProduct = products.filter((data) => data.category === category);
    console.log(newProduct);
    setProductData(newProduct);
  };

  return (
    <>
      <div>
        <button onClick={() => filterByCategory("Electronics")}>Electronics</button>
        <button onClick={() => filterByCategory("Sportswear")}>Sportswear</button>
        <button onClick={() => filterByCategory("Kitchenware")}>Kitchenware</button>
        <button onClick={() => filterByCategory("Office Supplies")}>Office Supplies</button>
        <button onClick={() => filterByCategory("Books")}>Books</button>
      </div>
      <div>
        {productData.map((data) => (
          <div key={data.id} style={{ backgroundColor: 'blueviolet', textAlign: 'center', margin: '10px', padding: '10px' }}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h3>{data.category}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
