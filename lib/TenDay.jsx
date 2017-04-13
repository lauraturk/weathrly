import React from 'react';
import DayCard from './DayCard'



const TenDay = ({ weather }) =>    {
  return (
    <section id="ten-day">
      <h3>Ten Day Forecast</h3>
      <div>
        {weather.map((day) => {
          return (
            <div>
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
