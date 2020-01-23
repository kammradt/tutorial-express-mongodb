const moongose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/database-texts'

moongose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
