const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { pipeline } = require('@xenova/transformers');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let extractor;

//Load the Hugging Face model pipeline
(async () => {
    extractor = await pipeline('text2text-generation', 'Xenova/t5-small');
    console.log('Hugging Face model loaded');
})();

//Creating a POST endpoint
app.post('/generate-keywords', async (req, res) => {
    const {jobDescription} = req.body;
    if (!jobDescription) {
        return res.status(400).json({ error: 'Job description is required' });
    }

    //Prompting the model to extract keywords
    try {
        const prompt = `Extract relevant keywords from this job description that I can add to my resume to increase its ats score: \n${jobDescription}`;
        const result = await extractor(prompt, {
            max_new_tokens: 50
        });

        const keywordsText = result[0].generated_text;
        const keywords = keywordsText
            .split(',')
            .map(k => k.trim())
            .filter(Boolean);

        res.json({ keywords });
    } catch (error) {
        console.error('Hugging Face Error:', error);
        res.status(500).json({ error: 'Failed to generate keywords' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
