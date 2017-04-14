import React from 'react';


export default function Conditions ({conditions})  {
  return (
    <div>
      <img src={conditions.icon}/>
      <div className="condition-location">{conditions.location}</div>
      <div className="condition-temp-f">{conditions.tempF}</div>
      <div className="condition-status">{conditions.status}</div>
    </div>
  );
}
