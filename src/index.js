import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import { router } from './routes/route.js'
import { join } from 'path'

const app = express()
// Set the view engine to ejs
app.set('view engine', 'ejs')
// Set the view directory
app.set('views', join('./src', 'views'))
// Serve static files from the 'public' folder
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})

export default app
