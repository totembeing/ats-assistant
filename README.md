# ATS Assistant 🎯

A full-stack web application that leverages AI to extract ATS-optimized keywords from job descriptions, helping job seekers improve their resume visibility in Applicant Tracking Systems.

**🔗 [Live Demo](https://totembeing.github.io/ats-assistant/)**

![ATS Assistant Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Azure](https://img.shields.io/badge/Azure-Backend-blue) ![React](https://img.shields.io/badge/React-Frontend-61dafb)

## 🚀 Overview

Job seekers often struggle with ATS systems that filter resumes based on keyword matching. This application solves that problem by intelligently analyzing job descriptions and extracting the most relevant technical keywords, skills, and qualifications that candidates should include in their resumes.

## ✨ Features

- **Intelligent Keyword Extraction**: Uses Azure OpenAI GPT-3.5 Turbo for advanced natural language processing
- **Real-time Processing**: Instant keyword generation from job descriptions
- **Copy-to-Clipboard**: One-click functionality for easy resume integration  
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
- **Git/GitHub** - Version control 
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

1. **Initial Approach**: Started with Hugging Face Transformers (T5, SmolLM models)
2. **Challenge**: Insufficient model performance and computational limitations  
3. **Solution**: Migrated to Azure OpenAI Service for superior accuracy and reliability
4. **Result**: Improved keyword quality and consistent response times

### Key Technical Decisions
- **Model Selection**: Chose GPT-3.5 Turbo for optimal cost-performance balance
- **Prompt Engineering**: Iterated on system/user prompts for maximum extraction accuracy
- **Cloud Architecture**: Selected Azure App Service for scalability and integration benefits

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

**Vaibhav Narula**
- GitHub: [@totembeing](https://github.com/totembeing)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/vaibhav-narula-4bb64b28a)

---

⭐ **Star this repository if it helped you optimize your resume for ATS systems!**
