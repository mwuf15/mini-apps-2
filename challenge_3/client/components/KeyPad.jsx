import React from 'react';
import styles from '../KeyPad.css';

const KeyPad = ({click}) => {
  return (
    <div className={styles.pad}>
      <button onClick={click} className={styles.one} value={1}>1</button>
      <button onClick={click} className={styles.two} value={2}>2</button>
      <button onClick={click} className={styles.three} value={3}>3</button>
      <button onClick={click} className={styles.four} value={4}>4</button>
      <button onClick={click} className={styles.five} value={5}>5</button>
      <button onClick={click} className={styles.six} value={6}>6</button>
      <button onClick={click} className={styles.seven} value={7}>7</button>
      <button onClick={click} className={styles.eight} value={8}>8</button>
      <button onClick={click} className={styles.nine} value={9}>9</button>
      <button onClick={click} className={styles.ten} value={10}>10</button>
      <button onClick={click} className={styles.zero} value={0}>0</button>
      <button onClick={click} className={styles.empty}></button>
    </div>

  )
}

export default KeyPad;