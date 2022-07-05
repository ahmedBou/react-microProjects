import './seasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';

const seasonConfig = {
  summer : {
    display: " go to the bitch",
    iconName : 'sun'
  },
  winter: {
    display: "It\'s chilly ",
    iconName : "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};


const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const display = season === 'winter' ? 'It\'s chilly' : 'go to the bitch';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  const {display, iconName} = seasonConfig[season]
  return <div className={ `season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`}/>
    <h1>{display}</h1>
    <i className={`icon-right massive ${iconName} icon`}/>

  </div>;
};


ReactDOM.render(<Season />, document.querySelector('#root'));

export default Season;