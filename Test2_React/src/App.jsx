import React, { useEffect } from 'react'
import './App.css'
import FirstSection from './Components/FirstSection'
import SeconSection from './Components/SeconSection'
import ThirdSection from './Components/ThirdSection'
import Aos from "aos";
import "aos/dist/aos.css"
import Fourth from './Components/Fourth'

const App = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className="container w-50 text-center border">
      <div className="row">
        <div className="col-sm-12">
         <FirstSection/>
        </div>
        <div className="col-sm-12 bgc mt-5">
          <SeconSection/>
        </div>
        <div className="cold-sm-12 mt-3">
          <ThirdSection/>
        </div>
        <div className="col-md-12 mt-3">
          <Fourth/>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
