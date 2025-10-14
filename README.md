# ATS Assistant 🎯

A full-stack web application that leverages AI to extract ATS-optimized keywords from job descriptions, helping job seekers improve their resume visibility in Applicant Tracking Systems.

**🔗 [Live Demo](https://totembeing.github.io/ats-assistant/)**

![ATS Assistant Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Azure](https://img.shields.io/badge/Azure-Backend-blue) ![React](https://img.shields.io/badge/React-Frontend-61dafb)

## 🚀 Overview

Job seekers often struggle with ATS systems that filter resumes based on keyword matching. This application solves that problem by intelligently analyzing job descriptions and extracting the most relevant technical keywords, skills, and qualifications that candidates should include in their resumes.

### Key Problem Solved
- **Challenge**: 75% of resumes never reach human recruiters due to ATS filtering
- **Solution**: AI-powered keyword extraction ensures resume optimization for ATS systems
- **Impact**: Increased interview callback rates through strategic keyword inclusion

## ✨ Features

- **Intelligent Keyword Extraction**: Uses Azure OpenAI GPT-3.5 Turbo for advanced natural language processing
- **Real-time Processing**: Instant keyword generation from job descriptions
- **Copy-to-Clipboard**: One-click functionality for easy resume integration  
- **Clean UI/UX**: Intuitive interface with professional dark theme
- **Cross-Platform**: Responsive design works on desktop and mobile
- **Production Ready**: Deployed with enterprise-grade cloud infrastructure

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI with hooks and state management
- **CSS3** - Custom styling with responsive design
- **GitHub Pages** - Static site hosting

### Backend  
- **Node.js & Express** - RESTful API server
- **Azure OpenAI Service** - GPT-3.5 Turbo for keyword extraction
- **Azure App Service** - Cloud hosting with auto-scaling
- **CORS** - Cross-origin resource sharing configuration

### Development & Deployment
- **Git/GitHub** - Version control and CI/CD
- **Environment Variables** - Secure API key management
- **Azure Cloud** - Production infrastructure

## 🏗️ Architecture

```
┌─────────────────┐    HTTPS    ┌──────────────────┐    API Call    ┌─────────────────┐
│   React App     │────────────▶│   Express API    │───────────────▶│   Azure OpenAI  │
│  (GitHub Pages) │             │  (Azure App      │                │    Service      │
│                 │◀────────────│   Service)       │◀───────────────│                 │
└─────────────────┘    JSON     └──────────────────┘   AI Response  └─────────────────┘
```

## 🧠 Technical Evolution

This project showcases technical decision-making and adaptation:

1. **Initial Approach**: Started with Hugging Face Transformers (T5, SmolLM models)
2. **Challenge**: Insufficient model performance and computational limitations  
3. **Solution**: Migrated to Azure OpenAI Service for superior accuracy and reliability
4. **Result**: Improved keyword quality and consistent response times

### Key Technical Decisions
- **Model Selection**: Chose GPT-3.5 Turbo for optimal cost-performance balance
- **Prompt Engineering**: Iterated on system/user prompts for maximum extraction accuracy
- **Cloud Architecture**: Selected Azure App Service for scalability and integration benefits

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Azure OpenAI Service account
- Git

### Backend Setup
```bash
# Clone repository
git clone https://github.com/totembeing/ats-assistant.git
cd ats-assistant/server

# Install dependencies  
npm install

# Configure environment variables
cp .env.example .env
# Add your Azure OpenAI credentials to .env

# Start server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../ats-assistant

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables
```env
AZURE_OPENAI_API_KEY=your_api_key_here
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT_NAME=your_deployment_name
AZURE_OPENAI_API_VERSION=2024-02-15-preview
```

## 🧪 Testing & Validation

- **Test Data**: Validated with real job descriptions from Indeed, LinkedIn, and Glassdoor
- **Model Performance**: Optimized prompts for consistent, relevant keyword extraction
- **Error Handling**: Comprehensive error management for API failures and edge cases

## 🚧 Development Challenges & Solutions

### Challenge 1: Model Performance
- **Problem**: Hugging Face models provided inconsistent results
- **Solution**: Migrated to Azure OpenAI for enterprise-grade performance
- **Learning**: Importance of model selection in production applications

### Challenge 2: Azure Deployment  
- **Problem**: Backend deployment failures due to environment configuration
- **Solution**: Proper Linux environment setup and dependency management
- **Learning**: Cloud deployment intricacies and debugging techniques

### Challenge 3: Cross-Origin Requests
- **Problem**: CORS errors between GitHub Pages and Azure backend
- **Solution**: Implemented proper CORS configuration with multiple origins
- **Learning**: Web security and cross-domain communication

## 🔮 Future Enhancements

- **Resume Analysis**: Upload and analyze existing resumes for keyword gaps
- **Industry Specialization**: Tailored keyword extraction for specific sectors  
- **Job Matching**: AI-powered job recommendation based on resume content
- **Analytics Dashboard**: Track application success rates and keyword performance
- **Bulk Processing**: Handle multiple job descriptions simultaneously

## 📊 Project Impact

- **Technical Skills Demonstrated**: Full-stack development, AI integration, cloud deployment
- **Problem-Solving**: Overcame model limitations, deployment challenges, and optimization issues  
- **Industry Relevance**: Addresses real pain point in job application process
- **Scalability**: Built with production-ready architecture and cloud infrastructure

## 🔧 API Documentation

### POST `/generate-keywords`
Extracts ATS-optimized keywords from job descriptions.

**Request Body:**
```json
{
  "jobDescription": "Software Engineer position requiring React, Node.js, and AWS experience..."
}
```

**Response:**
```json
{
  "keywordsText": "React, Node.js, AWS, JavaScript, Express, MongoDB, Git, Agile, REST API, Docker"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@totembeing](https://github.com/totembeing)
- LinkedIn: [Your LinkedIn Profile]

---

⭐ **Star this repository if it helped you optimize your resume for ATS systems!**
