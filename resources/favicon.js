window.onload = function () {
  const favicons = [
    "resources/hearts/bi.png",
    "resources/hearts/lesbian.png",
    "resources/hearts/rainbow.png",
    "resources/hearts/sapphic.png",
    "resources/hearts/trans.png",
    "resources/hearts/transfemminine.png",

  ];
  const randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];

  let link = document.querySelector("link[rel='icon']") || document.createElement("link");
  link.rel = "icon";
  link.href = randomFavicon;
  document.head.appendChild(link);
};
