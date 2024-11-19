import './LocationInput.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
const LocationInput = ({ onFetchLocation }) => {
  const [locationId, setLocationId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(locationId);
    if (id >= 1 && id <= 126) {
      onFetchLocation(id);
      setLocationId('');
    } else {
      alert('Por favor, ingresa un ID válido entre 1 y 126.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        placeholder="Ingresa el ID de la locación"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

// Validación de PropTypes
LocationInput.propTypes = {
onFetchLocation: PropTypes.func.isRequired, // onFetchLocation debe ser una función y es requerido
};

export default LocationInput;
