import React from 'react'
import Movie from './Movie'
import Superman2Spiderman from './Superman2Spiderman'
import Data from './Data'


const App = () => {
  return (
    <>
      {/* <Movie movieName= "Jani Dushman Ek Anokhi Khani" Actor= "All Bollowod" Release= "1989"/>
      <Movie movieName= "Ham" Actor= "Amitabh, Govinda, Rajnikant" Release= "1989"/>
      <Movie movieName= "Hunter" Actor= "MAin khud tha" Release= "2014"/>
      <Movie movieName= "Swarkar" Actor= "Deepak Hooda" Release= "2024"/> */}
      {/* <Superman2Spiderman/> */}
      <Data id="01" MobileName="Samsung" modal = "Galaxy Fold" launchDate= "2023"/>
      <Data id="02" MobileName="Vivo" modal = "X80" launchDate= "2023"/>
      <Data id="03" MobileName="Oppo" modal = "F27 pro +" launchDate= "2022"/>
      <Data id="04" MobileName="Mi" modal = "Note 13 pro max" launchDate= "2024"/>
    </>
  )
}

export default App
