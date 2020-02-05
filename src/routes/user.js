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
    return response.send({ message: saved })
  } catch (error) {
    return response.status(400).send({ error })
  }
})

  }
})
module.exports = router