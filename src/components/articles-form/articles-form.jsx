import { useForm } from 'react-hook-form';
import './Articles-form.css';

export const FormArticle = ({ onSubmit, articulo }) => {
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label htmlFor="title">Titulo:</label>
        <input {...register('title')} id="title" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Marca:</label>
        <input {...register('brand')} id="brand" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="number">Número de articulo:</label>
        <input {...register('number')} id="number" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="price">Precio:</label>
        <input {...register('price')} id="price" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripcion:</label>
        <textarea {...register('description')} id="description" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="image">URL imagen:</label>
        <input {...register('image')} id="image" className="form-control" />
      </div>
      <button type="submit" className="btn-submit">Enviar</button>
    </form>
  );
};
