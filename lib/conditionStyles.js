//maybe tie it to logo instead?

 const conditionStyles = (conditions)=> {

  if (conditions.icon.toLowerCase().includes('cloudy')) {
    document.body.style.backgroundImage = "url('../styles/pics/star_b.jpeg')"
  } else if (conditions.icon.toLowerCase().includes('tstorm')) {
    document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
  } else if (conditions.status === ('Overcast')) {
    document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
  } else if (conditions.status === ('Chance of Rain')) {
    document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
  } else if (conditions.status === ('Rain')) {
    document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
  } else {
    document.body.style.backgroundImage = "url('https://static.brusheezy.com/system/resources/previews/000/048/054/original/fall-leaves-background-photoshop-backgrounds.jpg')"

  }
}

//nt_clear

//nt_cloudy night at top

//snow, flurries

//rain

//sleet

//tstorms

//clear

//cloudy

//fog, hazy

export default conditionStyles;
