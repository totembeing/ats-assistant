import './App.css'
import { useState, useEffect } from "react";

function App() {
  //state variable named text default to an empty string
  const [text, setText] = useState("");

  //state variable named keywords default to an empty array
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (text.trim() === "") {
      setKeywords([]);
    }
  }, [text]);

  const handleClick = async () => {
    const response = await fetch('http://localhost:5000/generate-keywords', {
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
    <div style={{ display: 'flex', height: '100vh', background: '#22242B', backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px', flexDirection: 'column'}}>
      <header style={{display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'center', background: '#22242B', borderBottom: '1px solid #444'}}>
        <nav style={{display: 'flex', width: '95%'}}>
          <h1 style={{color: '#FFFFFF', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>ATS-Assistant</h1>
          <div style={{flex: 3, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div style={{display: 'flex', gap: '2rem'}}>
              <a href="#" style={{color: '#FFFFFF'}}>Home</a>
              <a href="#" style={{color: '#FFFFFF'}}>About</a>
              <a href="#" style={{color: '#FFFFFF'}}>Contact</a>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ display: 'flex', height: '90%', background: 'transparent'}}>
        <div style={{ flex: 1, padding: '20px', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{color: '#FFFFFF'}}>Paste Job Description</h2>
          <textarea
            className= 'inputTextArea'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste here..."
          />
          <button onClick={handleClick} style={{ marginTop: '10px' }}>
            Generate Keywords
          </button>
        </div>

        <div style={{ flex: 1, padding: '20px', background: '#22242B', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{color: '#FFFFFF'}}>Suggested Keywords</h2>
          <textarea 
            className= 'outputTextArea' 
            value= {keywords} 
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;