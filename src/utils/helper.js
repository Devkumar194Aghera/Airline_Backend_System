function compareDate(timeString1, timeString2) {
  //(arrivaltime,departuretime)
  const Date1 = new Date(timeString1);
  const Date2 = new Date(timeString2);

  return Date1.getTime() > Date2.getTime();
}

module.exports = compareDate;
