if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}


const botkit = require('botkit');
const os = require('os');
const controller = botkit.slackbot();

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


// reply to non-mentioning incoming messages
controller.on('ambient', function(bot, message) {

    console.log(message)
    // This seems to be the message type for "sent messages"
    if (message['type'] == 'message') {
        // Echo message
        bot.reply(message, 'You said: ' + message['text']);
    }
});


// reply to messages @hackbot
controller.on('message_received', function(bot, message) {

    console.log(message)
    // This seems to be the message type for "sent messages"
    if (message['type'] == 'desktop_notification') {
        // Echo message
        bot.reply(message, 'You said: ' + message['content']);
    }
});
