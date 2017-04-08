if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}


const os = require('os');
var RtmClient = require('@slack/client').RtmClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;


// Build client
var slack = new RtmClient(process.env.token);
slack.start();

// On any message, do stuff
slack.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
    console.log('Message:', message);

    if (message['subtype'] == 'bot_message') {
      slack.sendMessage("I think I should probably send this data somewhere...", message['channel']);
    }
    else if (message['type'] == 'message') {
        slack.sendMessage("I think you said: " + message['text'], message['channel']);
    }


});
