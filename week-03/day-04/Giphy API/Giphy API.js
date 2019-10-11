// let http = new XMLHttpRequest()

// http.onreadystatechange = () => {
//   console.log(http.readyState)
//   if(http.readyState === 4 && http.status) console.log(http.response)
// }

// http.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=4KO5fZF8agGySCIZvsf0DqOm4ayAAwlk&q=cheeseburgers', true)
// http.send()
let images = document.getElementById('images')
let button = document.querySelector('button')
button.addEventListener('click', () => {
  let imageList = document.querySelectorAll('img')
  for(img of imageList){
    img.setAttribute('src', img.dataset.src)
  }
})
fetch('http://api.giphy.com/v1/gifs/search?api_key=4KO5fZF8agGySCIZvsf0DqOm4ayAAwlk&q=cheeseburgers')
  .then(res => res.json())
  .then(result => {
    for (img of result.data) {
      insertImage(img)
      button.toggleAttribute('disabled')
    }
  })

function insertImage(imgP) {
  let img = document.createElement('img')
  img.setAttribute('src', imgP.images['480w_still'].url)
  img.setAttribute('data-src', imgP.images['preview_gif'].url)
  images.insertBefore(img, images.lastChild)
}
