export const useUsers = () => {

  const createUser = async ({name, email, password}) => {
    debugger;
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

  const loginUser = async ({email, password}) => {
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

  return {
    createUser,
    loginUser
  }
}
