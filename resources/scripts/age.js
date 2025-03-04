function createDate(day, month, year) {
  return new Date(year, month - 1, day);
}

function age() {
  const birthDate = createDate(29, 4, 2005);
  const span = document.getElementById("age");

  if (span) {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    if (
      now.getMonth() < birthDate.getMonth() ||
      (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    span.textContent = age;

    span.addEventListener("mouseenter", function () {
      const dateSpan = document.createElement("span");
      const formattedDate = `${birthDate.getDate()}. ${birthDate.getMonth() + 1
        }. ${birthDate.getFullYear()}`;
      dateSpan.textContent = ` (${formattedDate})`;
      dateSpan.id = "birthdate-info";
      span.after(dateSpan);
    });

    span.addEventListener("mouseleave", function () {
      const dateSpan = document.getElementById("birthdate-info");
      if (dateSpan) dateSpan.remove();
    });
  }
}

