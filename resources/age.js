function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
    age--;
  }
  return age;
}



function applyAge(year, month, day) {
  const birthDate = new Date(year, month, day);
  const age = calculateAge(birthDate);

  const dobFormatted = `${birthDate.getDate()}. ${birthDate.getMonth()}. ${birthDate.getFullYear()}`;

  const ageElement = document.getElementById("age");
  const dobElement = document.getElementById("dob");

  ageElement.textContent = age;
  dobElement.textContent = ` (${dobFormatted})`;
}