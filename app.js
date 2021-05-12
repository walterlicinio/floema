const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home')
})
app.get('/about', (req, res) => {
  res.render('pages/about')
})
app.get('/detail/:id', (req, res) => {
  res.render('pages/detail')
})
app.get('/another', (req, res) => {
  res.render('pages/another')
})

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`)
})
