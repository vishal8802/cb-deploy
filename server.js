const express = require('express')

const PORT = process.env.PORT || 4444
const app = express()

app.get('/', (req, res) => {
   res.send('Hello ! This is a sample app')
})

app.listen(PORT, () => {
   console.log('started on ' + PORT)
})