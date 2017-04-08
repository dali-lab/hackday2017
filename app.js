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


// reply to any incoming message
controller.on('message_received', function(bot, message) {

    // This seems to be the message type for "sent messages"
    if (message['type'] == 'desktop_notification')

    // Echo message
    bot.reply(message, 'You said: ' + message['content']);
});

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'yeezy',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

})
