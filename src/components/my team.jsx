function Myteam(){
  return( 


    <div className="Team" style={{
        backgroundColor:"white",
        width:"500px",
        height:"400px",
        marginTop:"-410px",
        borderRadius:"20px",
        marginRight:"20px",
        alignContent:"center"



    }}>
        <h1 style={
            { color:"green",
                marginLeft:"190px"
            }
        } id="back">My Team</h1>


              <div className="Add">
          <button className="new">Add New Employee</button>
          </div>
        {/* <div className="employees">
        <div className="emp1">
          <img></img>
          <h1>Employee1</h1>

        </div>


<div className="empl2">
  <img></img>
  <h1>Employee2</h1>
</div>



<div>
  <img></img>
  <h1>Employee3</h1>
</div>
        </div> */}

<br></br>
<div className="btn">
<button style={{
  backgroundColor:"greenyellow",
  borderColor:"white",
  height:"40px",
  width:"100px",
  borderRadius:"10px",
  marginRight:"-30px"
}}>Edit</button>

<button style={{
  backgroundColor:"red",
  borderColor:"white",
  height:"40px",
  width:"100px",
  borderRadius:"10px",
  marginLeft:"30px"
}}>Delete</button>
</div>
    </div>
    
    
  )
}
 export default Myteam;