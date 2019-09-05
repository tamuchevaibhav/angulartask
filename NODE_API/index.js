
var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express()
port = process.env.PORT || 8081;

const connectionString = 'mongodb+srv://vaibhav_1995:5GUENod5xw7McIR0@vaibhav-scgv2.mongodb.net/test?retryWrites=true&w=majority'

const imageS = require('./model/ramDomme.js')
imageSchema = mongoose.model('ImageS', imageS);
const connector = mongoose.connect(connectionString)
console.log(connector)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '10mb' }));
var routes2 = require('./routes/addGetmongo');
; (async () => {
  let user = await connector.then(async () => {
    routes2(app)
  })
})()

app.listen(port);





























// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now()
//   }).save()
// }

// async function findUser(username) {
//   return await User.findOne({ username })
// }

// ;(async () => {
//   const connector = mongoose.connect(connectionString)
//   const username = process.argv[2].split('=')[1]

//   let user = await connector.then(async () => {
//     return findUser(username)
//   })

//   if (!user) {
//     // user = await createUser(username)
//   }

//   console.log(user)
  // process.exit(0)
// })()