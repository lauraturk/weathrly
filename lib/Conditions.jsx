import React from 'react';
import conditionStyles from './conditionStyles'


export default function Conditions ({conditions})  {
  return (
    <div className="conditions">
      <div>{console.log(conditions, ' trial')}</div>
      <div className="condition-location">{conditions.location}</div>
      <div className='hidden'>{conditionStyles(conditions )}</div>
      <div className="condition-temp-f">{conditions.tempF}</div>
      <img className="condition-img"src={conditions.icon}/>
      <div className="condition-status">{conditions.status}</div>
    </div>
  );
}
