import React from "react";

function UserInfoCard({userData}){
  return(
    <div className = "datacontainer">
      {userData.avatar_url ? (<div className="dataitem"><img src={userData.avatar_url} /></div>):(<div></div>)}
      {userData.name ? (<div className="dataitem">Name : {userData.name}</div>):(<div></div>)}
      {userData.blog ? (<div className="dataitem">Blog: {userData.blog}</div>):(<div></div>)}
    </div>
  );
}

export default UserInfoCard;