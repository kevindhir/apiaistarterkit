const express = require('express')
const bodyParser = require('body-parser')
const apiai = require('apiai')

//This is available in your agent's console 
const APIAI_ACCESS_TOKEN = 'your_access_token'
const app = express()
const apiAiClient = apiai(APIAI_ACCESS_TOKEN)

app.listen((process.env.PORT || 5000), function () {
    console.log("The application successfully launched.");
});


app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

//This will handle calls coming in from API.AI
app.post('/apiai', determineAction)

function determineAction(req, res){
	const action = req.body.result.action
	switch(action){
		case 'place_order':
			console.log("Case is place_order")
			placeOrder(req, res)
			break
		default: 
			console.log("Case is default")
			res.statusCode = 200
			res.statusMessage = "Default case"
			res.end("You did it")
	}
}

function placeOrder(req, res){
	res.statusCode = 200
	res.statusMessage = "place_order case"
	res.end("You did it")
}
