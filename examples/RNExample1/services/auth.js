export const loginUser = async (auth) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  }

  const response = await fetch('http://localhost:8080/auth/local/login', options);

  const data = await response.json();
  return data;
}
