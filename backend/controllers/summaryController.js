import Todo from '../models/Todo.js';
import { generateSummary } from '../services/openaiService.js';
import { sendToSlack } from '../services/slackService.js';

export const summarizeAndSend = async (req, res) => {
  try {
    const todos = await Todo.find({ completed: false });
    if (todos.length === 0) {
      return res.status(400).json({ error: 'No pending todos to summarize' });
    }

    const summary = await generateSummary(todos);
    const slackResult = await sendToSlack(`*Todo Summary:*\n${summary}`);

    if (slackResult) {
      res.json({ success: true, summary });
    } else {
      res.status(500).json({ error: 'Failed to send summary to Slack' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
