const http = require('http')

let request
let getCallback = {}
let response = {
  send: () => {
    console.log('get into send2')
  }
}

const server = http.createServer((req, res) => {
  console.log('get into server')

  request = req
  response = {
    send: url => {
      console.log('get into send')
      res.write(url)
      res.end()
    }
  }
  console.log(getCallback.urlOfMethod, req.url)

  if (getCallback.urlOfMethod === req.url) getCallback.callbackFunc(request, response)
  else {
    res.statusCode = 404
    res.end()
  }
})

module.exports = () => {
  return {
    listen: (PORT, callback) => server.listen(PORT, callback),
    get: (url, callback) => {
      getCallback = {
        callbackFunc: callback,
        urlOfMethod: url
      }
    }
  }
}
