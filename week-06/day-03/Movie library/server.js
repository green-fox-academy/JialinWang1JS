const http = require('http')
const { getMethod, postMethod, deleteMethod, putMethod } = require('./methods')

const methodArray = new Map()



methodArray.set('GET', (req, res) => getMethod(req, res))
methodArray.set('POST',(req, res) =>  postMethod(req, res))
methodArray.set('DELETE',(req, res) =>  deleteMethod(req, res))
methodArray.set('PUT',(req, res) =>  putMethod(req, res))

const server = http.createServer((req, res) => {
  console.log('client in...')
  methodArray.get(req.method)(req, res)
  res.end()
})
server.listen(3000, () => console.log('server now running at port 3000'))
