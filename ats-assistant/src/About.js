import './App.css';

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1 style={{color: '#FFFFFF', marginBottom: '2rem'}}>About ATS Assistant</h1>
        
        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>🎯 The Problem</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            Did you know that 75% of resumes never reach human recruiters? Applicant Tracking Systems (ATS) 
            automatically filter out resumes that don't contain the right keywords, even if the candidate 
            is perfectly qualified for the job.
          </p>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>💡 The Solution</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            ATS Assistant uses advanced AI (Azure OpenAI GPT-3.5 Turbo) to analyze job descriptions and 
            extract the most relevant keywords, skills, and qualifications. Simply paste a job description, 
            and get ATS-optimized keywords to include in your resume.
          </p>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>🚀 How It Works</h2>
          <div style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            <ol style={{paddingLeft: '1.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Paste any job description into the input field</li>
              <li style={{marginBottom: '0.5rem'}}>Click "Generate Keywords" to analyze the content</li>
              <li style={{marginBottom: '0.5rem'}}>Get relevant keywords extracted by AI</li>
              <li style={{marginBottom: '0.5rem'}}>Copy keywords and optimize your resume</li>
            </ol>
          </div>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>🛠️ Technical Stack</h2>
          <div className="techStack">
            <div className="techItem">
              <h3 style={{color: '#ffffff', fontSize: '1.1rem'}}>Frontend</h3>
              <p style={{color: '#cccccc'}}>React 19, CSS3, GitHub Pages</p>
            </div>
            <div className="techItem">
              <h3 style={{color: '#ffffff', fontSize: '1.1rem'}}>Backend</h3>
              <p style={{color: '#cccccc'}}>Node.js, Express, Azure App Service</p>
            </div>
            <div className="techItem">
              <h3 style={{color: '#ffffff', fontSize: '1.1rem'}}>AI</h3>
              <p style={{color: '#cccccc'}}>Azure OpenAI GPT-3.5 Turbo</p>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>👨‍💻 About the Developer</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            Built by <strong>Vaibhav Narula</strong>, a full-stack developer passionate about creating 
            solutions for real-world problems. This project demonstrates expertise in React, Node.js, 
            AI integration, and cloud deployment on Azure.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <a href="https://github.com/totembeing" target="_blank" rel="noopener noreferrer" 
               style={{color: '#61dafb', textDecoration: 'none', fontSize: '1.1rem'}}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-narula-4bb64b28a" target="_blank" rel="noopener noreferrer"
               style={{color: '#61dafb', textDecoration: 'none', fontSize: '1.1rem'}}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;