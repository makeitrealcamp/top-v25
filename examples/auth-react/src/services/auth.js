const BASE_URL = 'http://localhost:8080/auth';

export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/local/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ email, password })
  });
  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}

export async function signup(userData) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(userData)
  });
  if (res.ok) return res.json();
  throw new Error('Email already taken!');
}

