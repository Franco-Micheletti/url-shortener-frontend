export const getUserUrls = async () => {
  const url = import.meta.env.VITE_PRODUCTION ? `${import.meta.env.VITE_BACKEND_URL}/user_urls/all` : 'http://127.0.0.1:8000/user_urls/all'
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
