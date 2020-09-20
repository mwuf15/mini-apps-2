import React from 'react';
import KeyPad from './KeyPad.jsx';
import ScoreHeaders from './ScoreHeaders.jsx';
import Scores from './Scores.jsx';
import styles from '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked', e.target.value);
  }

  render() {
    return (
      <div className={styles.container}>
        <ScoreHeaders />
        <Scores />
        <br></br>
        <KeyPad click={this.handleClick}/>

      </div>
    )
  }
}

export default App;