require('dotenv').config({ path: '.env.development' }); // Explicitly load .env.development
console.log('GEMINI_API_KEY loaded on server:', process.env.VITE_GEMINI_API_KEY ? '*****' : 'Not loaded'); // Log key presence
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY; // Access the variable as named in .env.development

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not configured.' });
  }

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + GEMINI_API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API responded with an error status:', response.status, data);
      return res.status(response.status).json({ error: data.error?.message || 'Gemini API returned an error.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini API.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
