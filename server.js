const express = require('express');
const bodyParser = require('body-parser');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
const service = new AssistantV1({
  username: 'f84c8777-7c0c-490d-95b7-a6d9fd22eebc',
  password: '2vSlDfFwR83a',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

const workspace_id = '0634caf6-8e0e-4c90-9ad4-c7ef792ffc2e';

const app = express();
app.use(bodyParser.json());

const port = 5000;

app.get('/conversation/:text*?', (req, res) => {
    const { text } = req.params;

    res.json(text);
});

app.listen(port, () => console.log(`Running on port ${port}`));
