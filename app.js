const express = require('express')
const app = express()
require('dotenv').config()
const mealsRouter = require('./routes/mealsRouter')
const port = 3000


app.use('/meals', mealsRouter); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})