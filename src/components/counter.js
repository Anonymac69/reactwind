import React, { useState } from "react";
// This counter would work if imported in App.js

function County() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> {count} </h1>
      <h3 onClick={() => setCount(count + 1)}>+</h3>
      <h3 onClick={() => setCount(count - 1)}>-</h3>
    </div>
  );
}

export default County;
