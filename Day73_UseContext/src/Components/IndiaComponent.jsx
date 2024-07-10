import React from 'react'
import StateComponent from './StateComponent'


const IndiaComponent = ({money}) => {
  return (
    <>
      <h1>Money from India Govt.{money}</h1>
      <StateComponent money={money}/>
    </>
  )
}

export default IndiaComponent
