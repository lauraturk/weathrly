const backgroundConditions = (conditions)=> {
  console.log(conditions)

if (conditions.toLowerCase().includes('cloudy')) {
    return '../vids/snow-vid.mp4'
  }
}

export default backgroundConditions;
