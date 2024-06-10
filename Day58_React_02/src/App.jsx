import Hero from "./component/Hero";


const App = () =>{
  const name = "Superman";
  const obj = {
    course1:'React',
    course2:'Angular',
    course3:'Vue'
  }
  const arr = ['Mango', 'Banana', 'Grapes', 'Chiku', 'Papita']
  
  return (
    <>
    <Hero />
  <div>
    <h1>We are learning React {name}</h1>
    {/* {2+4} */}
    <ul>
      <li>{obj.course1}</li>
      <li>{obj.course2}</li>
      <li>{obj.course3}</li>
    </ul>

    <ol>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li>
      <li>{arr[4]}</li>
    </ol>
  </div>

  <div>
    <h1>This is another h1</h1>
  </div>
  </>
  )
}
export default App;