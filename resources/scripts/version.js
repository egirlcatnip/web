function version(version_string, date) {
  const versionDate = new Date(date);
  const span = document.getElementById("version");

  if (span) {
    span.textContent = `v${version_string}`;

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
