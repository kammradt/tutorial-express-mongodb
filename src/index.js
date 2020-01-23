const express  = require('express')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is ON and running on port ${port}`)
})