export const getLongUrl = async (shortUrl) => {
  const url = `http://127.0.0.1:8000/url/get_url/short_url=${shortUrl}`
  const response = await fetch(`${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json
}
