export async function validateUser(token) {
  const response = await fetch(`http://localhost:8080/auth/local/activate/${token}`)
  const data = await response.json()

  return data
}
