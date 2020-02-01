const express = require('express')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_TOKEN);

const router = express.Router()

router.post('/mail', async (request, response) => {
  let emailInformation = request.body
  const msg = {
    to: emailInformation.to,
    from: 'your-email@gmail.com',
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