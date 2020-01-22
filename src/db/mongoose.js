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
    required: [true, 'Please, insert some Text!'],
    trim: true
  },
  size: {
    type: Number,
    required: true,
    min: [600, 'Size must be equal or bigger than 600'],
    max: [1000, 'Size must be equal or less than 1000!']
  }
})

let myTitle = 'History of super hero!'
let myText = 'My great text about heroes... Really Long... a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e a b c d e '
let sizeOfText = myText.split(' ').length

const willBeSaved = new Text({
  title: myTitle,
  text: myText,
  size: sizeOfText
})

Text.find().then(texts => { // 1.
  console.log(texts) // 2.

  texts.forEach(text => {
    console.log(text.id) // 3.
  })
  
})