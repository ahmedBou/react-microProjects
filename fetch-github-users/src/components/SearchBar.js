import React from "react";

function SearchBar({username, setUsername}){
  var inputname = "";
  const onChange = () =>{
    setUsername(inputname.value)
  }
  return(
    <div className="searchbar">
      <input
        type="text"
        ref={(a) => {
          inputname = a;
        }}
        onChange={() => {onChange()}}
        onKeyUp={()=> {onChange()}}
        onPaste={()=> {onChange()}}
        onInput={()=> {onChange()}}
      />
    </div>
  );
}

export default SearchBar;