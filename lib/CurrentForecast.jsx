import React from 'react';

export default function CurrentForecast({ currentForecast }) {
  return (
    <section className="current-forecast">
      <div className="current-forecast-date">{currentForecast.weekday},
        {currentForecast.month} {currentForecast.day}</div>
      <div className="current-forecast-temps">
        <div className="current-forecast-high">{currentForecast.high}°</div>
        <div className="current-forecast-low">{currentForecast.low}°</div>
      </div>
      <div className="current-forecast-forecast">{currentForecast.forecast}</div>
    </section>
  );
}
