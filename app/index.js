const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
app.use(cors(
  origin: [
    /^http:\/\/localhost:\d+$/,
    'https://sport-see-frontend.vercel.app',
  ],
  credentials: true
))
const port = 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
