const express = require('express')
const cors = require('cors')
require('./db/mongoose')
require('./env/env')

const app = express()
const port = process.env.PORT || 3000

const textsRoute = require('./routes/text')
const emailsRoute = require('./routes/email')
const usersRoute = require('./routes/user')

app.use(cors({ origin: 'http://localhost:8080' }))
app.use(express.json())

app.use(textsRoute)
app.use(emailsRoute)
app.use(usersRoute)

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})