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

  const handleClick1 = async () => {
    const response = await fetch('ats-assistant-backend-headfscrhybqgzcz.canadacentral-01.azurewebsites.net', {
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(keywords);
      alert('Keywords copied to clipboard!');
    }catch (err) {
      console.error('Failed to copy keywords: ', err);
      alert('Failed to copy keywords');
    }
  }

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
        <div className= 'inputContainer' >
          <h2 style={{color: '#FFFFFF'}}>Paste Job Description</h2>
          <textarea
            className= 'inputTextArea'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste here..."
          />
          <button onClick={handleClick1} style={{ marginTop: '10px' }}>
            Generate Keywords
          </button>
        </div>

        <div className='outputContainer' >
          <h2 style={{color: '#FFFFFF'}}>Suggested Keywords</h2>
          <textarea 
            className= 'outputTextArea' 
            value= {keywords} 
            readOnly
          />
          <button onClick={copyToClipboard} style={{ marginTop: '10px' }}>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;