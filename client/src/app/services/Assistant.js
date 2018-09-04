// Example 1: sets up service wrapper, sends initial message, and
// receives response.
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: 'f84c8777-7c0c-490d-95b7-a6d9fd22eebc',
  password: '2vSlDfFwR83a',
  version: '2018-02-16'
});

var workspace_id = '0634caf6-8e0e-4c90-9ad4-c7ef792ffc2e';

// Start conversation with empty message.
service.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err. 'erro'); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}
