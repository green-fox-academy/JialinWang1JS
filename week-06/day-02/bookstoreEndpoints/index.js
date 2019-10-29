/* eslint-disable func-names */
const mysql = require('mysql')
const express = require('express')

const app = express()
app.set('view engine', 'ejs')

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

app.get('/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast', (err, result) => {
    if (err) {
      console.error(err.toString())
      return
    }
    res.render('titles', {
      dataList: result
    })
  })
})

function processsqlStringWithQuery(sqlString, query) {
  let appendString = ' where'
  if (query.category) appendString += ` cate_descrip = '${query.category}' and`
  if (query.publisher) appendString += ` pub_name = '${query.publisher}' and`
  if (query.plt) appendString += ` book_price < ${query.plt} and`
  else if (query.pgt) appendString += ` book_price > ${query.pgt} and`
  appendString = appendString.substring(0, appendString.lastIndexOf('and'))
  console.log(`${sqlString + appendString  };`);
  
  return `${sqlString + appendString  };`
}
app.get('/books', (req, res) => {
  const sqlString =
    'select aut_name, book_name, cate_descrip, pub_name, book_price from author as a join book_mast bm on a.aut_id = bm.aut_id  join category c on c.cate_id = bm.cate_id join publisher pr on bm.pub_id = pr.pub_id'

  conn.query(req.query ? processsqlStringWithQuery(sqlString, req.query) : sqlString, (err, result) => {
    if (err) {
      console.error(err.toString())
      return
    }
    res.render('books', {
      bookList: result
    })
  })
})

app.listen(3001)
