import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const useCategories = () => {
  const { user, logout } = useContext(AuthContext);

  const fetchCategories = async () => {

    const response = await fetch(`http://localhost:3001/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}` 
      }
    });
  
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      throw new Error('Error');
    }
  
    return response.json();
  };

  return {
    fetchCategories
  }
}

