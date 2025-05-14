import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState("...");

  useEffect(() => {
    fetch("https://31tioiek50.execute-api.us-east-2.amazonaws.com/")
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount("Error"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Hello World</h1>
      <div className="counter-div" style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        <span>Views:</span> <span className="counter-number">{count}</span>
      </div>
    </div>
  );
}

export default App;
