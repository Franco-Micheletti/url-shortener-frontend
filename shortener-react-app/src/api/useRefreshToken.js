export const getNewAccessToken = async () => {
  const url = import.meta.env.PRODUCTION ? `${import.meta.env.BACKEND_URL}/refresh_token/` : 'http://127.0.0.1:8000/refresh_token/'
  const response = await fetch(`${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json
}
