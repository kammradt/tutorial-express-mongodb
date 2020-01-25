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
    return response.status(404).send({ error: `There are no Text with the given id: ${id}` })
  }
})

app.put('/texts/:id', async (request, response) => {
  let id = request.params.id
  let newTextInfo = request.body
  try {
    let foundText = await Text.findById(id)
    foundText.title = newTextInfo.title
    foundText.text = newTextInfo.text
    foundText.size = newTextInfo.text.split(' ').length

    let updatedText = await foundText.save()
    return response.send(updatedText)
    
  } catch (error) {
    return response.status(404).send({ error: `An error occurred: ${error}` })
  }
})

app.delete('/texts/:id', async (request, response) => {
  let id = request.params.id 
  try {
    let deleted = await Text.findByIdAndDelete(id)
    return response.send({message: `The Text with title: ${deleted.title} and id: ${deleted.id} was successfully deleted!`}) 
  } catch (error) {
    return response.status(404).send({ error: `There are no Text with the given id: ${id}` })
  }
})

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})