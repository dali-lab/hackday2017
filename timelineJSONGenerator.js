const firebase = require("firebase");

var config = {
	apiKey: "AIzaSyAHeka91l_CrcAmPfzyYahie-BqgVnn05c",
	authDomain: "hackday17s.firebaseapp.com",
	databaseURL: "https://hackday17s.firebaseio.com",
	projectId: "hackday17s",
	storageBucket: "hackday17s.appspot.com",
	messagingSenderId: "261685621415"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();
var commitRef = rootRef.child('commit');
var imageRef = rootRef.child('image');


// Force synchronous!

rootRef.on("value", function(snapshot) {
	var data = snapshot.val()
	var commits = data["commit"]
	var images = data["image"]
	var posts = data["post"]


	var mainJson = {}
	mainJson["title"] = {}
	mainJson["title"]["media"] = {
		"url":"",
		"caption":"",
		"credit":"timeline"
	}
	mainJson["title"]["text"] = {
		"headline":"Welcome to timeline",
		"text":"Get started below"
	}

	var records = []

	for (var x in commits) {
		var record = {}

		var media = {}
		media['url'] = "https://files.slack.com/files-pri/T02FQFVUX-F4VTF2C3T/icon3.png"
		media['caption'] = "GitHub commit"
		media['credit'] = commits[x]["author"]

		var date = timeConverter(commits[x]["ts"])

		var start_date = {}
		start_date['month'] = 4
		start_date['day'] = getRandomInt(1, 30)
		start_date['year'] = date.year

		var text = {}
		text['headline'] = commits[x]["message"]
		text['text'] = commits[x]["link"]


		record['media'] = media;
		record['start_date'] = start_date;
		record['text'] = text

		records.push(record)
	}

	for (var x in images) {
		var record = {}

		var media = {}
		media['url'] = "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png"
		media['caption'] = "Image upload"
		media['credit'] = images[x]["author"]

		var date = timeConverter(images[x]["ts"])

		var start_date = {}
		start_date['month'] = 4
		start_date['day'] = getRandomInt(1, 30)
		start_date['year'] = date.year

		var text = {}
		text['headline'] = "Image file"
		text['text'] = images[x]["link"]


		record['media'] = media;
		record['start_date'] = start_date;
		record['text'] = text

		records.push(record)
	}

	for (var x in posts) {
		var record = {}

		var media = {}
		media['url'] = "https://tctechcrunch2011.files.wordpress.com/2014/10/slack-large.png"
		media['caption'] = "Slack post"
		media['credit'] = posts[x]["author"]

		var date = timeConverter(posts[x]["ts"])

		var start_date = {}
		start_date['month'] = 4
		start_date['day'] = getRandomInt(1, 30)
		start_date['year'] = date.year

		var text = {}
		text['headline'] = posts[x]["message"]
		text['text'] = posts[x]["link"]


		record['media'] = media;
		record['start_date'] = start_date;
		record['text'] = text

		records.push(record)
	}
	mainJson["events"] = records
	console.log(JSON.stringify(mainJson))
})



function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var year = a.getFullYear();
	var month = a.getMonth();
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = {};
	time['month'] = month
	time['day'] = date;
	time['year'] = year;
	return time;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
