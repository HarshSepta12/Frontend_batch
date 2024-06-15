import React from 'react'

const Movie = (props) => {
        
    
  return (
    <>
      <h1>MovieName: {props.movieName}</h1>
      <h1>MovieActor: {props.Actor}</h1>
      <h1>MovieRelease: {props.Release}</h1>
      <hr />
    </>
  )
}

export default Movie
