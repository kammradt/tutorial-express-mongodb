const axios = require('axios')

let user = 'kammradt'
axios.get(`https://api.github.com/users/${user}/repos`).then(result => { // 1.
    console.log(result) // 2.
})