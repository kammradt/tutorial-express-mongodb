const moongose = require('mongoose')

const Email = moongose.model('Email', {
    email: {
        type: String,
        required: [true, 'Please, insert the Email!'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Please, insert a Name!'],
        trim: true
    },
    score: {
        type: Number,
        required: [true, 'Please, insert the Score!'],

    }
})

module.exports = Email