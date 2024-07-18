import { useState } from 'react'
import Footer from './components/footer'
import Logo from './components/logo'
import Myteam from './components/my team'
import Register from './components/register'
import Search from './components/search'
import handleSubmit from './components/register';
import './App.css'

function App() {
 

  return (
    <>
    

      <section><Search/></section>
      <section><Register/></section>
      <section><Myteam/></section>
      <section><Logo/>
      
      </section>
      <section><Footer/></section>
    </>
  )
}

export default App
