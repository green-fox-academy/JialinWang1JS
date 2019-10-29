/* eslint-disable no-return-assign */
/* eslint-disable func-names */
const mysql = require('mysql')
const express = require('express')
const csv = require('csv-parser')
const fs = require('fs')

const results = []

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('static'))

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
})

conn.connect(function(err) {
  if (err) {
    console.error('Error connecting to Db')
    return
  }
  console.log('Connection established')
})

app.get('/', (req, res) => {
  conn.query(
    'create table if not exists person ( id integer primary key, prefix varchar(200), first_name varchar(200), last_name varchar(200), address varchar(200), height float, bitcoin_address varchar(200), color_preference varchar(9))',
    (err, result) => {
      if (err) {
        console.error(err.toString())
        return
      }
      console.log(result)
    }
  )
})
app.get('/parse', (req, res) => {
  console.log('parse')
  let sqlString =
    'insert into person values'
  fs.createReadStream('./static/data.csv')
    .pipe(csv())
    // eslint-disable-next-line no-return-assign 
    //id	prefix	first_name	last_name	address	height	bitcoin_address	color_preference
    .on(
      'data',
      data =>
        (sqlString += `(${data.id}, "${data.prefix}", "${data.first_name}", "${data.last_name}", "${data.address ? data.address: ' '}", ${data.height ? data.height : 0}, "${data.bitcoin_address}", "${data.color_preference}"),`)
    )
    .on('end', () => {
      sqlString = sqlString.substring(0, sqlString.length - 1)
      console.log(sqlString)
      conn.query(sqlString, (err, result) => {
        if (err) {
          console.error(err.toString())
          return
        }
        console.log(result)
      })
      //results.push(data)
      // for (person of results) {
      //   conn.query('insert into person values (?, ?, ?, ?)', {
      //   }, (err, result) => {
      //   if (err) {
      //     console.error(err.toString())
      //     return
      //   }
      //   console.log(result)
      // })
      // }
      // conn.query('', (err, result) => {
      //   if (err) {
      //     console.error(err.toString())
      //     return
      //   }
      //   console.log(result)
      // })
    })
})

// fs.createReadStream('./static/data.csv')
// .pipe(csv())
// .on('data', data => results.push(data))
// .on('end', () => {

// })

app.listen(3001)
