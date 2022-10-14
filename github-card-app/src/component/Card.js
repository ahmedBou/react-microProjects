import React from 'react';

const Card = ({profile}) => {
    const dataCard = profile;
    return(
        <div>
            <img src={dataCard.avatar_url} alt="dataCard.name" style={{width:100, height:100}}/>
            <h2>{dataCard.name}</h2>
            <p>{dataCard.company}</p>
        </div>
    )
}

export default Card;