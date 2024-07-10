import React from 'react';
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Carrer from './Pages/Carrer'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/carrer' element={<Carrer/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
