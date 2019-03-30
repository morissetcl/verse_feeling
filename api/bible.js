export function getVerseFromBibleApiWithSearchedText (text) {
  const url = "https://bible-api.com/john%203:16"
  return fetch(url)
    .then((response) => response)
    .catch((error) => console.error(error))
}
