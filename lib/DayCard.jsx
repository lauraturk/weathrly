import React from 'react';

const DayCard = ({ date, condition, high, low, icon }) => {
  return (
    <section className="day-card">
      <h4 className="day-card-date">{date}</h4>
      <img className="day-card-icon" src={icon}/>
      <h4 className="day-card-condition">{condition}</h4>
      <div className="day-card-temps">
        <h4 className="day-card-high">{high}°</h4>
        <h4 className="day-card-low">{low}°</h4>
      </div>
    </section>
  );
};

export default DayCard;
