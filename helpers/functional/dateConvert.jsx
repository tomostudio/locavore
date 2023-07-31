const dateConvert = (date) => {
  function formatDate(inputDate) {
    // Split the inputDate by the '-' character
    const dateParts = inputDate.split('-')
    const year = dateParts[0]
    const month = dateParts[1]
    const day = dateParts[2]

    // Create a new Date object with the provided date
    const dateObj = new Date(inputDate)

    // Define an array of month names
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    // Format the date as "DD Month YYYY"
    const formattedDate = `${parseInt(day)} ${
      monthNames[parseInt(month) - 1]
    } ${year}`

    return formattedDate
  }

  const formattedDate = formatDate(date)
  return formattedDate
}

export default dateConvert