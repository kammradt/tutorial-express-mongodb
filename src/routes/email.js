const express = require('express')
const sgMail = require('@sendgrid/mail');

const router = express.Router()

sgMail.setApiKey('your-api-generated-key');

router.post('/mail', async (request, response) => {
  let emailInformation = request.body
  const msg = {
    to: emailInformation.to,
    from: 'you-email@gmail.com',
    templateId: 'd-aaaabbbbcccddddeeee',
    dynamic_template_data: {
      receiverName: emailInformation.receiverName,
      resultValue: emailInformation.resultValue
    },
  };
  try {
    await sgMail.send(msg);
    return response.send({ message: 'Email send!' })
  } catch (error) {
    return response.send({ error: `An error occurred: ${error}` })
  }
})

module.exports = router