const timeConvert = (n) => {
  var num = n
  var hours = num / 60
  var rhours = Math.floor(hours)
  var minutes = (hours - rhours) * 60
  var rminutes = Math.round(minutes)
  if (rhours === 0) {
    return rminutes + ' min read'
  } else {
    return rhours + ' hour and ' + rminutes + ' min read'
  }
}

export default timeConvert
