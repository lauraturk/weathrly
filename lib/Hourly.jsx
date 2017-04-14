import React from 'react';
import HourCard from './HourCard'



const Hourly = ({ hourly }) =>    {
  return (
    <section id="hourly">
      <h3>Hourly Forecast</h3>
      <div>
        {hourly.map((hour) => {
          return (
            <div key={hour.time}>
              <HourCard
                hour = {hour.time}
                condition = {hour.condition}
                temp = {hour.tempE}
                // low = {hour.low}
                icon = {hour.icon}
              />
            </div>
          )
        })}
      </div>
    </section>
  )

}

export default Hourly;
