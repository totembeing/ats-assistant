import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pipeline } from '@huggingface/transformers';

dotenv.config();

const app = express();
app.use(cors({origin: ['http://localhost:3000', 'https://totembeing.github.io/ats-assistant']}));
app.use(express.json());

let extractor;

//Load the Hugging Face model pipeline using an Immediately Invoked Function Expression (IIFE)
(async () => {
    //even with transformers supported model, error occurs while using text-generation instead of text2text-generation
    extractor = await pipeline('text-generation', 'HuggingFaceTB/SmolLM2-1.7B-Instruct'); //Changed from 'Xenova/t5-small' to 'Xenova/flan-t5-base' and further
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
        const prompt = `Extract a list of relevant technical keywords from this job description for ATS optimization: \n${jobDescription}.`;
        const result = await extractor(prompt, {
            max_new_tokens: 70
        });

        const keywordsText = result[0].generated_text;
        //const keywords = keywordsText
        //    .split(',')
        //    .map(k => k.trim())
        //    .filter(Boolean);

        res.json({ keywordsText });
    } catch (error) {
        console.error('Hugging Face Error:', error);
        res.status(500).json({ error: 'Failed to generate keywords' });
    }
});

//To get the Azure's dynamically assigned PORT if it is not 5000 (without this the backend won't start properly on Azure)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
