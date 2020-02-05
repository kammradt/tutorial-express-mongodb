const moongose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new moongose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please, insert a password!'],
  },
  password: {
    type: String,
    required: [true, 'Please, insert a password!'],
  }
})

userSchema.statics.findByCredentials = async ({email, password}) => {
  let found = await User.findOne({ email })
  if (!found)
    throw new Error('User not found!')

  const hasCorrectPassword = await bcrypt.compare(password, found.password)
  if (!hasCorrectPassword)
    throw new Error('Wrong credentials!')

  return found
}

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password'))
    user.password = bcrypt.hashSync(user.password)
  next()
})

const User = moongose.model('User', userSchema)

module.exports = User