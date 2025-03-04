function createDate(day, month, year) {
  return new Date(year, month - 1, day);
}

function version() {
  const versionDate = createDate(4, 3, 2025);
  const version = "v1.7";

  const span = document.getElementById("version");

  if (span) {
    span.textContent = version;

    span.addEventListener("mouseenter", function () {
      const dateSpan = document.createElement("span");
      const formattedDate = `${versionDate.getDate()}. ${versionDate.getMonth() + 1
        }. ${versionDate.getFullYear()}`;
      dateSpan.textContent = ` (${formattedDate})`;
      dateSpan.id = "version-info";
      span.after(dateSpan);
    });

    span.addEventListener("mouseleave", function () {
      const dateSpan = document.getElementById("version-info");
      if (dateSpan) dateSpan.remove();
    });
  }
}
