export async function createUser({name, email, password}) {
  const response = await fetch(`http://localhost:3001/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  });

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export async function loginUser({email, password}) {
  const response = await fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}