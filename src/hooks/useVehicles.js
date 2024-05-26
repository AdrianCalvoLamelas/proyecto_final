import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

export const useVehicles = () => {
  const { user, logout } = useContext(AuthContext);

  const fetchVehicles = async () => {
    const response = await fetch(`http://localhost:3001/api/vehicles`, {
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
    fetchVehicles
  }
}