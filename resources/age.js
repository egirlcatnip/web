function calculateAge(birthDate) {
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let age = today.getFullYear() - birthYear;

  const currentYearBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
  const daysInYear = (today.getFullYear() % 4 === 0 && today.getFullYear() % 100 !== 0) || (today.getFullYear() % 400 === 0) ? 366 : 365;
  const daysSinceBirthday = (today - currentYearBirthday) / (1000 * 60 * 60 * 24);

  if (daysSinceBirthday < 0) {
    age--;
    const previousYearBirthday = new Date(today.getFullYear() - 1, birthMonth, birthDay);
    const daysSincePreviousBirthday = (today - previousYearBirthday) / (1000 * 60 * 60 * 24);
    age += daysSincePreviousBirthday / daysInYear;
  } else {
    age += daysSinceBirthday / daysInYear;
  }

  return age.toFixed(1);
}

function applyAge(year, month, day) {
  const birthDate = new Date(year, month - 1, day);
  const age = calculateAge(birthDate);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dobFormatted = `${birthDate.getDate()} ${monthNames[birthDate.getMonth()]} ${birthDate.getFullYear()}`;

  const ageElement = document.getElementById("age");
  const dobElement = document.getElementById("dob");

  ageElement.textContent = age;
  dobElement.textContent = ` (${dobFormatted})`;
}

document.addEventListener("DOMContentLoaded", function () {
  applyAge(2005, 4, 29);
});