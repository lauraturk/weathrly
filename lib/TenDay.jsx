import React from 'react';
import DayCard from './DayCard'



const TenDay = ({ tenDayWeather }) =>    {
  return (
    <section id="ten-day">
      <h3>Ten Day Forecast</h3>
      <div>
        {tenDayWeather.map((day) => {
          return (
            <div key={day.date}>
              <DayCard
                date = {day.date}
                condition = {day.condition}
                high = {day.high}
                low = {day.low}
                icon = {day.icon}
              />
            </div>
          )
        })}
      </div>
    </section>
  )

}

export default TenDay;
