var OpenAI = require('openai');

var openAi = new OpenAI({
  baseURL: 'https://models.inference.ai.azure.com',
  apiKey: process.env.OPEN_AI_KEY
});

module.exports.sendMessage = (message) => {
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
    .then((res) => res.choices[0].message.content)
    .catch(() => 'не могу ответить');
}
