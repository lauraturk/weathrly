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
  let sevenHours = data.hourly_forecast.filter((val, i) => {
    return i < 7
  })
  
  return sevenHours.map((hour) => {
    return {
      time: hour.FCTTIME.civil,
      tempE: hour.temp.english,
      tempM: hour.temp.metric,
      condition: hour.condition,
      icon: hour.icon_url
    }
  })
}

// const scrubDataHourly = (data) => {
//   let hours = []
//
//   for (let i = 0; i < 7; i++){
//     hours.push( {
//       time: data.hourly_forecast[i].FCTTIME.civil,
//       tempE: data.hourly_forecast[i].temp.english,
//       tempM: data.hourly_forecast[i].temp.metric,
//       condition: data.hourly_forecast[i].condition,
//       icon: data.hourly_forecast[i].icon_url
//       }
//     )
//   }
//   console.log(hours.length)
//   return hours
// }

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
