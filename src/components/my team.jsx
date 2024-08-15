import React, { useState } from "react";

function Myteam() {
  const [List, setList] = useState(JSON.parse(localStorage.getItem("employees")));
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(List);

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleSave = (index) => {
    const updatedList = [...List];
    updatedList[index].name = document.getElementById(`name-${index}`).value;
    updatedList[index].position = document.getElementById(`position-${index}`).value;
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    setEditing(null);
  };

  const handleDelete = (index) => {
    console.log(`Delete button clicked for employee ${List[index].name}`);
    const updatedList = List.filter((employee, i) => i !== index);
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    window.location.reload();
  };

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
      width: "500px",
      height: "400px",
      marginTop: "-410px",
      borderRadius: "20px",
      marginRight: "20px",
      padding:"20px",
      boxShadow:"11px 11px  #c4f1e6",
    }}>
      <h1 style={{
        color: "green",
        marginLeft: "190px",
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

      <ul>
        {filteredEmployees.map((input, index) => (
          <li key={index}>
            {editing === index ? (
              <input id={`name-${index}`} type="text" defaultValue={input.name} />
            ) : (
              <span>{input.name}</span>
            )}
            ({editing === index ? (
              <input id={`position-${index}`} type="text" defaultValue={input.position} />
            ) : (
              <span>{input.position}</span>
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
              ) : (
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