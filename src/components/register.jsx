import { useState } from "react";
import Form from 'react-bootstrap/form' 

function Register(){

  // const [firstName, setfirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  
  return( <>
        <div id="Reg" style={{
            width:"400px",
            height:"400px",
            backgroundColor:"darkgrey",
            marginLeft:"600px",
            marginTop:"400px",
            borderRadius:"10px"
        }}>
        <div> <h1 style={{
                alignItems:"center",
                alignContent:"center",
                
                marginLeft:"60px"
            }}>REGISTER</h1>
</div>

<div className="underline"></div>
</div>

<div className="inputs">
  <div className="input">
  <img src=""></img>
  <input type="text" alt=""></input>
</div>

<div className="input">
  <img src="" alt=""></img>
  <input type="email"/>
</div>

<div className="input">
  <img src="" alt=""></img>
  <input type="password"/>
</div>
</div>

<div className="submit-container">
  <div className="submit">Sign Up</div>
</div>
<form>
{/* 
<form.Group className="mb-3">
            <form.Label>First name</form.Label>
            <form.Control onChange={(e) => {setfirstName(e.target.value)}} type="text" name="firstName" placeholder= "Enter first name"/>
</form.Group>

<form.Group className="mb-3">
            <form.Label>Last name</form.Label>
            <form.Control onChange={(e) => {setLastName(e.target.value)}} type="text" name="LastName" placeholder= "Enter Last name"/>
</form.Group>

<form.Group className="mb-3">
            <form.Label>Email Address</form.Label>
            <form.Control onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder= "Enter Email"/>
            <form.Text className= "text-muted">
                We will nwver share your email with anyone else
            </form.Text>
</form.Group>

<form.Group className="mb-3">
            <form.Label>Password</form.Label>
            <form.Control onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder= "Password"/>
</form.Group> */}



</form>



  
  
        
  
  
  </>

  )
}
export default Register;