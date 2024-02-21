import { useState } from 'react';


export const Login = () => {

  // useState guarda en memoria el valor de showError
  //setShowError modifica el valor de showError
  // NUNCA SE PUEDE MODIFICAR DIRECTAMENTE SHOWERROR!!!!!!!! (showError = true => NO)
  const [showError, setShowError] = useState(false);

  function checkPassword(event) {
    event.preventDefault();

    //si la contraseña es correcta, no mostramos el error y navegamos en la aplicacion
    if (event.target.user.value === 'kanike' && event.target.password.value === '1234') {
      setShowError(false);
      return window.location = '/search';
    };

    // si la contraseña es incorrecta, mostramos el error
    setShowError(true);
  }

  return (
    <form onSubmit={checkPassword}>
      {/* Si showError es verdader mostramos el mensaje */}
      {
        showError && (<span>Usuario o contraseña incorrecta.</span>)
      }
      <input name="user" placeholder='Usuario' />
      <input name="password" placeholder='Contraseña' />

      <button type="submit">Entrar</button>
    </form>
  );
};
