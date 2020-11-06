import React from "react";
import data from "../data";
export default function BeachCam(props) {
  let id = props.history.location.pathname.split("/")[2];
  const findVideo = data.filter((e) => e.id == id);
  console.log(findVideo[0].src);
  return (
    <div>
      <iframe
        width="100%"
        height="1800px"
        src="https://g2.ipcamlive.com/player/player.php?alias=galyamsurf&autoplay=1"
      ></iframe>
      <iframe
        width="100%"
        height="1800px"
        src="http://server1.reali-tech.com/LiveStreamFlash/Demo/inter/inter20.html"
      ></iframe>
    </div>
  );
}
