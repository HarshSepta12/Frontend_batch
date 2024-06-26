import  {useState} from 'react'

const htmlForm = ({setData,data}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // console.log("Outside submit handler ", data);

  const submitHandler = (e) =>{
    e.preventDefault();
    const obj = {id:Math.floor(Math.random()), title, description};
    setData([...data, obj]);
    setTitle(" ");
    setDescription(" ")
  }
  return (
    <>
     <div className="container my-5">
      <form  onSubmit={submitHandler}>
        <div className="row d-flex justify-content-centent align-items-center">
          <div className='col-md-5'>
            <input type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)}/>
            </div>

          <div className='col-md-5'>
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="col-md-2">
            <button className=" btn btn-primary" vlaue="Add">Add</button>
            </div>
            
        </div>
      </form>
     </div>
    </>
  )
}

export default htmlForm;
