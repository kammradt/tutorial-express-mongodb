const express = require('express')
const User = require('./../db/models/user')
const router = express.Router()

router.post('/user/register', async (request, response) => {
  let userInformation = request.body
  try {
    let newUser = new User({
      email: userInformation.email,
      password: userInformation.password
    })
    let saved = await newUser.save()
    let token = await saved.generateAuthToken()
    return response.send({ token })
  } catch (error) {
    return response.status(400).send({ error })
  }
})

router.post('/user/login', async (request, response) => {
  let { email, password } = request.body
  try {
    const user = await User.findByCredentials({ email, password })
    const token = await user.generateAuthToken()
    return response.send({ token })
  } catch (error) {
    return response.status(400).send({ error })
  }
})


module.exports = router