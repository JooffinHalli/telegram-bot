var OpenAI = require('openai');

var openAi = new OpenAI({
  baseURL: 'https://models.inference.ai.azure.com',
  apiKey: process.env.OPEN_AI_KEY
});

var options = {
  messages: [],
  temperature: 1.0,
  top_p: 1.0,
  max_tokens: 1000,
  model: 'gpt-4o'
};

module.exports.sendMessage = (message) => {
  options.messages.push({ role: 'user', content: message });
  console.log(options.messages);
  return openAi.chat.completions.create(options)
    .then((res) => {
      options.messages.push(res.choices[0].message);
      return res.choices[0].message.content;
    })
    .catch(() => 'не могу ответить')
}