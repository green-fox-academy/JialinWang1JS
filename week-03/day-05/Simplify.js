const myGetHttp = url => {
  return new Promise((resolve, reject) => {
    resolve(`This is a dummy HTTP response for GET ${url}`)
  })
}

const myParser = string => {
  return new Promise((resolve, reject) => {
    resolve(`This is the parsed response: ${string}`)
  })
}

const myDbSaver = dataToSave => {
  return new Promise((resolve, reject) => {
    resolve(`This data is saved: ${dataToSave}`)
  })
}

const notifyUser = message => {
  return new Promise((resolve, reject) => {
    resolve(`User is notified about this: ${message}`)
  })
}

function promiseHell() {
  myGetHttp('http://api.something.com/do')
    .then(response => {
      console.log('Got HTTP response')
      myParser(response)
        .then(parsed => {
          console.log('Got parsed HTTP response')
          myDbSaver(parsed)
            .then(message => {
              console.log('Response is saved in the DB')
              notifyUser(message)
                .then(result => {
                  console.log(result)
                })
                .catch(error => {
                  console.log('Something bad happened', error)
                })
            })
            .catch(error => {
              console.log('Something bad happened', error)
            })
        })
        .catch(error => {
          console.log('Something bad happened', error)
        })
    })
    .catch(error => {
      console.log('Something bad happened', error)
    })
}

// async function promiseHell() {
//   try {
//     let response = await myGetHttp('http://api.something.com/do')
//     console.log('Got HTTP response')
//     let parsed = await myParser(response)
//     console.log('Got parsed HTTP response')
//     let message = await myDbSaver(parsed)
//     console.log('Response is saved in the DB')
//     let result = await notifyUser(message)
//     console.log(result)
//   } catch (e) {
//     console.log('Something bad happened', error)
//   }
// }

promiseHell()
