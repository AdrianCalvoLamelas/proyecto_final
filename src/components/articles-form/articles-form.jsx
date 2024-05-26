import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useVehicles } from '../../hooks/useVehicles';
import './Articles-form.css';

export const FormArticle = ({ onSubmit, onCancel, articleToEdit }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      brand: '',
      number: '',
      price: '',
      description: '',
      image: '',
      vehicleName: '',
      vehicleModel: ''
    }
  });
  const [data, setData] = useState([]);
  const [vehicleSelected, setVehicleSelected] = useState('');
  const { fetchVehicles } = useVehicles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicles = await fetchVehicles();
        setData(vehicles);
      } catch (error) {
        console.log("error")
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (articleToEdit) {
      setValue('title', articleToEdit.title || '');
      setValue('brand', articleToEdit.brand || '');
      setValue('number', articleToEdit.number || '');
      setValue('price', articleToEdit.price || '');
      setValue('description', articleToEdit.description || '');
      setValue('image', articleToEdit.image || '');
      setValue('vehicleName', articleToEdit.vehicleName || '');
      setValue('vehicleModel', articleToEdit.vehicleModel || '');
    }
  }, [articleToEdit, setValue]);

  const submitForm = (data) => {
    // Formatear el precio a "0.00"
    data.price = parseFloat(data.price).toFixed(2);
    
    if (articleToEdit) {
      articleToEdit = {...articleToEdit, ...data};
      return onSubmit(articleToEdit);
    }
    onSubmit(data);
  };

  function changeVehicle(event) {
    const selected = data[event.target.selectedIndex - 1];
    setVehicleSelected(selected);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label htmlFor="title">Titulo:</label>
        <input {...register('title', { required: true })} id="title" className="form-control" />
        {errors.title && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlFor="brand">Marca:</label>
        <input {...register('brand', { required: true })} id="brand" className="form-control" />
        {errors.brand && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlFor="number">Número de articulo:</label>
        <input {...register('number', { required: true })} id="number" className="form-control" />
        {errors.number && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlFor="price">Precio:</label>
        <input 
          {...register('price', { 
            required: true,
          })} 
          type="number" 
          step="0.01" 
          id="price" 
          className="form-control" 
        />
        {errors.price && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripcion:</label>
        <textarea {...register('description', { required: true })} id="description" className="form-control" />
        {errors.description && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlFor="image">URL imagen:</label>
        <input {...register('image', { required: true })} id="image" className="form-control" />
        {errors.image && <span className="error-message">Este campo es requerido</span>}
      </div>
      <div className="form-group">
        <label htmlForm="vehicleName">Compatible con vehiculo:</label>
        <select {...register('vehicleName', { required: true })} className="search-select" onChange={changeVehicle} id="vehicleName">
          <option value="">Selecciona un vehículo</option>
          {
            data.map((vehicle) => {
              return (<option key={vehicle.name} value={vehicle.name}>{vehicle.name}</option>);
            })
          }
        </select>
      </div>
      <div className="form-group">
        <label htmlForm="vehicleModel">Modelo:</label>
        <select {...register('vehicleModel', { required: true })} className="search-select" id="models">
          <option value="">Selecciona un modelo</option>
          {
            vehicleSelected && vehicleSelected.models.map((model) => {
              return (<option key={model} value={model}>{model}</option>);
            })
          }
        </select>
      </div>
      <div className="button-container">
        <button type="submit" className="btn-submit">Enviar</button>
        <button type="button" className="btn-cancel" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};
