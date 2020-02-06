const express = require('express')
const sgMail = require('@sendgrid/mail');
const Email = require('./../db/models/email')

sgMail.setApiKey(process.env.SENDGRID_TOKEN);

const router = express.Router()

router.post('/mail', async (request, response) => {
  let { email, name, score } = request.body
  const msg = {
    to: emailInformation.to,
    from: 'your-email@gmail.com',
    templateId: 'd-aaaabbbbcccddddeeee',
    dynamic_template_data: {
      receiverName: name,
      resultValue: score
    },
  };
  try {
    let emailHistory = new Email({ email, name, score })
    await emailHistory.save()
    await sgMail.send(msg);
    return response.send({ message: 'Email sent!' })
  } catch (error) {
    return response.send({ error: `An error occurred: ${error}` })
  }
})

module.exports = router