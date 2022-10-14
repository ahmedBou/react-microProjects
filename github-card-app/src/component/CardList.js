import React from 'react';
import Card from "./Card";

const CardList = ({data}) => {
    // const datafilter = data.filter(profile=> profile.name === )
    console.log('cardlist', data);
    return(
        <>
            {
                data.map((profile)=> <Card key={profile.name} profile={profile}/>)
            };
        </>
    )
}

export default CardList;