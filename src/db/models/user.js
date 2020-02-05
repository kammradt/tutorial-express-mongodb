const moongose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new moongose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, 'Please, insert a password!'],
  },
  password: {
    type: String,
    required: [true, 'Please, insert a password!'],
  }
})

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password'))
    user.password = bcrypt.hashSync(user.password)
  next()
})

const Text = moongose.model('User', userSchema)

module.exports = Text