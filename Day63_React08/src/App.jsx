import React, {useState} from 'react'
import Movie from './Movie';
import {movies} from './data'
import {products} from './products'
import Product from './Product';

const App = () => {
 
  // const [movieData, setMovieData] = useState(movies)
  const [productData, setProductData] = useState(products)
  
  return (
    <>
     {/* <Movie movieData={movieData} setMovieData = {setMovieData}/> */}
    
    <Product productData={productData} setProductData = {setProductData}/>

    </>
  )
}

export default App
