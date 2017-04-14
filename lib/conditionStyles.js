 const conditionStyles = (conditions)=> {
  // console.log(conditions, ' conditions?')
  if (conditions.status === 'Mostly Cloudy' || 'Partly Cloudy') {
    document.body.style.backgroundImage = "url('https://static.brusheezy.com/system/resources/previews/000/048/054/original/fall-leaves-background-photoshop-backgrounds.jpg')"
} else {
  document.body.style.backgroundImage = "url('http://www.westessexnow.com/uploads/3/0/7/7/30776419/839755_orig.jpg')"

}
}

export default conditionStyles;
