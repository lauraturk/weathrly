const scrubData = (data) => {
  return {
    tenDayWeather: scrubDataTenDay(data),
    conditions: scrubDataConditions(data),
    hourly: scrubDataHourly(data)
  }
}


const scrubDataConditions = (data) => {
    return {
      status: data.current_observation.weather,
      location: data.current_observation.display_location.full,
      tempF: data.current_observation.temp_f,
      tempC: data.current_observation.temp_c,
      icon: data.current_observation.icon_url
    }
  }

const scrubDataHourly = (data) => {
    return data.hourly_forecast.map((hour) => {
      return {
        time: hour.FCTTIME.civil,
        tempE: hour.temp.english,
        tempM: hour.temp.metric,
        condition: hour.condition,
        icon: hour.icon_url
      }
    })
  }

const scrubDataTenDay = (data) => {
    return data.forecast.simpleforecast.forecastday.map( ( day ) => {
      return {
        date: day.date.pretty,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit,
        condition: day.conditions,
        icon: day.icon_url
      }
    })
  }

export default scrubData
