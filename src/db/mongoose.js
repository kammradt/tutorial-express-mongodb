const moongose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/database-texts'

moongose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const Text = moongose.model('Text', {
  title: {
    type: String,
    trim: true
  },
  text: {
    type: String,
    require: true,
    trim: true
  },
  size: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 600) {
        throw new Error('Size must be bigger than 600!')
      }
      if (value > 1000) {
        throw new Error('Size must be less than 1000!')
      }
    }
  }
})

let myTitle = 'History of super hero!    '
let myText = '     My great text about heroes... Really Long...'
let sizeOfText = myText.split(' ').length

const willBeSaved = new Text({
  title: myTitle,
  text: myText,
  size: 66666
})

willBeSaved.save()