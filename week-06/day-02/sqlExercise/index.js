/* eslint-disable func-names */
const mysql = require('mysql')
const express = require('express')

const app = express()
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tododb'
})

conn.connect(function(err) {
  if (err) {
    console.error('Error connecting to Db')
    return
  }
  console.log('Connection established')
})

app.get('/', function(req, res) {
  conn.query('SELECT todo_description FROM todolist;', function(err, rows) {
    if (err) {
      console.error(err.toString())
      res.status(500).send('Database error')
      return
    }
    res.send(rows)
  })
})

conn.query('SELECT * FROM todolist;', function(err, rows) {
  if (err) {
    console.log(err.toString())
  }

  console.log('Data received from Db:\n')
  console.log(rows)
})
app.listen(3000)
conn.end()
