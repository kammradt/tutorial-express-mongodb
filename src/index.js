const express  = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {   
    let responseMessage = {
      message: 'Hello!'
    }
    return response.send(responseMessage) 
})

app.listen(port, () => {
    console.log(`Server is ON and running on port ${port}`)
})