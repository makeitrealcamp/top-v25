const BASE_URL = 'http://localhost:8080/api';

const getToken = () => localStorage.getItem('token');

export async function getMyProfile() {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: { 'Authorization': `Bearer ${getToken()}` }
  });

  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}
