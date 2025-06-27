const express = require('express')
const cors = require('cors')

app.get('/ping', (req, res) => {
  res.status(200).send('pong')
});

const router = require('./routes')



const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
