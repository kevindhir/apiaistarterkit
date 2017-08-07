const express = require('express')
const bodyParser = require('body-parser')
const apiai = require('apiai')

//This is available in your agent's console 
const APIAI_ACCESS_TOKEN = 'your_access_token'
const app = express()
const apiAiClient = apiai(APIAI_ACCESS_TOKEN)

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

//This will handle calls coming in from API.AI
app.post('/apiai', () => {
	console.log('Request on apiai')
})

console.log('Server started successfully'