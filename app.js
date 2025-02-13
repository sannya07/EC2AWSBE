const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('EC2 Backend world.........')
})

app.listen(port, () => {
  console.log(`Port number is ${port}`);
})