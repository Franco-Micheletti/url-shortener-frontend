export const createShortUrl = async (longUrl) => {
  const url = import.meta.env.VITE_PRODUCTION ? `${import.meta.env.VITE_BACKEND_URL}/url/create_short_url` : 'http://127.0.0.1:8000/url/create_short_url'
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
  return response
}
