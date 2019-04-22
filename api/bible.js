export function getVerseFromBibleApiWithSearchedText(tags) {
  const url = 'https://vmind-api.herokuapp.com/api/v1/verses?need=' + tags['need'] + '&theme=' + tags['theme']
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFeelings(deviceId) {
  const url = 'https://vmind-api.herokuapp.com/api/v1/feelings?deviceId=' + deviceId
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


export function createFeeling(params) {
  return fetch('https://vmind-api.herokuapp.com/api/v1/feelings', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  deviceId: params['deviceId'],
                  mood: params['mood']
                })
              })
}
