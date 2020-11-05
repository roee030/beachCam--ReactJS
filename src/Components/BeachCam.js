import React from "react";
import data from "../data";
export default function BeachCam(props) {
  let id = props.history.location.pathname.split("/")[2];
  const findVideo = data.filter((e) => e.id == id);
  console.log(findVideo[0].src);
  return (
    <div>
      <iframe src="https://g0.ipcamlive.com/player/player.php?alias=freegullsouth" style="opacity: 1; visibility: visible;></iframe>
    </div>
  );
}
