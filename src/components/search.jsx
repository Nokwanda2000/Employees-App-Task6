
import React, { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.onSearch(e.target.value);
    
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by ID"
        style={{
          width: "100%",
          height: "30px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      />
    </div>
  );
}

export default Search;