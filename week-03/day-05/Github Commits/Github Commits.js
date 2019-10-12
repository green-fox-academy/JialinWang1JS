let reposLabel = document.getElementById('repos-label')
let table = document.querySelector('table')
let button = document.querySelector('button')
let repoList
let repoListIndex = 0

let headers = new Headers()
  headers.set('Authorization', 'Basic ' + btoa('JialinWang1' + ':' + '14a6316f616278226526f9516f4aa7ec0e5b5891'))

button.addEventListener('click', () => {
  let record = repoList[repoListIndex].name
  reposLabel.textContent = record
  printList(record)
})
getRepos()

async function getRepos() {
  
  repoList = await fetch('https://api.github.com/orgs/green-fox-academy/repos', { headers }).then(list => list.json())
  button.toggleAttribute('disabled')
  console.log(repoList)
}

function printList(record) {
  fetch(`https://api.github.com/repos/green-fox-academy/${record}/commits`, { headers })
  .then(result => result.json())
  .then(commitList => {
    console.log(commitList)

    for (commit of commitList) {
      insertTrIntoTable(commit)
    }
  })
}

function insertTrIntoTable(commit) {
  let tr = document.createElement('tr')
  let tdTime = document.createElement('td')
  let tdCommit = document.createElement('td')
  let tdAuthor = document.createElement('td')

  tdTime.textContent = commit.commit.committer.date
  tdCommit.textContent = commit.commit.message
  tdAuthor.textContent = commit.author.login
  tr.appendChild(tdTime)
  tr.appendChild(tdCommit)
  tr.appendChild(tdAuthor)
  table.appendChild(tr)
}
