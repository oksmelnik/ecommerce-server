import setupDb from './db'
import app from './app'

const port = process.env.PORT || 4001

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
