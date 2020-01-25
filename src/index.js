const express = require('express')
const cors = require('cors')
const Text = require('./db/models/text')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: 'http://localhost:8080'
}))

app.use(express.json())

app.get('/texts', async (request, response) => {
  let listOfTexts = await Text.find()
  return response.send({ text: listOfTexts })
})

app.get('/texts/:id', async (request, response) => {
  let id = request.params.id
  try {
    let foundText = await Text.findById(id)
    return response.send(foundText)
  } catch (error) {
    return response.status(404).send({ error: `There are no Text with the given id: ${id}.` })
  }
})

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})