import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import {Home, Contact, Projects, About} from '../pages/index'

const Router = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/projects' element={<Projects/>} ></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
        </Routes>
  )
}

export default Router