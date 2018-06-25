import setupDb from './db'
import app from './app'
const favicon = require('serve-favicon')


const port = process.env.PORT || 4001

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))

  app.use(favicon(__dirname + '/public/images/favicon.ico'))
  app.get('/favicon.ico', (req, res) => res.status(204))
  app.get('/', function (req, res) {
      res.send('Hello world')
  })
