import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AzureOpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://totembeing.github.io/ats-assistant',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Initialize Azure OpenAI client
const azureOpenAI = new AzureOpenAI({
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION || "2024-02-15-preview"
});

console.log('Azure OpenAI client initialized');

//Creating a POST endpoint
app.post('/generate-keywords', async (req, res) => {
    const {jobDescription} = req.body;
    if (!jobDescription) {
        return res.status(400).json({ error: 'Job description is required' });
    }

    //Prompting the Azure OpenAI model to extract keywords
    try {
        const completion = await azureOpenAI.chat.completions.create({
            model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME, // Your deployment name
            messages: [
                {
                    role: "system",
                    content: "You are an expert ATS (Applicant Tracking System) optimization assistant. Extract the most relevant technical keywords, skills, and qualifications from job descriptions that candidates should include in their resumes."
                },
                {
                    role: "user",
                    content: `Extract a list of relevant technical keywords from this job description for ATS optimization:\n\n${jobDescription}\n\nProvide the keywords as a comma-separated list.`
                }
            ],
            max_tokens: 150,
            temperature: 0.3
        });

        const keywordsText = completion.choices[0].message.content;

        res.json({ keywordsText });
    } catch (error) {
        console.error('Azure OpenAI Error:', error);
        res.status(500).json({ error: 'Failed to generate keywords' });
    }
});

//To get the Azure's dynamically assigned PORT if it is not 5000 (without this the backend won't start properly on Azure)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
