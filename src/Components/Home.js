import React from "react";
import data from "../data";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  console.log(data);
  const displayData = data.map((e) => {
    return (
      <Link key={e.name} to={{ pathname: `/cams/${e.id}`, id: e.id }}>
        <div className="card">
          <img src={e.img}></img>
          <p>{e.name}</p>
        </div>
      </Link>
    );
  });
  return <div className="card-wraper">{displayData}</div>;
}
