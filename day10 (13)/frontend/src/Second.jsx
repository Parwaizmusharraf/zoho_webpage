import React, { useEffect, useState } from "react";
import "./Second.css";

function Second({ username, userimgurl }) {
  const [state, setState] = useState(100);
  const [message, setMessage] = useState("offer is ON");
  useEffect(function () {
    console.log("The side effect is happend")
    if (state > 100) {
      setState(100);
    }
    if (state < 90 && state >=80) {
      setMessage("hurry up");
    } else if (state < 80) {
      setMessage("Hurry Up");
    } else {
      setMessage("offer is ON");
    }
  },[state]);

  function addItem() {
    setState(state - 1);
  }
  function removeItem() {
    setState(state + 1);
  }
  
  return (
    <div>
      <div className="Main2">
        <h1>Only {state} is availiable</h1>
        <h1>{message}</h1>
        <h1>{username}</h1>
        <img src={userimgurl} alt="img" />
        <br />
        <button onClick={addItem}>Add</button>

        <button onClick={removeItem}>Remove</button>
      </div>
      <br />
    </div>
  );
}

export default Second;
