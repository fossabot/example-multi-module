import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('localhost/testing', {}, (err) => {
  if (err) {
    console.log('Connection Error: ', err)
  } else {
    console.log('Successfully Connected')
  }
})

const port = process.env.PORT || 4000
const app = express()

app.listen(port, () => {
  console.log('Webserver started: ', port)
})
