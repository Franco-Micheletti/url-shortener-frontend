export const login = async (username, password) => {
  const url = import.meta.env.PRODUCTION ? `${import.meta.env.BACKEND_URL}/login/` : 'http://127.0.0.1:8000/login/'
  const response = await fetch(`${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  const json = await response.json()
  return json
}
