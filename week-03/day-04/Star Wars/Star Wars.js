let button = document.querySelector('button')
let moiveList = document.getElementById('movie-list')
let characterList = document.getElementById('character-list')
let input = document.querySelector('input')
let http = new XMLHttpRequest()
let movieLoding = document.querySelector('#movie-load')
let characterLoding = document.querySelector('#character-load')

button.addEventListener('click', searchCharacter)
characterList.addEventListener('click', searchMovie)

function searchCharacter() {
  characterList.innerHTML = ''
  moiveList.innerHTML = ''
  characterList.toggleAttribute('hidden')
  characterLoding.toggleAttribute('hidden')
  sendHttpRequest({
    category: 'people',
    value: input.value,
    target: null
  })
}

function searchMovie(event) {
  moiveList.innerHTML = ''
  moiveList.toggleAttribute('hidden')
  movieLoding.toggleAttribute('hidden')
  sendHttpRequest({
    category: 'films',
    value: '',
    target: event.target.dataset.url
  })
}
function insertIntoUl(results, target) {
  if (!target) {
    characterList.toggleAttribute('hidden')
    characterLoding.toggleAttribute('hidden')
  } else {
    movieLoding.toggleAttribute('hidden')
    moiveList.toggleAttribute('hidden')
  }
  if (results)
    for (result of results) {
      if (target && result.characters.indexOf(target) !== -1) {
        moiveList.innerHTML += `<li>${result.title}</li>`
      } else if (!target) {
        // li.innerHTML = `<a href="#" data-url="${result.url}">${result.name}</a>`
        characterList.innerHTML += `<li><a href="#" data-url="${result.url}">${result.name}</a></li>`
      }
    }
}

function sendHttpRequest(input) {
  http.open('GET', `https://swapi.co/api/${input.category}/${input.value}`)
  http.onreadystatechange = () => {
    if (http.status === 200 && http.readyState === 4) {
      let results = JSON.parse(http.response).results

      insertIntoUl(results, input.target)
    }
  }
  http.send()
}
