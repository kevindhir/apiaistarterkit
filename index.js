import express from 'express'
import bodyParser from 'body-parser'
import apiai from 'apiai'

//This is available in your agent's console 
const APIAI_ACCESS_TOKEN = 'your_access_token'
const app = express()
const apiAiClient = apiai(APIAI_ACCESS_TOKEN)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

//This will handle calls coming in from API.AI
app.post('/apiai', interpretAction)

app.listen(5000, () => {
	console.log('Server started successfully')})