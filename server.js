const express = require('express');
const bodyParser = require('body-parser');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const neo4j = require('neo4j-driver').v1;

// Set up Assistant service wrapper.
const service = new AssistantV1({
  username: 'f84c8777-7c0c-490d-95b7-a6d9fd22eebc',
  password: '2vSlDfFwR83a',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'root'));
const session = driver.session();

const app = express();
app.use(bodyParser.json());
app.use(express.static('./client'));

const port = 5000;
app.listen(port);

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    workspace_id: '0634caf6-8e0e-4c90-9ad4-c7ef792ffc2e',
    input: { text: text },
    context
  };

  service.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    let dialogCounter = response;

    if(dialogCounter['context']['system']['dialog_request_counter'] == 1){
      saveConversationData(response);
    }

    res.json(response);
  });
});

const saveConversationData = (response) => {

  let date = new Date();

  session
      .run('CREATE(s:Session { conversation_id: "'+response.context.conversation_id+'", date:"'+ date +'", user_type: "Aluno" })')
      .catch(function(err){
          console.log(err);
      });
};

const saveUserData = (response) => {

};

const saveBotData = () => {
  session
      .run('MATCH(n:Session) RETURN n')
      .then(function(result){
        result.records.forEach(function(record){
          console.log(record._fields[0].properties);
        });
      })
      .catch(function(err){
          console.log(err);
      });

};
