/* eslint-disable no-plusplus */
const express = require('express')
const path = require('path')

const app = express()
const PORT = 8080

app.use(express.json())

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/doubling', (req, res) => {
  const data = req.query.input
    ? {
        received: req.query.input,
        result: req.query.input * 2
      }
    : {
        error: 'Please provide an input!'
      }
  res.json(data)
})

app.get('/greeter', (req, res) => {
  const data =
    req.query.name && req.query.title
      ? {
          welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        }
      : {
          // eslint-disable-next-line no-nested-ternary
          error: req.query.name
            ? 'Please provide a title!'
            : req.query.title
            ? 'Please provide a name!'
            : 'Please provide a name and a title!'
        }
  res.json(data)
})

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params
   if(appendable){
     
    res.json({
      appended: `${appendable  }a`
    })
   }
   else{
     res.status(404)
   }
})

app.post('/dountil/:action', (req, res) => {
  let {until} = req.body
  const {action} = req.params
  // eslint-disable-next-line no-unused-vars
  let result = 0
  if(action === 'sum') {
    while(until){
      result += until--
    }
  }
  else if (action === 'factor'){
    result = 1
    while(until){
      result *= until--
    }
  }
  else {
    result = 'Please provide a number!'
  }
  res.json({
    result
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
