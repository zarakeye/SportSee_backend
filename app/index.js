const express = require('express')
const cors = require('cors')

const router = require('./routes')



const app = express()
app.use(cors())
const port = process.env.PORT || 3000


app.get('/ping', (req, res) => {
  res.status(200).send('pong')
});
app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
