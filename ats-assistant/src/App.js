import './App.css'
import { useState, useEffect } from "react";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  //state variable named text default to an empty string
  const [text, setText] = useState("");

  //state variable named keywords default to an empty array
  const [keywords, setKeywords] = useState([]);
  
  //state variable for current page
  const [currentPage, setCurrentPage] = useState("home");
  
  //state variables for enhanced UX
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (text.trim() === "") {
      setKeywords([]);
      setStatus(null);
    }
  }, [text]);

  const handleClick1 = async () => {
    setIsLoading(true);
    setStatus(null);
    
    try {
      const response = await fetch(process.env.REACT_APP_AZURE_WEB_SERVICE_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ jobDescription: text }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate keywords');
      }

      const data = await response.json();
      setKeywords(data.keywordsText || []);
      setStatus('success');
      console.log('Keywords generated successfully');
    } catch (error) {
      console.error('Error generating keywords:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
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
    <div style={{ display: 'flex', minHeight: '100vh', background: '#22242B', backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px', flexDirection: 'column'}}>
      {/* Enhanced Header */}
      <header className="enhancedHeader">
        <div className="headerContent">
          <div className="logoSection">
            <span className="logoIcon">🎯</span>
            <h1 className="logoText">ATS Assistant</h1>
          </div>
          <nav className="navigationSection">
            <div className="navLinks">
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage("home");}} 
                 className={`navLink ${currentPage === "home" ? 'active' : ''}`}>
                Home
              </a>
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage("about");}} 
                 className={`navLink ${currentPage === "about" ? 'active' : ''}`}>
                About
              </a>
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentPage("contact");}} 
                 className={`navLink ${currentPage === "contact" ? 'active' : ''}`}>
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Enhanced Homepage Design */}
      {currentPage === "home" && (
        <div className="homeContainer">
          <div className="homeMainContent">
            {/* Hero Section */}
            <div className="heroSection">
              <h2 className="heroTitle">Optimize Your Resume for ATS Success</h2>
              <p className="heroSubtitle">
                Paste any job description below and get AI-powered keyword suggestions 
                to make your resume stand out to Applicant Tracking Systems
              </p>
            </div>

            {/* Instructions Panel */}
            <div className="instructionsPanel">
              <h3 className="instructionsTitle">How it works:</h3>
              <ol className="instructionsList">
                <li>Copy a job description from any job posting</li>
                <li>Paste it in the input field below</li>
                <li>Click "Generate Keywords" to get AI analysis</li>
                <li>Copy the suggested keywords to optimize your resume</li>
              </ol>
            </div>

            {/* Main Content */}
            <div className="homeContentRow">
              <div className="enhancedInputContainer">
                <h2 className="sectionHeader">Job Description Input</h2>
                <textarea
                  className="enhancedTextArea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste the job description here...

Example:
Software Engineer - Full Stack
We are looking for a skilled developer with experience in:
• React, Node.js, Python
• AWS, Docker, Kubernetes
• Agile development methodologies
• REST APIs and microservices..."
                />
                <button 
                  onClick={handleClick1} 
                  className={`modernButton ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading || !text.trim()}
                >
                  {isLoading ? 'Analyzing...' : '🚀 Generate Keywords'}
                </button>
                {status === 'error' && (
                  <div className="statusIndicator error">
                    ❌ Failed to generate keywords. Please try again.
                  </div>
                )}
              </div>

              <div className="enhancedOutputContainer">
                <h2 className="sectionHeader">ATS-Optimized Keywords</h2>
                <textarea 
                  className="enhancedTextArea" 
                  value={keywords} 
                  readOnly
                  placeholder="Your AI-generated keywords will appear here...

These keywords are specifically chosen to help your resume pass through ATS filters and reach human recruiters."
                />
                <button 
                  onClick={copyToClipboard} 
                  className="modernButton"
                  disabled={!keywords}
                >
                  📋 Copy to Clipboard
                </button>
                {status === 'success' && keywords && (
                  <div className="statusIndicator success">
                    ✅ Keywords generated successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "about" && <About />}
      
      {currentPage === "contact" && <Contact />}
      
      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}

export default App;