const moongose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/database-texts' 

moongose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true // Being sure to create our indexes and IDs
})

const Text = moongose.model('Text', {
    title: {
        type: String,
    },
    text: {
        type: String
    },
    size: {
        type: Number
    }
})

let myTitle = 'History of super hero!'
let myText = 'My great text about heroes... Really Long...'
let sizeOfText = myText.split(' ').length 

const saved = new Text({
    title: myTitle,
    text: myText,
    size: sizeOfText
})

saved.save()