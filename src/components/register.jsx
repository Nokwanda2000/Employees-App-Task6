import { useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const local = {
  name,
  email,
  password,
  phone,
  position,

}; 



function Register(){

  const[name,setName] = useState("")
// console.log("this is the name&Surname value:",name);

const[email,setEmail]= useState("")
// console.log("this is the email value:", email);

const[password,setPassword] = useState("")
// console.log("this is the password value:", password);


const[phone,setPhone] = useState("")
// console.log("this is the phone value:", phone)

const[position,setPosition] = useState("")
// console.log("this is the employee position value:",position);

  localStorage.setItem(local,"employees");
  console.log(localStorage.getItem(local));

  


const handleSubmit = ()=>{
const employeeData= {
  name,
  email,
  password,
  phone,
  position,

}; 

let employees = localStorage.getItem(local);
if (employees) {
  employees = JSON.parse(employees);
  employees.push(employeeData);
} else {
  employees = [employeeData];
}
localStorage.setItem(local, JSON.stringify(employees));
alert("Employee registered successfully!");

}
  
  return( <>
        <div id="Reg" style={{
            width:"400px",
            height:"400px",
            backgroundColor:"whitesmoke",
            marginLeft:"600px",
            marginTop:"400px",
            borderRadius:"10px",
            position:"relative",
            alignContent: "centre",
            alignItems:"centre",
            
        }}>
        <div> <h1 style={{
                alignItems:"center",
                alignContent:"center",
                fontStyle:"normal",
                color:"green",
                
                marginLeft:"100px",
                
            }}>REGISTER</h1>


<div  className="underline"></div>
</div>

<div className="inputs" 
>
  <div className="input">
  <IoPerson />
    Name & Surname
  
    <br></br>
  <img src=""></img>
  <input type="text" alt=""
  value={name}
  onChange={e => setName(e.target.value)}>
  
  </input>
</div>
<br></br>

<div className="input"> 
<MdAttachEmail />
  Email
  <br></br>
  <img src="" alt=""></img>
  <input type="email"
   value={email}
   onChange={e => setEmail(e.target.value)}>
  </input>
</div>
<br></br>

<div className="input">
<RiLockPasswordFill />
  Password
  <br></br>
  <img src="" alt=""></img>
  <input type="password"
   value={password}
   onChange={e => setPassword(e.target.value)}></input>
</div>
<br></br>

<div className="input">
<FaPhoneAlt />
  Phone
  <br></br>
  <img src="" alt=""></img>
  <input type="password"
   value={phone}
   onChange={e => setPhone(e.target.value)}></input>
</div>
<br></br>

<div className="input">
<MdContacts />
   Employee Position
  <br></br>
  <img src="" alt=""></img>
  <input type="password"
   value={position}
   onChange={e => setPosition(e.target.value)}></input>
  
</div>
</div>
<br></br>
<div className="submit-container">
  <div className="submit">
    <button style={{
      
    }}
    
 onClick={handleSubmit}   >Register</button>
    <button>Login</button>
    </div>
</div>

</div>

</>



  
  
        
  
  
  

  )
}
export default Register;