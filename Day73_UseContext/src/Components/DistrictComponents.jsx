import React from 'react';
import BlockComponents from './BlockComponents'


const DistrictComponents = ({money}) => {
  return (
    <>
      <h1>Money from District Govt.{money}</h1>
      <BlockComponents money={money}/>
      
    </>
  )
}

export default DistrictComponents
