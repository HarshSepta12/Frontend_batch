import React from 'react'
import Person from './Person'
import Product from './Product'
const App = () => {
  return (
    <div>
      <Person name='Superman'
      email ='superman@gmail.com'
      age={200}/>
      <Person
       name='Batman'
       email ='Batman@gmail.com'
       age={100}/>
      <Person
       name='Spiderman'
       email ='spiderman@gmail.com'
       age={50}/>

       <Product title='Mobile' description= 'best mobile forever' price={120000} image='https://cdn.pixabay.com/photo/2016/02/10/16/39/girl-1192032_1280.jpg'/>
    </div>
  )
}

export default App