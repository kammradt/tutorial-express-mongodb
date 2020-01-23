const express = require('express')
const Text = require('./db/models/text')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/texts', (request, response) => { // 1.

  Text.find().then(result => { // 2.
    return response.send({ text: result}) // 3.
  })

})

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})