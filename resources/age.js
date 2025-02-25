window.onload = function () {
  const year = 2005;
  const month = 4;
  const day = 29;

  const birthDate = new Date(year, month + 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  if (currentMonth < birthDate.getMonth() || (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())) {
    age--;
  }

  const dobFormatted = `${birthDate.getDate()}. ${birthDate.getMonth()}. ${birthDate.getFullYear()}`;

  document.getElementById("age").textContent = age;
  document.getElementById("dob").textContent = ` (${dobFormatted})`;
};
