import { useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = () => {
    const employeeData = {
      name,
      email,
      password,
      phone,
      position,
    };
  
    let employees = localStorage.getItem("employees");
    
        employees = JSON.parse(employees);
        employees.push(employeeData);
    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Employee registered successfully!");
  };


  
  return( <>
        <div id="Reg" style={{
            width:"400px",
            height:"400px",
            backgroundColor:"whitesmoke",
            marginLeft:"600px",
            marginTop:"400px",
            borderRadius:"10px",
            position:"relative",
            boxShadow:"11px 11px  #c4f1e6",
            padding:"20px"
            // alignContent: "centre",
            // alignItems:"centre",
            
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
  <input type="text"
   value={phone}
   onChange={e => setPhone(e.target.value)}></input>
</div>
<br></br>

<div className="input">
<MdContacts />
   Employee Position
  <br></br>
  <img src="" alt=""></img>
  <input type="text"
   value={position}
   onChange={e => setPosition(e.target.value)}></input>
  
</div>
</div>
<br></br>
<div className="submit-container">
  <div className="submit">
    <button style={{
      backgroundColor:"green",
      color:"white",
      border:"white",
      borderRadius:"10px",
      height: "24px",
      width: "100px",
      
    }}
    
 onClick={handleSubmit}   >Register</button>
    <button style={{
      backgroundColor:"blue",
      color:"white",
      border:"white",
      borderRadius:"10px",
      height: "24px",
      width: "100px",
     
      
    }}>Login</button>
    </div>
</div>

</div>

</>



  
  
        
  
  
  

  )
}


export default Register;