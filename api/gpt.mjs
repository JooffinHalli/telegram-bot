import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import OpenAI from 'openai';

var openAi = new OpenAI({
  baseURL: 'https://models.inference.ai.azure.com',
  apiKey: process.env.OPEN_AI_KEY
});

export var sendMessage = (message) => {
  return openAi.chat.completions.create({
    messages: [
      { role: 'developer', content: 'говори как грубиян' },
      { role: 'user', content: message }
    ],
    temperature: 1.0,
    top_p: 1.0,
    max_tokens: 1000,
    model: 'gpt-4o'
  })
    .then((res) => res.choices[0].message.content || message)
    .catch(() => 'не могу ответить');
}
