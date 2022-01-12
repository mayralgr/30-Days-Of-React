function getGrade(grade) {
  // can be a switch, but is it really better?
  if (grade > 79 && grade <= 100) return "A";
  if (grade > 69 && grade <= 79) return "B";
  if (grade > 59 && grade <= 69) return "C";
  if (grade > 49 && grade <= 59) return "D";
  else return "F";
}
const grade = getGrade(89);
console.log(grade);

// 2
function getSeasonOfTheMonth(month) {
  // can be a switch, but is it really better?
  if (month > 7 && month <= 10) return "Autumn";
  if ((month >= 0 && month < 2) || month === 11) return "Winter";
  if (month >= 2 && month < 5) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
months.forEach((month, index, array) => {
  console.log(`${month} is in the ${getSeasonOfTheMonth(index)}`);
});
