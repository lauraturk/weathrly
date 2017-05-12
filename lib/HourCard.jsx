import React from 'react';

const HourCard = ({ hour, condition, temp, icon }) => {
  return (
    <section className="hour-card">
      <h4 className="hour-card-hour">{hour}</h4>
      <img className="hour-card-img" src={icon}/>
      <h4 className="hour-card-condition">{condition}</h4>
      <h4 className="hour-card-temp">{temp}°</h4>
    </section>
  );
};

export default HourCard;
