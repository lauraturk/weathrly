//maybe tie it to logo instead?

 const conditionStyles = (conditions)=> {

  if (conditions.icon.toLowerCase().includes('cloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/big_lightning.jpeg')"
  } else if (conditions.icon.toLowerCase().includes('tstorm')) {
    document.body.style.backgroundImage = "url('../styles/pics/rain.jpeg')"
  } else if (conditions.icon.toLowerCase().includes('rain')) {
    document.body.style.backgroundImage = "url('../styles/pics/rain.jpeg')"
  } else {
    document.body.style.backgroundImage = "url('https://static.brusheezy.com/system/resources/previews/000/048/054/original/fall-leaves-background-photoshop-backgrounds.jpg')"

  }
}

//nt_clear-

//nt_cloudy night at top-

//snow, flurries-

//rain-

//sleet-

//tstorms-

//clear

//cloudy -

//fog, hazy -

export default conditionStyles;
