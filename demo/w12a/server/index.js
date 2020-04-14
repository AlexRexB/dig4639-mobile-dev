// server/index.js
// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const fetch = require("node-fetch");
const cors = require('cors')
const app = express()
const port = 3001
<<<<<<< HEAD
const simpleJson = {a: 10, b: "Hello DIG4639!"}
=======
/* Step 2
const simpleJson = {a: 10, 
  b: "Hello DIG4639!", 
  list:[
    {title:"Tonight",
    content: "Watching Netflix"},
    {title:"Tomorrow",
    content: "Completing Homework"}
  ]
} 
*/
const helloWorld = "Hello World"

>>>>>>> c66db34ab4302efaeb0b30a99805354177b71ccd
app.use(cors())
app.get('/', async (req, res) => {
  // Step 2:
  // res.send(simpleJson)
  res.send(helloWorld)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))