import React from 'react';
import SearchResults from './SearchResults.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TenHistory: [],
      value: '',
      results: false,
      offset: 0,
      perPage: 10,
      currentPage: 0,
      data:[],

    }
    // this.getresults = this.getresults.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getresults() {
    // e.preventDefault();
    // console.log('value',this.state.value)
    axios.get(`http://localhost:3000/events?q=${this.state.value}&_limit=10`)
    .then((response) => {
      console.log('response',response.data);
      this.setState({TenHistory: response.data})
    })
    .catch((err) => {
      console.log('err', err)
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log('click');
    this.getresults();
    this.setState({results: true})
  }

  handlechange(e) {
  e.preventDefault();
  // console.log(e.target.value);
  this.setState({value: e.target.value});
}

render() {

    let isloaded = this.state.results;
    if(isloaded) {
      return (
      <div className="result">
        <SearchResults results={this.state.TenHistory}/>
      </div>
      );
    } else if (!isloaded) {
      return (
    <div className="container">
      <div className="title">TimeMachine</div>
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Enter a Historic event:
          <input type="text" name="name" onChange={this.handlechange}/>
        </label>
        <input className="button" type="submit" value="let's hit 88mph" />
      </form>
    </div>
      );
    }


}

}

export default App;