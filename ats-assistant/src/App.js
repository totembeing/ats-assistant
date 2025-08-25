import { useState } from "react";

function App() {
  //state variable named text default to an empty string
  const [text, setText] = useState("");

  //state variable named keywords default to an empty array
  const [keywords, setKeywords] = useState([]);

  const handleClick = async () => {
    const response = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ jobDescription: text }),
    });

    //Not able to get an appropriate response from the server
    console.log('button clicked');
    const data = await response.json();
    setKeywords(data.keywordsText || []); //Changed from data.keywords to data.keywordsText
    console.log('Keywords generated:', keywords);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px', background: '#f0f0f0' }}>
        <h2>Paste Job Description</h2>
        <textarea
          style={{ width: '100%', height: '300px' }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste here..."
        />
        <button onClick={handleClick} style={{ marginTop: '10px' }}>
          Generate Keywords
        </button>
      </div>

      <div style={{ flex: 1, padding: '20px', background: '#fff' }}>
        <h2>Suggested Keywords</h2>
        <p>{keywords}</p>
      </div>
    </div>
  );
}

export default App;