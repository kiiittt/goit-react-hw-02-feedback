import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <p className={css.statistic}>Good: {good}</p>
    <p className={css.statistic}>Neutral: {neutral}</p>
    <p className={css.statistic}>Bad: {bad}</p>
    <p className={css.statistic}>Total: {total}</p>
    <p className={css.statistic}>Positive feedback: {positivePercentage}%</p>
  </div>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btns}>
    {options.map(option => (
      <button
        key={option}
        className={css.btn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export const Section = ({ title, children }) => (
  <div className={css.titles}>
    <p className={css.title}>{title}</p>
    {children}
  </div>
);

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className={css.notification}>
        <p>{message}</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
