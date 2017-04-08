var message = { text: '',
  bot_id: 'B4X7ETGB0',
  attachments:
   [ { fallback: '<https://github.com/tburnam/hackday2017/tree/master|[hackday2017:master]> <https://github.com/tburnam/hackday2017/commit/bbe6664b5ad48a81235007cdd24b406730002ff3|1 new commit> by patxu',
       text: '`<https://github.com/tburnam/hackday2017/commit/bbe6664b5ad48a81235007cdd24b406730002ff3|bbe6664>` update regex - patxu',
       pretext: '<https://github.com/tburnam/hackday2017/tree/master|[hackday2017:master]> 1 new commit by patxu:',
       id: 1,
       color: '4183C4',
       mrkdwn_in: [Object] } ],
  type: 'message',
  subtype: 'bot_message',
  team: 'T02FQFVUX',
  channel: 'G4RRRL3D2',
  event_ts: '1491684465.023156',
  ts: '1491684465.023156' }

    var authorRegex = '> by ([a-zA-Z]*):';
    var urlRegex = '<(.*?)\\|';
    var commitMsgRegex = '` (.*?) -';

    var commits = message['attachments'][0]['text'].split('\n');

    for (var i = 0; i < commits.length; i++) {
      commitRef.set({
        console.log(message['attachments'][0]['fallback'].match(authorRegex)[1]);
        console.log(commits[i].match(urlRegex)[1]);
        console.log(commits[i].match(commitMsgRegex)[1]);
      });
    }
