import Image from './image.png'


function Logo(){
    return(

    <>
     <div style={{
      width:"200px",
      height:"200px",
      // backgroundColor:"red",
      top:"-830px",
      position:"relative"
     }}>
    <img id="Image" src={Image}></img>
    </div>
 <div class="topnav">
 
  <a class="active" href="#home">Home</a>
  <a href="#">Updates</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.." />

</div>

    
    
    </>
    )
}
export default Logo;