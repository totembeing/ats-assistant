const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const { Models } = require('openai/resources/models.js');
const { Stream } = require('openai/core/streaming.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Connecting the server to the OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//Creating a POST endpoint
app.post('/generate-keywords', async (req, res) => {
    const {jobDescription} = req.body;
    if (!jobDescription) {
        return res.status(400).json({ error: 'Job description is required' });
    }

    try {
        const response = await openai.responses.create({
            model: "gpt-4.1",
            input: "Generate a list of keywords from the following job description:\n\n" + jobDescription
        });

        const keywords = response.data.choices[0].message.content
            .split('\n')
            .map(line => line.replace(/^\d+[\).\s]?/, '').trim())
            .filter(Boolean);

        res.json({ keywords });
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ error: 'Failed to generate keywords' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
