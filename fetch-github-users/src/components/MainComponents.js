import React, {useState, useEffect, useRef} from "react";
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard";
import LocalStorage from "./LocalStorage";


// Using a Map here, since we require constant time access and deletion capability
if(!localStorage.getItem("sD")){
  localStorage.setItem("sD",JSON.stringify(new Object()));
}
// var storedData = JSON.parse(localStorage.getItem("sD") || "{}");

function Main(){
  const [username,setUsername] = useState("");
  const [userData, setUserData] = useState(Object);
  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("sD")));
  // console.log(storedData)
  useEffect(() => {
    getUserData();
  }, [username]);

  useEffect(() => {
    if(Object.keys(userData).length!==0 && userData.message!=="Not Found" && !(userData.login in storedData) ){
      storedData[userData.login] = userData;
      localStorage.setItem("sD",JSON.stringify(storedData))
      alert(`User ${userData.login} added to Local Storage.`)
    }
    setStoredData(JSON.parse(localStorage.getItem("sD")))
  }, [userData]);

  useEffect(()=>{
    console.log()
  },[storedData])
  var gitHubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if(jsonData && jsonData.message!=="Not Found"){
      setUserData(jsonData);
    }
    else if(username!==""){
      console.log('Username does not exist');
    }
    else{
      setUserData({})
    }
  };
  return(
    <div>
      <SearchBar username= {username} setUsername = {setUsername}  />
      <UserInfoCard userData = {userData} />
      <h2>Local Storage</h2>
      <LocalStorage storedData = {storedData} setStoredData = {setStoredData} />
    </div>
  );

}

export default Main;