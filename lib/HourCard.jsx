import React from 'react';

const HourCard = ({hour, condition, temp, icon}) => {
  return (
    <section>
      <h4>{hour}</h4>
      <img src={icon}/>
      <h4>{condition}</h4>
      <h4>{temp}</h4>
    </section>
  )
}

export default HourCard;
