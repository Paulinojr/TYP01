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

    if(req.body.text != "" && req.body.context.length != 0){
      saveUserData(req.body, response)
    }

    if(response){
      saveBotData(response);
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

const saveUserData = (request, response) => {
  let responseArray = response
  session
  .run('MATCH (s:Session { conversation_id:"'+ response.context.conversation_id +'" }) CREATE (um:UserMessage { text:"'+ request.text +'", time: "12:00" , dialog_request_counter:"'+ response.context.system.dialog_request_counter +'"})CREATE (s)-[c:CONTAINS]->(um)')
  .then(function(result){
    saveRecognizedData(responseArray);
  })
  .catch(function(err){
    console.log(err);
  });
};

const saveBotData = (response) => {
  let botMessage = "";
  if(response.output.text){
      let messageArray = response.output.text;
      messageArray.forEach(function (message){
        botMessage += message.replace(/"/g, "&quot;")+ " ";
      });
  }
  session
  .run('MATCH (s:Session { conversation_id:"'+ response.context.conversation_id +'" }) CREATE (bm:BotMessage { text:"' + botMessage +'", time: "12:01" , dialog_request_counter:"' + response.context.system.dialog_request_counter + '"}) CREATE (s)-[c:CONTAINS]->(bm)')
  .catch(function(err){
    console.log(err);
  });
};

const saveRecognizedData = (response) => {
    session
      .run('MATCH (um:UserMessage { dialog_request_counter:"'+ response.context.system.dialog_request_counter + '" }) CREATE (i:Intent {title: "'+response.intents[0].intent+'"}) CREATE (um)-[f:FITS {confidence: ["'+ response.intents[0].confidence +'"]}]->(i)')
      .catch(function(err){
          console.log(err);
      });
}
