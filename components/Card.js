import React from "react";

function Card({ thumbnail }) {
  return <img src={thumbnail.url} alt={thumbnail.title} className="card" />;
}

export default Card;
