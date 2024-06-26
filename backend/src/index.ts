import mongoose from 'mongoose'
import { env } from './configs/env'

import app from './configs/server'
mongoose.connect('mongodb://localhost:27017/saudeOn')
  .then(() => {
    app.listen(env.PORT, () => console.log(`Server runing at: http://localhost:${env.PORT}`))
  })
  .catch(err => {
    console.log(err)
  })