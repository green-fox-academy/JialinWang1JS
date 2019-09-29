const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Are you ok?', (answer) => {
  
  console.log(`${answer}`)

  rl.close()
})

console.log('and you ?')
