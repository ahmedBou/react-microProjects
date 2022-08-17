import React, { useEffect, useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';


function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const [allfeed, setAllfeed] = useState(0);
  const [average, setAverage] = useState(0);
  const [ppositive, setPpositive] = useState(0);

  const goodFeedback = () => {
    const newFeedBack = { ...feedback, good: feedback.good + 1 };
    setFeedback(newFeedBack);
  };
  const neutralFeedback = () => {
    const newFeedBack = { ...feedback, neutral: feedback.neutral + 1 };
    setFeedback(newFeedBack);
  };
  const badFeedback = () => {
    const newFeedBack = { ...feedback, bad: feedback.bad + 1 };
    setFeedback(newFeedBack);
  };
  // const all = feedback.good + feedback.neutral + feedback.bad;
  // console.log("all",all);
  const all = feedback.good + feedback.neutral + feedback.bad;
  const allFeedBack = () => {

    console.log('all is' + all);
    setAllfeed(all);
  };
  console.log('allfeed' + allfeed);

  const averageFeed = () => {
    const average = ((feedback.good * 1) + (feedback.neutral * 0) + (feedback.bad * (-1))) / all;
    console.log('average is', average);
    setAverage(average);

  };
  const percentagePositive = () => {
    const ppositive = (feedback.good / all) * 100.0;
    setPpositive(ppositive);
  };


  return (
    <>
      <h1>Give feedback </h1>

      <Button good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
              all={allFeedBack}
              average={averageFeed}
              positive={percentagePositive}
      />


      <Statistics feed={feedback}
                  all={allfeed}
                  average={average}
                  positive={ppositive}
      />


    </>
  );

}

export default App;
