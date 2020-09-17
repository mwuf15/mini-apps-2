import React from 'react';


const DisplayResult = ({description, date}) => (
  <div>
    <li className="list">
      <span>date: {date}</span>
      <br></br>
      <span>{description}</span>
    </li>
  </div>
)

export default DisplayResult;