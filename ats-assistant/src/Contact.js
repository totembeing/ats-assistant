import './App.css';

function Contact() {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1 style={{color: '#FFFFFF', marginBottom: '2rem'}}>Get In Touch</h1>
        
        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>📧 Let's Connect</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            Have questions about the ATS Assistant? Want to collaborate on a project? 
            Or just want to connect with a fellow developer? I'd love to hear from you!
          </p>
        </div>

        <div className="contactGrid">
          <div className="contactCard">
            <h3 style={{color: '#61dafb', marginBottom: '1rem'}}>� Let's Connect</h3>
            <div className="contactItem">
              <strong style={{color: '#FFFFFF'}}>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/vaibhav-narula-4bb64b28a" 
                 target="_blank" rel="noopener noreferrer"
                 style={{color: '#61dafb', textDecoration: 'none', marginLeft: '0.5rem'}}>
                Connect with me
              </a>
            </div>
            <div className="contactItem">
              <strong style={{color: '#FFFFFF'}}>GitHub:</strong>
              <a href="https://github.com/totembeing" 
                 target="_blank" rel="noopener noreferrer"
                 style={{color: '#61dafb', textDecoration: 'none', marginLeft: '0.5rem'}}>
                @totembeing
              </a>
            </div>
            <div className="contactItem">
              <strong style={{color: '#FFFFFF'}}>Email:</strong>
              <a href="mailto:vaibhavnarula2005@gmail.com?subject=Inquiry about ATS Assistant&body=Hi Vaibhav,%0D%0A%0D%0AI came across your ATS Assistant project and wanted to reach out..." 
                 style={{color: '#61dafb', textDecoration: 'none', marginLeft: '0.5rem'}}>
                Send me an email
              </a>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>Project Feedback</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            Found a bug? Have a feature suggestion? Want to contribute to the ATS Assistant?
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="https://github.com/totembeing/ats-assistant/issues" 
               target="_blank" rel="noopener noreferrer"
               className="contactButton">
              Report an Issue
            </a>
            <a href="https://github.com/totembeing/ats-assistant" 
               target="_blank" rel="noopener noreferrer"
               className="contactButton">
              View Source Code
            </a>
          </div>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>Collaboration</h2>
          <p style={{color: '#FFFFFF', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            I'm always interested in:
          </p>
          <ul style={{color: '#FFFFFF', lineHeight: '1.8', textAlign: 'left', maxWidth: '500px', margin: '0 auto'}}>
            <li>Full-stack development opportunities</li>
            <li>AI/ML integration projects</li>
            <li>Cloud architecture discussions</li>
            <li>Open source contributions</li>
            <li>Tech mentorship and knowledge sharing</li>
          </ul>
        </div>

        <div className="aboutSection">
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>📍 Location & Availability</h2>
          <div className="availabilityInfo">
            <div className="infoItem">
              <strong style={{color: '#FFFFFF'}}>Location:</strong>
              <span style={{color: '#cccccc', marginLeft: '0.5rem'}}>Available for remote work</span>
            </div>
            <div className="infoItem">
              <strong style={{color: '#FFFFFF'}}>Response Time:</strong>
              <span style={{color: '#cccccc', marginLeft: '0.5rem'}}>Usually within 24-48 hours</span>
            </div>
            <div className="infoItem">
              <strong style={{color: '#FFFFFF'}}>Best Contact:</strong>
              <span style={{color: '#cccccc', marginLeft: '0.5rem'}}>LinkedIn for professional inquiries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;