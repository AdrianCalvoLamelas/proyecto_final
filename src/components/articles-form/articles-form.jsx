import React from 'react';
import { useForm } from 'react-hook-form';

export const FormArticle = ({ onSubmit, articulo }) => {
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Nombre:</label>
        <input {...register('nombre')} />
      </div>
      <div>
        <label>Marca:</label>
        <input {...register('marca')} />
      </div>
      <div>
        <label>Precio:</label>
        <input {...register('precio')} />
      </div>
      <div>
        <label>Imagen:</label>
        <input {...register('imagen')} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
