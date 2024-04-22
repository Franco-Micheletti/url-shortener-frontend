export const getUserInfo = async () => {
  const url = import.meta.env.VITE_PRODUCTION ? `https://${import.meta.env.VITE_BACKEND_URL}/user/` : 'http://127.0.0.1:8000/user/'
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
