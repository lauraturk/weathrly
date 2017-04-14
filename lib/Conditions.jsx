import React from 'react';


export default function Conditions ({conditions})  {
  return (
    <div>
      <img src={conditions.icon}/>
      <div>{conditions.location}</div>
      <div>{conditions.tempF}</div>
      <div>{conditions.status}</div>

    </div>
  );
}
