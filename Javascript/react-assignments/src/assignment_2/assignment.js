// Assignment2.js
import React, { useState } from "react";

function Assignment2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      {/* Counter */}
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      {/* Input Display */}
      <div style={{ marginTop: "20px" }}>
        <h2>Live Input Display</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>

      {/* Toggle Paragraph */}
      <div style={{ marginTop: "20px" }}>
        <h2>Visibility Toggle</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Paragraph
        </button>
        {isVisible && <p>This paragraph can be toggled.</p>}
      </div>
    </div>
  );
}

export default Assignment2;
