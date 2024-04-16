export const createShortUrl = async (longUrl) => {
  const url = 'http://127.0.0.1:8000/url/create_short_url'
  const response = await fetch(`${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      long_url: longUrl
    })
  })
  const json = await response.json()
  return json
}
