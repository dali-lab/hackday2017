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
