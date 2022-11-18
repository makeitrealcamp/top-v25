const BASE_URL = process.env.REACT_APP_BASE_URL

export async function createUser(user){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }

  const res = await fetch(`${BASE_URL}/api/users`, options)
  const result = await res.json()

  return result
}

export async function getAllUsers() {
  const res = await fetch(`${BASE_URL}/api/users`)
  const result = await res.json()

  return result
}

export async function getUser(id) {
  const res = await fetch(`${BASE_URL}/api/users/${id}`)
  const result = await res.json()

  return result
}

export async function updateUser(user) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }

  const res = await fetch(`${BASE_URL}/api/users/${user.id}`, options)
  const result = await res.json()

  return result
}

export async function deleteUser(id) {
  const options = {
    method: 'DELETE',
  }

  const res = await fetch(`${BASE_URL}/api/users/${id}`, options)
  const result = await res.json()

  return result
}
