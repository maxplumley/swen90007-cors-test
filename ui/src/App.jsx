import React, { useState } from 'react';
import './App.css';

function App() {
  const [getData, setGetData] = useState(null);
  const [postData, setPostData] = useState(null);

  const handleGet = async () => {
    const response = await fetch("http://localhost:8080/cors_test_war_exploded/test")
    setGetData(await response.json());
  }

  const handlePost = async () => {
    const response = await fetch("http://localhost:8080/cors_test_war_exploded/test",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ data: "data" }),
      })
    setPostData(await response.json());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGet}>do GET</button>
        {getData && <p>GET: {JSON.stringify(getData)}</p>}
        <button onClick={handlePost}>do POST</button>
        {postData && <p>POST: {JSON.stringify(postData)}</p>}
      </header>
    </div>
  );
}

export default App;
