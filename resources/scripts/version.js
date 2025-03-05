function version() {
  const versionDate = new Date("2025-05-03");
  const version = "v1.8";

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
