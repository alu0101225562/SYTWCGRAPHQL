import React from "react";

function Nota({ nota }) {
  return (
    <div style={{ marginLeft: "1rem", overflow: "scroll", maxWidth: "32rem" }}>
      <p style={{ color: "red", fontSize: "1.5rem" }}>{nota.title}</p>
      <p>{nota.body}</p>
      <p>{nota.userID}</p>
    </div>
  );
}

export default Nota;
