const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

const textsRoute = require('./routes/text')
const emailsRoute = require('./routes/email')

app.use(cors({ origin: 'http://localhost:8080' }))
app.use(express.json())

app.use('/', textsRoute)
app.use('/', emailsRoute)

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})