import React from 'react';
import DisplayResult from './DisplayResult.jsx';

const SearchResults = ({results}) => {
  // console.log(Array.isArray(props.results))
  return(

  <div>
    <div className="title2">Results:</div>
    {results.map((event, i) => {
    return <DisplayResult description={event.description} date={event.date}key={i}/>})}
    <br></br>
  </div>
  )
};

export default SearchResults;