export function getVerseFromBibleApiWithSearchedText(tags) {
  const url = 'https://vmind-api.herokuapp.com/api/v1/verses?need=' + tags['need'] + '&theme=' + tags['theme']
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
