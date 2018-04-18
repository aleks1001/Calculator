import React from "react";

const style = {
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "#eee",
  marginBottom: "5px",
  border: "1px solid black"
};

export default ({ name }) => (
  <div style={style}>
    <div style={{ padding: "0 10px" }}>
      <h1>{name}</h1>
    </div>
  </div>
);
