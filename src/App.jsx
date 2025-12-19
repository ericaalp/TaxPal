import { useState } from 'react'
import Header from './companents/Header'
import Everythingbooks from './companents/Everythingbooks'
import Everything from './companents/Everything'
import Simplfy from './companents/Simplfy'
import Footer from './companents/Footer'
import GetToday from './companents/GetToday'
import SimpleFor from './companents/SimpleFor'
import SimplifyTask from './companents/SimplifyTask'
import './App.css'

function App() {


  return (
    <>
     <Header/>
      
      <Everything/>
      <SimplifyTask/>
      <GetToday/>
      <Simplfy/>
      <SimpleFor/>
      <Footer/> 
    </>
  )
}

export default App
