import { useState } from 'react';
import './search.css';

export const Search = () => {

  const vehicles = [
    {name:'volvo', models:['s40','ex30','v60','s90']},
    {name:'saab', models:['quantum I', 'quantum IV','quantum v','93' ]},
    {name:'mercedes', models:['c63','a45','g63','cls']},
    {name: 'audi', models:['a3','a4','a5','a6','a7']},
  ];

  const [ vehicleSelected, setVehicleSelected] = useState(vehicles[0]);

  function searchVehicle(event){
    event.preventDefault();
    window.location = '/categories';
  }

  //cambiamos el vehiculo seleccionado
  function changeVehicle(event) {
    setVehicleSelected(vehicles[event.target.selectedIndex]);
  }

  return(
    <form onSubmit= {searchVehicle}>

            <label for="cars">Elige un vehículo:</label>

            <select onChange={changeVehicle} name="cars" id="cars">
              {
                vehicles.map((vehicle) => {
                  return (<option value={vehicle.name}>{vehicle.name}</option>);
                })
              }
            </select>

            <label for="models">Elige un modelo:</label>
            <select name="models" id="models">
              {
                vehicleSelected.models.map((model) => {
                  return (<option value={model}>{model}</option>);
                })
              }
            </select>
      <button type='submit'> BUSCAR </button>
    </form>
  )
}