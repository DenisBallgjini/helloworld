const express = require('express')
const helloworld = express()
const port = 8080

helloworld.get('/', (req, res) => {
    res.send('Hello World!')
})

helloworld.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = helloworld