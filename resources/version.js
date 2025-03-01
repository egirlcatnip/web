document.addEventListener("DOMContentLoaded", function () {
  const versionDate = new Date(2025, 3, 2);
  const version = "v1.6";

  const span = document.getElementById("version");

  if (span) {

    span.textContent = version;

    span.addEventListener("mouseenter", function () {
      const dateSpan = document.createElement("span");
      const formattedDate = `${versionDate.getDate()}. ${versionDate.getMonth()
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
});
