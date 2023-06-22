import React, { Component } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = name => {
    this.setState(previousState => ({
      [name]: previousState[name] + 1,
    }));
  };

  totalStat = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  positivePercent = () => {
    return Math.round((this.state.good * 100) / this.totalStat());
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.totalStat() ? (
            <Statistics
              statistic={this.state}
              total={this.totalStat()}
              positive={this.positivePercent()}
            />
          ) : (
            <Notification message="No feedback yet, you can be the first one :)" />
          )}
        </Section>
      </>
    );
  }
}
