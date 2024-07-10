import React from 'react';
import PanchayatComponents from './PanchayatComponents'

const BlockComponents = ({money}) => {
  return (
    <>
      <h1>Money from Block Govt.{money}</h1>
      <PanchayatComponents money={money}/>
    </>
  )
}

export default BlockComponents
