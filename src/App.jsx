import  { useState } from 'react';
import useFetch from './hooks/useFetch';
import LocationInput from './components/LocationInput';
import LocationDetails from './components/LocationDetails';
import './components/ResidentCard';
import './App.css';

const App = () => {
  const [locationId, setLocationId] = useState(null);
  const { data: location, loading, error } = useFetch(
    locationId ? `https://rickandmortyapi.com/api/location/${locationId}` : null

  );

  const fetchRandomLocation = () => {
    const randomId = Math.floor(Math.random() * 126) + 1; // Genera un ID aleatorio entre 1 y 126
    setLocationId(randomId);
  };

  return (
    <div className="app">
      <h1>Rick and Morty Locations</h1>
      <LocationInput onFetchLocation={setLocationId} />
      <button onClick={fetchRandomLocation} className="random-button">
        Mostrar Ubicación Aleatoria
      </button>
      {loading && <p>Cargando...</p>}
      {error && <p>Hey! you must provide and id from 1 to 126.</p>} 
      {location && <LocationDetails location={location} />}
    </div>
  );
};

export default App;
