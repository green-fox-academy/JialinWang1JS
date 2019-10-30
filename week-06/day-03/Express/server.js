const fakeExpress = require('./fake-express')

const app = fakeExpress()
const PORT = 3000

app.get('/my-endpoint', (req, res) => {
  // console.log(req, res)
  res.send('1')
})
app.listen(PORT, () => console.log(`App is running on ${PORT}`))
