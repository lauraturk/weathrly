import React from 'react';

const DayCard = ({date, condition, high, low, icon}) => {
  return (
    <section className="day-card">
      <h4>{date}</h4>
      <img src={icon}/>
      <h4>{condition}</h4>
      <h4>{high}°</h4>
      <h4>{low}°</h4>
    </section>
  )
}

export default DayCard;
