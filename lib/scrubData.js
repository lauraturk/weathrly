const scrubCurrentForecast = (data) => {
  return {
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    forecast: data.forecast.txt_forecast.forecastday[0].fcttext,
    weekday: data.forecast.simpleforecast.forecastday[0].date.weekday,
    month: data.forecast.simpleforecast.forecastday[0].date.monthname,
    day: data.forecast.simpleforecast.forecastday[0].date.day,
  };
};

const scrubDataConditions = (data) => {
  return {
    status: data.current_observation.weather,
    location: data.current_observation.display_location.full,
    tempF: data.current_observation.temp_f,
    tempC: data.current_observation.temp_c,
    icon: data.current_observation.icon_url,
  };
};

const scrubDataHourly = (data) => {
  let sevenHours = data.hourly_forecast.filter((val, i) => {
    return i < 7;
  });

  return sevenHours.map((hour) => {
    return {
      time: hour.FCTTIME.civil,
      tempE: hour.temp.english,
      tempM: hour.temp.metric,
      condition: hour.condition,
      icon: hour.icon_url,
    };
  });
};

const scrubDataTenDay = (data) => {
  return data.forecast.simpleforecast.forecastday.map((day) => {
    return {
      date: `${day.date.weekday} ${day.date.monthname} ${day.date.day}`,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
      condition: day.conditions,
      icon: day.icon_url,
    };
  });
};

const scrubData = (data) => {
  return {
    tenDayWeather: scrubDataTenDay(data),
    conditions: scrubDataConditions(data),
    hourly: scrubDataHourly(data),
    currentForecast: scrubCurrentForecast(data),
  };
};


export default scrubData;
