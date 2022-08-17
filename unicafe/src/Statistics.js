import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ feed, all, average, positive }) => {


  if (all === 0) {
    console.log('hello');

    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {

    return (
      <>
        <h1>statistics</h1>

        <StatisticLine good={feed.good} />
        <StatisticLine neutral={feed.neutral} />
        <StatisticLine bad={feed.bad} />
        <StatisticLine all={all} />
        <StatisticLine neutral={average} />
        <StatisticLine positive={positive} />

      </>
    );
  }
};

export default Statistics;