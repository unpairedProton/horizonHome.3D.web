import React from 'react'
import Router from './utils/Router'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <main className='flex flex-col' >
      <Navbar></Navbar>
      <Router></Router>
    </main>
  )
}

export default App