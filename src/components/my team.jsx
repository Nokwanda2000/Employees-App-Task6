import React, { useState } from "react";

function Myteam() {
  //an array of employees objects,initialized from local storage//
  const [List, setList] = useState(JSON.parse(localStorage.getItem("employees")));

  //the index of the employee being edited, or null if no employee being edited.
  const [editing, setEditing] = useState(null);

  //the search term entered by the user.
  const [searchTerm, setSearchTerm] = useState("");

  //the filtered list of employees based on the search term
  const [filteredEmployees, setFilteredEmployees] = useState(List);


  //function, sets the editing state to the index of the of the employee being edited.//
  const handleEdit = (index) => {
    setEditing(index);
  };

  //Function Updates the employee object at the edited index ,saves the updated list to local storage,
   //and resets the editing state.//
  const handleSave = (index) => {
    const updatedList = [...List];
    updatedList[index].name = document.getElementById(`name-${index}`).value;
    updatedList[index].position = document.getElementById(`position-${index}`).value;
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    setEditing(null);
  };

  //fuction, removes the employee at the specified index from the list,saves the updated list
  // to local storage, and reloads the page.//
  const handleDelete = (index) => {
    console.log(`Delete button clicked for employee ${List[index].name}`);
    const updatedList = List.filter((employee, i) => i !== index);
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    window.location.reload();
  };

  //function for Search updates the searchTerm state and filters the list array based on the search term.//
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = List.filter((employee) => {

      return employee.id.toString().includes(e.target.value);
      
    });
    setFilteredEmployees(filteredList);
  };

  return (
    <div className="Team" style={{
      backgroundColor: "white",
      width: "100%",
      height: "600px",
      marginTop: "-410px",
      borderRadius: "20px",
       marginLeft:"140px",
      padding:"60px",
      boxShadow:"11px 11px rgb(124, 151, 142",
       borderStyle:"solid",
       borderColor:"green"
    }}>
      <h1 style={{
        color: "green",
        
        marginLeft: "150px",
      }} id="back">My Team</h1>
      <br></br>
      <br></br>

      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by ID" style={{
        width: "100%",
        height: "30px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "20px"
      }}/>

      <ul style={{
        position:"absolute",
        marginTop:"40px"
      }}>
        {filteredEmployees.map((input, index) => (
          <li key={index}>
            {editing === index ? (
              <input id={`name-${index}`} type="text" defaultValue={input.name} placeholder="name" />
            ) : (
              <span>{input.name}</span>
            )}
          
            ({editing === index ? (
              <input id={`position-${index}`} type="text" defaultValue={input.position} placeholder="position" />
            ) : (
              <span>{input.position}</span>
            )})

            ({editing === index ? (
              <input  id={`email-${index}`} type="text" defaultValue={input.email} placeholder="email" />
            ) : (
              <span 
              >{input.email}</span>
            )})

              ({editing === index ? (
              <input  id={`password-${index}`} type="text" defaultValue={input.password} placeholder="password" />
            ) : (
              <span 
              >{input.password}</span>
            )})     
            <br></br>
            <div className="btn">
              {editing === index ? (
                <button style={{
                  backgroundColor: "greenyellow",
                  borderColor: "white",
                  height: "20px",
                  width: "100px",
                  borderRadius: "10px",
                  marginRight: "-30px",
                  color:"green"
                }} onClick={() => handleSave(index)}>Save</button>
              ) :
              
            
              (
                
                <button style={{
                  backgroundColor: "greenyellow",
                  borderColor: "white",
                  height: "20px",
                  width: "100px",
                  borderRadius: "10px",
                  marginRight: "-30px",
                  color:"green"
                }} onClick={() => handleEdit(index)}>Edit</button>
              )}
              <button style={{
                backgroundColor: "red",
                borderColor: "white",
                height: "20px",
                width: "100px",
                borderRadius: "10px",
                marginLeft: "30px",
                color:"white"
              }} onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Myteam;