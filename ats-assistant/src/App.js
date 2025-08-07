import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleClick = async () => {
    const response = await fetch('http://localhost:5000/generate-keywords', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ jobDescription: text }),
    });

    const data = await response.json();
    setKeywords(data.keywords || []);
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
        {keywords.length > 0 ? (
          <ul>
            {keywords.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        ) : (
          <p>Keywords will appear here.</p>
        )}
      </div>
    </div>
  );
}

export default App;