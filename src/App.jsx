import React from 'react';
import { useState } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const totalStat = () => {
    return good + neutral + bad;
  };

  const total = totalStat();

  const positivePercent = () => {
    return Math.round((good * 100) / total);
  };

  const stateNames = Object.keys({ good, neutral, bad });
  const totalPercentage = positivePercent();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateNames}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={totalPercentage}
          />
        ) : (
          <Notification message="No feedback yet, you can be the first one :)" />
        )}
      </Section>
    </>
  );
};
