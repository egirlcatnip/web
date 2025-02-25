window.onload = function () {
  const cycle_enabled = true;

  if (cycle_enabled) {
    const favicons = [
      "resources/hearts/rainbow.png",
      "resources/hearts/trans.png",
      "resources/hearts/lesbian.png",
      "resources/hearts/bi.png",
      "resources/hearts/sapphic.png",
    ];
    let index = 0;

    function changeFavicon() {
      let link = document.querySelector("link[rel='icon']") || document.createElement("link");
      link.rel = "icon";
      link.href = favicons[index];
      document.head.appendChild(link);
      index = (index + 1) % favicons.length;
    }

    changeFavicon();

    setInterval(changeFavicon, 10000);
  }
};