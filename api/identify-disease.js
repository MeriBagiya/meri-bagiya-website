const Anthropic = require('@anthropic-ai/sdk');

module.exports = async (req, res) => {
  console.log('Function invoked');
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);

  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    console.log('Responding to OPTIONS request');
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Processing POST request');

  const anthropic = new Anthropic({
    apiKey: process.env.REACT_APP_CLAUDE_API_KEY,
  });

  const { image } = req.body;

  if (!image) {
    console.log('Image data not found in request body');
    return res.status(400).json({ error: 'Image data is required' });
  }

  console.log('Image data received');

  try {
    console.log('Calling Claude API');
    const msg = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: image,
              },
            },
            {
              type: 'text',
              text: `
                Please analyze the attached image of a plant and identify any potential diseases.
                Provide the answer in a JSON format with the following structure:
                {
                  "diseases": [
                    {
                      "name": "Disease Name",
                      "probability": 0.85,
                      "disease_details": {
                        "description": "A brief description of the disease.",
                        "url": "A URL to a reliable source for more information about the disease."
                      }
                    }
                  ]
                }
                If the plant appears to be healthy, return a JSON object with an empty "diseases" array.
              `,
            },
          ],
        },
      ],
    });

    console.log('Claude API response received:', msg.content[0].text);
    res.status(200).json(JSON.parse(msg.content[0].text));
  } catch (error) {
    console.error('Error identifying plant disease:', error);
    res.status(500).json({ error: 'Failed to identify plant disease' });
  }
};
