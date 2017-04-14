import React from 'react';
import conditionStyles from './conditionStyles'

/* <div className='hidden'>{conditionStyles(conditions )}</div> */
/* <div>{console.log(conditions, ' trial')}</div> */

export default function Conditions ({conditions})  {
  return (
    <div className="conditions">
      <div className="condition-location">{conditions.location}</div>
      <div className="condition-temp-f">{conditions.tempF}</div>
      <img className="condition-img"src={conditions.icon}/>
      <div className="condition-status">{conditions.status}</div>
    </div>
  );
}
