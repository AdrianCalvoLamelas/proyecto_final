import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useUsers } from '../../hooks/useUsers';
import { AuthContext } from '../../context/auth/AuthContext';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext( AuthContext );
  const { createUser, loginUser } = useUsers();

  const handleRegister = async (event) => {
    try {
      const userData = { name: event.name, email: event.email, password: event.password };
      const response = await createUser(userData);
      login(response);
      toast.done("Usuario creado correctamente.");
      return window.location = '/categories';
    } catch (error) {
      toast.error("Error al resgistrar el usuario, comprueba los datos introducidos.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userData = { email: event.target.email.value, password: event.target.password.value };
      const response = await loginUser(userData);
      login(response);
      return window.location = '/categories';
    } catch (error) {
      toast.error("Usuario o contraseña incorrecta.");
    }
  };

  return (
    <div>
    <ToastContainer position="top-center"/>
    {isRegistering ? (
      <form onSubmit={handleSubmit(handleRegister)} className="login-form">
        <h2>Register</h2>
        <input {...register('name', { required: true })} className="login-input" name="name" placeholder="Nombre" />
        {errors.name && <p className="error-message">Este campo es requerido</p>}
        <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="login-input" name="email" placeholder="Email" />
        {errors.email && errors.email.type === 'required' && <p className="error-message">Este campo es requerido</p>}
        {errors.email && errors.email.type === 'pattern' && <p className="error-message">Formato de correo electrónico inválido</p>}
        <input {...register('password', { required: true })} className="login-input" name="password" type="password" placeholder="Contraseña" />
        {errors.password && <p className="error-message">Este campo es requerido</p>}
        
        <div className="button-container">
          <button type="submit" className="login-submit">Register</button>
          <button type="button" className="btn-cancel" onClick={() => setIsRegistering(false)}>Cancel</button>
        </div>
      </form>
    ) : (
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input className="login-input" name="email" placeholder="Email" />
        <input className="login-input" name="password" type="password" placeholder="Contraseña" />
        <button type="submit" className="login-submit">Entrar</button>
        <a href="#" onClick={() => setIsRegistering(true)}>¿No estás registrado?</a>
      </form>
    )}
  </div>
  );
};
