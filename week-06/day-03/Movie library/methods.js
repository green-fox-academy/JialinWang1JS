const url = require('url')
let movies = require('./movies')

function getMethod(req, res) {
  if (req.url === '/') {
    res.statusCode = 200
    res.write(JSON.stringify(movies))
    console.log('get sccuess')
  } else {
    const urlParsed = req.url.split('/')
    if (
      urlParsed[1] === 'movies' &&
      movies.some(m => {
        return m.id === +urlParsed[2]
      })
    ) {
      res.write(JSON.stringify(movies.filter(m => m.id === +urlParsed[2])[0]))
      res.statusCode = 200
    } else {
      res.statusCode = 404
      res.write('movie not found')
    }
  }
  res.end()
}

function postMethod(req, res) {
  console.log(req, res, 'post')
}

function deleteMethod(req, res) {
  console.log('delete')
  // const urlParsed = req.url.split('/')
  const urlParsed = url.parse(req.url)

  const urlPath = urlParsed.path.split('/')
  console.log()

  if (
    urlPath.length < 3 ||
    movies.every(m => {
      return m.id !== +urlPath[2]
    })
  ) {
    res.statusCode = 404
    res.write('movie not found')
  } else if (!req.headers.authorization || req.headers.authorization !== 'top-secret') {
    res.statusCode = 403
    res.write('Forbidden ')
  } else {
    res.statusCode = 204
    movies = movies.filter(m => m.id !== +urlPath[2])
  }
  res.end()
}

function putMethod(req, res) {
  console.log(req, res, 'put')
}

module.exports = { getMethod, postMethod, deleteMethod, putMethod }
