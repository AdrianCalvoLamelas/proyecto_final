import { useState } from 'react';
import { createUser, loginUser } from '../../services/Users';


export const Login = () => {

  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUser({name: event.target.user.name, email: event.target.email.value, password: event.target.password.value});
      return window.location = '/categories';
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser({email: event.target.email.value, password: event.target.password.value})
      setMessage('Login successful');
      return window.location = '/categories';
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div>
    {isRegistering ? (
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        {message && <span>{message}</span>}
        <input name="name" placeholder="Nombre" />
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button type="submit">Register</button>
        <button onClick={() => setIsRegistering(false)}>Cancel</button>
      </form>
    ) : (
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {message && <span>{message}</span>}
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
        <a href="#" onClick={() => setIsRegistering(true)}>¿No estás registrado?</a>
      </form>
    )}
  </div>
  );
};
