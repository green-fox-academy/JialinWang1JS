const express = require('express')

const PORT = 3000
const app = express()

app.use(express.static('assets'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
	console.log(`Server is running under ${PORT}`)
})
