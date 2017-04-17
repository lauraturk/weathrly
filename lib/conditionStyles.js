//maybe tie it to logo instead?

 const conditionStyles = (conditions)=> {

  // night clear
  if (conditions.icon.toLowerCase().includes('nt_clear')) {
    document.body.style.backgroundImage = "url('../styles/pics/clear_night.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_sunny')) {
    document.body.style.backgroundImage = "url('../styles/pics/clear_night.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_partlysunny')) {
    document.body.style.backgroundImage = "url('../styles/pics/clear_night.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_mostlysunny')) {
    document.body.style.backgroundImage = "url('../styles/pics/clear_night.jpeg')"

  //night cloudy
  } else if (conditions.icon.toLowerCase().includes('nt_cloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/cloudy_sunset.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_mostlycloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/cloudy_sunset.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_partlycloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/cloudy_sunset.jpeg')"

  //night tstorms
  } else if (conditions.icon.toLowerCase().includes('nt_chancetstorms')) {
    document.body.style.backgroundImage = "url('../styles/pics/big_lightning.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('nt_tstorms')) {
    document.body.style.backgroundImage = "url('../styles/pics/big_lightning.jpeg')"

  //snow
  } else if (conditions.icon.toLowerCase().includes('flurries')) {
    document.body.style.backgroundImage = "url('../styles/pics/flurry.jpeg')"

  } else if (conditions.icon.toLowerCase().includes('snow')) {
    document.body.style.backgroundImage = "url('../styles/pics/flurry.jpeg')"

  //rain
  } else if (conditions.icon.toLowerCase().includes('rain')) {
    document.body.style.backgroundImage = "url('../styles/pics/rain.jpeg')"

  //sleet
  } else if (conditions.icon.toLowerCase().includes('sleet')) {
    document.body.style.backgroundImage = "url('../styles/pics/sleet.jpg')"

  //tstorms
  } else if (conditions.icon.toLowerCase().includes('thick_lightning')) {
    document.body.style.backgroundImage = "url('../styles/pics/rain.jpeg')"

  //sunny
  } else if (conditions.icon.toLowerCase().includes('sunny')) {
    document.body.style.backgroundImage = "url('../styles/pics/sunny.jpeg')"

  //cloudy
  } else if (conditions.icon.toLowerCase().includes('cloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/clouds.jpeg')"

  //fog
  } else if (conditions.icon.toLowerCase().includes('fog')) {
    document.body.style.backgroundImage = "url('../styles/pics/bw_fog.jpeg')"

  //haze
  } else if (conditions.icon.toLowerCase().includes('haze')) {
    document.body.style.backgroundImage = "url('../styles/pics/haze.jpeg')"

  } else {
    document.body.style.backgroundImage = "url('../styles/pics/default_weather.jpeg')"

  }
}


export default conditionStyles;
