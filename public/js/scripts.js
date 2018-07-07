function getEndpointUrl() {
  return fetch('/backend_url');
}

function toSnakeCase(match, p1, p2) {
    return [p1, p2].join('_')
}

function addPieceInfo(endpoint, element) {
  this.getEndpointUrl().then((response) => {
    response.json().then( response => {
      fetch(response.url + endpoint, { mode: 'cors' })
        .then((response) => {
          return response.text()
        }).then((response) => {
          element.append(response)
        })
      })
    }
  )
}

let idsList = ["reed", "mouthpiece", "neck", "body", "octave-pin", "neck-strap"]

idsList.forEach( (id) => {
  let element = document.getElementById(id)
  let snakeCaseId = id.replace(/([^\w]*)-([^\w]*)/, toSnakeCase)
  addPieceInfo(snakeCaseId, element)
})
