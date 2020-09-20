import React from 'react';
import styles from '../ScoreHeaders.css';
import Scores from './Scores.jsx';


const ScoreHeader = () => {
  return(
    <div className={styles.card}>
      <div className={styles.names}>Name</div>
      <div className={styles.frames}>1</div>
      <div className={styles.frames}>2</div>
      <div className={styles.frames}>3</div>
      <div className={styles.frames}>4</div>
      <div className={styles.frames}>5</div>
      <div className={styles.frames}>6</div>
      <div className={styles.frames}>7</div>
      <div className={styles.frames}>8</div>
      <div className={styles.frames}>9</div>
      <div className={styles.totals}>Total</div>

    </div>
  )
}

export default ScoreHeader;