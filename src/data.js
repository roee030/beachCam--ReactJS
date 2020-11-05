const data = [
  {
    src: "https://webcasting.co.il/player/tlv/cam4_mute.html",
    name: "יפו",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOuZpKcDSXJvL2-yZGoRfgJL1WzzMFYsoNVA&usqp=CAU",
  },
  {
    src:
      "https://g2.ipcamlive.com/player/player.php?alias=5f6226e0414da&autoplay=1&skin=white",
    name: "חוף הילטון תל אביב",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-p/09/fe/c0/dd/hilton-beach.jpg",
  },
  {
    src: "https://webcasting.co.il/player/tlv/museum_mute.html",
    name: "החוף המערבי תל אביב",
    img:
      "data:image/jpeg;base64,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",
  },
  {
    src:
      "https://g2.ipcamlive.com/player/player.php?alias=5f632f67dlb6a&autoplay=1&skin=white",
    name: "הדרומי הרצליה",
    img:
      "https://www.tzomet-hrz.co.il/wp-content/uploads/2017/08/TH-V-C-%D7%94%D7%97%D7%95%D7%A3-%D7%94%D7%A0%D7%A4%D7%A8%D7%93-%D7%91%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94-%D7%A2.jpg",
  },
  {
    src:
      "https://g2.ipcamlive.com/player/player.php?alias=galyamsurf&autoplay=1",
    name: "פולג נתניה",
    img:
      "data:image/jpeg;base64,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",
  },
  {
    src: "https://g0.ipcamlive.com/player/player.php?alias=freegullsouth",
    name: "שדות ים",
    img: "https://i.ytimg.com/vi/yPa4JIYouQI/maxresdefault.jpg",
  },
  {
    src:
      "https://camstreamer.com/yt-embed/91e3a5f7dee3764/S-14818?autoplay=1&controls=1&showinfo=0&rel=0",
    name: "חוף מרידיאן חיפה",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/e3/bc/a7/caption.jpg",
  },
];