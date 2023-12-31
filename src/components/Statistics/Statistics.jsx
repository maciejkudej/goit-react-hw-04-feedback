import PropTypes from 'prop-types';
import css from './Statistics.module.scss';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul className={css.stat__list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li className={css.stat__positive}>Positive feedback: {positive}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
