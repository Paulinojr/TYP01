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


const app = express();
app.use(bodyParser.json());
app.use(express.static('./client'));

const port = 5000;

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;


  const params = {
    workspace_id: '0634caf6-8e0e-4c90-9ad4-c7ef792ffc2e',
    input: { text: text },
    context
  };

  service.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
