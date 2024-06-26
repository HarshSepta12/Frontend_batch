import React from 'react'

const ShowData = ({data, deleteItem}) => {
  
  return (
    <div style={{width:'650px', margin:'auto'}}>
     {data?.map((e)=><div key={e.id} className='bg-dark text-center text-light my-5 p-3'
     style={{
      textAlign: "center",
      backgroundColor:"green",
      padding: "10px", 
      margin:"15px",
      borderRadius: "10px",
      border:"2px solid black"
     }}
     >
      <h2>{e.id}</h2>
     <h3>{e.title}</h3>
     <h3>{e.description}</h3>
     <button className='btn btn-info mx-3'>Add</button>
     <button className='btn btn-danger mx-3' onClick={() => deleteItem(e.id)}>Delete</button>
     </div>)}
    </div>
  )
}

export default ShowData;
