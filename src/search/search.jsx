import { useState } from 'react';

const search = {
  byPlate: 'SEARCH_BY_PLATE',
  byVehicle: 'SEARCH_BY_VEHICLE'
}

export const Search = () => {

  const vehicles = [
    {name:'volvo', models:['s40','ex30','v60','s90']},
    {name:'saab', models:['quantum I', 'quantum IV','quantum v','93' ]},
    {name:'mercedes', models:['c63','a45','g63','cls']},
    {name: 'audi', models:['a3','a4','a5','a6','a7']},
  ];

  const [ vehicleSelected, setVehicleSelected] = useState(vehicles[0]);
  const [ searchType, setSearchType ] = useState(search.byPlate);

  function searchVehicle(event){
    event.preventDefault();
    window.location = '/home';
  }

  //cambiamos el tipo de busqueda (por matricula o por modelo)
  function changeSearch(changeTo) {
    setSearchType(changeTo);
  }

  //cambiamos el vehiculo seleccionado
  function changeVehicle(event) {
    setVehicleSelected(vehicles[event.target.selectedIndex]);
  }

  return(
    <form onSubmit= {searchVehicle}>
      {
        searchType === search.byPlate ?
        (
          <>
            {/* si searchType es por matricula (searchType === 'SEARCH_BY_PLATE'), mostramos form de matricula*/}
            <input name="Matricula" placeholder="Matricula"/>
            <button onClick={() => changeSearch(search.byVehicle) }> Buscar por modelo</button>
          </>
        ) : (
          <>
            {/* si searchType no es por matricula (searchType === 'SEARCH_BY_VEHICLE'), mostramos form de marca y modelo*/}
            <label for="cars">Elige un vehículo:</label>

            {/* pintamos el selector de vehiculos*/}
            {/* recorremos el array Vehicles pintado cada vehiculo en el selector como una opción*/}
            <select onChange={changeVehicle} name="cars" id="cars">
              {
                vehicles.map((vehicle) => {
                  return (<option value={vehicle.name}>{vehicle.name}</option>);
                })
              }
            </select>

            <label for="models">Elige un modelo:</label>

            {/*Al seleccionar un vehiculo, se ejecuta el onChange que llama al metodo changeVehicle*/}
            {/* en changeVehicle se modifica el vehiculo seleccionado (vehicleSelected) */}
            {/* recorremos el modelo del vehicleSelected */}
            {/* pintamos los modelos como opciones dentro del selector*/}
            <select name="models" id="models">
              {
                vehicleSelected.models.map((model) => {
                  return (<option value={model}>{model}</option>);
                })
              }
            </select>

            <button onClick={() => changeSearch(search.byPlate) }> Buscar por matricula</button>
          </>
        )
      }

      <button type='submit'> BUSCAR </button>
    </form>
  )
}