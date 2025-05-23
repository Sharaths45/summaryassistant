import axios from 'axios';

const generateSummary = async (todos) => {
  const todoList = todos.map(t => `- ${t.text}`).join('\n');
  const prompt = `Summarize the following todo items into a concise, meaningful summary paragraph. Group similar items together when possible:\n\n${todoList}`;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
};

export { generateSummary };
