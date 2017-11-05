const express = require('express')
const app = express()
app.all('*', (req, res) => {
  return res.send('unauthorized request')
})
app.listen(3000, () => {
  console.log('app is running on port 3000')
})
