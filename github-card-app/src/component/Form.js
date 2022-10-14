import React, {useState} from 'react';
import axios from "axios";

const Form = ({onSubmit}) => {

    const [addCard, setAddCard] = useState("ahmed");

    const handleInput = async (e)=>{

        e.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${addCard}`);
        onSubmit(response.data);
        setAddCard(e.target.value);
        // console.log(addCard)
    }

    return(
        <div>
            <form onSubmit={handleInput}>
                <input type="text"
                       value={addCard || ""}
                       onChange={(e)=>{setAddCard(e.target.value)}}/>
                <button>Add card</button>
            </form>



        </div>
    )
}

export default Form;