import { useState } from 'react'
import Foot from './components/Foot'
import Logo from './components/logo'
import Myteam from './components/my team'
import Register from './components/register'
import Search from './components/search'
import handleSubmit from './components/register';
import './App.css'

function App() {
 

  return (
    <>

      {/* <section><Search/></section> */}
      <section><Register/></section>
      <section><Myteam/></section>
      <section><Logo/>
      
      </section>
     

      
     
    </>
  )
}

export default App
