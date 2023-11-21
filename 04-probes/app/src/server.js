const express = require('express')
const app = express()
const port = 8080

const startTime = Math.floor(Date.now()/1000)

app.get('/__ready', (req, res) => {
  const callTime = Math.floor(Date.now()/1000)

  if (startTime + 30 < callTime) {
    res.sendStatus(200)
  } else {
    res.sendStatus(500)
  }
})

app.get('/__health', (req, res) => {
  const callTime = Math.floor(Date.now()/1000)

  if (startTime + 90 < callTime) {
    res.sendStatus(500)
  } else {
    res.sendStatus(200)
  }
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Server web listening on port ${port}`)
})