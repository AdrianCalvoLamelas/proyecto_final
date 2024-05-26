import { useState, useEffect } from 'react';
import { useVehicles } from '../../hooks/useVehicles';
import './search.css';

export const Search = ({ onSubmit }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [vehicleSelected, setVehicleSelected] = useState('');
  const { fetchVehicles } = useVehicles();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicles = await fetchVehicles();
        setData(vehicles);
        setIsLoading(false);
      } catch (error) {
        console.log("error")
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  function changeVehicle(event) {
    const selected = data[event.target.selectedIndex - 1]
    setVehicleSelected(selected);
    onSubmit(selected);
  }

  function changeModel(event) {
    onSubmit(vehicleSelected, vehicleSelected.models[event.target.selectedIndex - 1]);
  }

  if (isLoading) {
    return <></>
  }
  return(
    <form className="search-form">
      <div className="select-container">
        <span>Filtrar por vehiculo: </span>
        <select className="search-select" onChange={changeVehicle} name="cars" id="cars">
        <option value="">Selecciona un vehículo</option>
          {
            data.map((vehicle) => {
              return (<option value={vehicle.name}>{vehicle.name}</option>);
            })
          }
        </select>
      </div>

      <div className="select-container">
        <select className="search-select" onChange={changeModel} name="models" id="models">
        <option value="">Selecciona un modelo</option>
          {
            vehicleSelected && vehicleSelected.models.map((model) => {
              return (<option value={model}>{model}</option>);
            })
          }
        </select>
      </div>
    </form>
  )
}
