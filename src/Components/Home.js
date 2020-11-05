import React from "react";
import data from "../data";
import "./Home.css";
export default function Home() {
  console.log(data);
  const displayData = data.map((e) => {
    return (
      <div className="card">
        <img src={e.img}></img>
        <p>{e.name}</p>
      </div>
    );
  });
  return <div className="card-wraper">{displayData}</div>;
}
