import React from "react";

function LocalStorage({storedData,setStoredData}){
  // console.log(storedData)
  var items = [];
  Object.entries(storedData).forEach((entry) => {
      const [key,val] = entry;
      // console.log(key);
      items.push(
        <div>
          {val.avatar_url ? (<div className="localitem"><div className= "imgcontainer"><img src={val.avatar_url} />
            <button className="btn" onClick={()=>{
              delete storedData[key];
              localStorage.setItem("sD",JSON.stringify(storedData))
              alert(`User ${key} removed from Local Storage.`)
              setStoredData(JSON.parse(localStorage.getItem("sD")))
            }}>X
            </button>
          </div></div>):(<div></div>)}
          {val.name ? (<div className="localitem">{val.name}</div>):(<div></div>)}
        </div>
      )
    }

  )
  return(
    <div className = "localcontainer">{items}</div>
  );


}

export default LocalStorage;