import './App.css';
import CardList from "./component/CardList";
import Form from "./component/Form";
import {useState} from "react";

// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];


function App() {

    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (profileData)=>{
        // console.log(profileData)
        setProfiles([...profiles, profileData]);
    }

    return (

        <div>
            <h2>The Github Cards App </h2>
            <Form onSubmit={addNewProfile}/>
            <CardList data={profiles} />
        </div>
    );
}

export default App;
