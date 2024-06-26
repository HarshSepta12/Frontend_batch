import React, {useState} from 'react'
import ShowData from './Components/ShowData'
import Form from './Components/Form'

const App = () => {
  const [data, setData] = useState([
    {id:1 ,title:"Superman", description: "Wondorfull Hero"},
    {id:2 ,title:"Spiderman", description: "Wondorfull Hero 2"}
  ])

  const deleteItem = (id) => {
    setData(data.filter((e) => e.id != id))
  }
  return (
    <>
      <Form setData={setData} data={data}/>
      <ShowData data={data} deleteItem={deleteItem}/>
    </>
  )
}

export default App
