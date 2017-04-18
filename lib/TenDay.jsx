import React from 'react';
import DayCard from './DayCard';

const TenDay = ({ tenDayWeather }) => {
  return (
    <section id="ten-day">
        {tenDayWeather.map((day) => {
          return (
            <div
              className="ten-day-container"
              key={day.date}>
              <DayCard
                date = {day.date}
                condition = {day.condition}
                high = {day.high}
                low = {day.low}
                icon = {day.icon}
              />
            </div>
          );
        })}
    </section>
  );
};

export default TenDay;
