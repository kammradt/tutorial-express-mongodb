const moongose = require('mongoose')

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

module.exports = Text