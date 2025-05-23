import axios from 'axios';

const sendToSlack = async (message) => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: message
    });
    return true;
  } catch (error) {
    console.error('Error sending to Slack:', error);
    return false;
  }
};

export { sendToSlack };
