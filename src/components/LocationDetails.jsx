import './LocationDetails.css';
import PropTypes from 'prop-types';
import ResidentCard from './ResidentCard.jsx';

const LocationDetails = ({ location }) => {
  if (!location) {
    return <p>No se encontró información de la ubicación.</p>;
  }

  return (
    <div>
      <h2>{location.name}</h2>
      <p>Tipo: {location.type}</p>
      <p>Dimensión: {location.dimension}</p>
      <p>Residentes: {location.residents.length}</p>
      <h3>Residentes:</h3>
      <div>
        {location.residents.map((residentUrl) => (
          <ResidentCard key={residentUrl} url={residentUrl} />
        ))}
      </div>
    </div>
  );
};

 LocationDetails.propTypes = {
   location: PropTypes.shape({
     name: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     dimension: PropTypes.string.isRequired,
     residents: PropTypes.arrayOf(PropTypes.string).isRequired,
   }).isRequired,
 };

export default LocationDetails;