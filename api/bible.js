export function getVerseFromBibleApiWithSearchedText (verse) {
  const url = "https://bible-api.com/" + verse
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
