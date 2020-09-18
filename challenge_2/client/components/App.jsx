import React from 'react';
import axios from 'axios';
import Graph1 from './Graph1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      data: [],
      dataLables: []

    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    let url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2020-09-16';

    axios.get(url)
      .then((response) => {
        console.log(response.data);
        let bpi = response.data.bpi;
        let dataValues = Object.values(bpi);
        let dataLabel = Object.keys(bpi);
        console.log(dataValues)
        this.setState({data: dataValues, dataLables: dataLabel, apiData: response.data});
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  render() {
    return(
      <div>
        <Graph1 data={this.state.data} label={this.state.dataLables}/>
      </div>
    );
  }
}
export default App;