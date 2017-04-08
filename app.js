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

      if (message['type'] == 'message') {
          slack.sendMessage("I think you said: " + message['text'], message['channel']);
      }
});

//
// var bot = controller.spawn({
//     token: process.env.token
// }).startRTM();
// // reply to non-mentioning incoming messages
// controller.on('ambient', function(bot, message) {
//
//     console.log(message)
//     // This seems to be the message type for "sent messages"
//     if (message['type'] == 'message') {
//         // Echo message
//         bot.reply(message, 'You said: ' + message['text']);
//     }
// });
//
// // reply to messages @hackbot
// controller.on('message_received', function(bot, message) {
//
//     console.log(message)
//     // This seems to be the message type for "sent messages"
//     if (message['type'] == 'desktop_notification') {
//         // Echo message
//         bot.reply(message, "In the future, I will support commands. For now, I'm not listening")
//     }
// });
