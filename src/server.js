import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

export const start = async () => {
  try {
    app.listen(3001, () => {
      console.log(`Server on http://localhost:3001`)
    })
  } catch (e) {
    console.error(e)
  }
}
