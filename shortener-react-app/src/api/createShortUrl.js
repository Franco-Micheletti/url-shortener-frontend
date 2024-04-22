export const createShortUrl = async (longUrl) => {
  console.log(import.meta.env.PRODUCTION)
  console.log(process.env.PRODUCTION)
  const url = import.meta.env.PRODUCTION ? `${import.meta.env.BACKEND_URL}/url/create_short_url` : 'http://127.0.0.1:8000/url/create_short_url'
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
