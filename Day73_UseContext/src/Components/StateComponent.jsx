import React from 'react';
import DistrictComponents from './DistrictComponents'


const StateComponent = ({money}) => {
  return (
    <div>
      <h1>Money from State Govt.{money}</h1>
      <DistrictComponents money={money}/>
    </div>
  )
}

export default StateComponent
