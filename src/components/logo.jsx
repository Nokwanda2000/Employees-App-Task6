import Image from './image.png'


function Logo(){
    return(

    <>
    <div className="search">
<input type="text" className='tt' placeholder="Search.." />
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