import Image from './image.png'

import { useState } from 'react';
function Logo(props){

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.onSearch(e.target.value);
  };
    return(

    <>
    <div className="search">
<input type="text" className='tt' placeholder="Search.."  value={searchTerm}
        onChange={handleSearch}  style={{
          width: "100%",
          height: "30px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px"
        }} />
</div>

     <div style={{
      width:"200px",
      height:"200px",
      // backgroundColor:"red",
    //   top:"-830px",
      position:"relative",
      marginTop:"-340px"
     }}>
    <img id="Image" src={Image}></img>
    </div>
 <div className="topnav">
 
  <a className="active" href="#home">Home</a>
  <a href="#">Updates</a>
  <a href="#contact">Contact</a>
  
</div>

 
    </>
    )
}
export default Logo;