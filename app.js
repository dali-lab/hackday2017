if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const os = require('os');
const RtmClient = require('@slack/client').RtmClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

// Build client
var slack = new RtmClient(process.env.token);
slack.start();

// Handles any incoming message from slack.
slack.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {

    // Debug line for us
    console.log('Message:', message);

    // Route message to appropriate handler
    // See types/subtypes: https://api.slack.com/events/message
    switch (message['subtype']) {
        case 'bot_message':
            handleBot(message);
            break;

        case 'file_share':
            handleFile(message);
            break;

        default:
            handleMessage(message)
            break;
    }
});

// Message handlers
function handleBot(message) {
    slack.sendMessage("So there's another bot, huh?", message['channel']);
}

function handleFile(message) {
    slack.sendMessage("I'm going to put those files somewhere", message['channel']);
}

function handleMessage(message) {
    direct_mention = message['text'].indexOf("<@" + slack.activeUserId + ">")
    if (direct_mention != -1) {
        slack.sendMessage("You mentioned me!", message['channel']);
    } else {
        slack.sendMessage("I think you said: " + message['text'], message['channel']);
    }
}
