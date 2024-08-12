import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        margin: "5px",
        border: "3px solid white ",
        alignItems: "center",
      }}
    >
      <img
        src={props.imageURL}
        alt={props.name}
        style={{
          height: "690px",
          width: "100%",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "11px",
          color: "white",
          fontSize: "20px",
          backgroundColor: "black",
          width: "100%",
          textAlign: "center",
          opacity: 0.7,
          borderRadius: "5%",
        }}
      >
        <h2 className="name">{props.name}</h2>
        <p>{props.age} </p>
        <p> {props.team} </p>
        <p>{props.jerseyNumber}</p>
        <p>{props.nationality}</p>
      </div>
    </div>
  );
}

export default Card;
