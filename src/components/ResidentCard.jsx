import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import './ResidentCard.css'; // Importar el archivo CSS correctamente

const ResidentCard = ({ residentUrl }) => {
  const { data: resident, loading, error } = useFetch(residentUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error al cargar el residente.</p>;

  return (
    <div>
      <h4>{resident.name}</h4>
      <img src={resident.image} alt={resident.name} />
      <p>Status: {resident.status}</p>
      <p>Origen: {resident.origin.name}</p>
      <p>Episodios: {resident.episode.length}</p>
    </div>
  );
};

// Validación de PropTypes
ResidentCard.propTypes = {
  residentUrl: PropTypes.string.isRequired, // residentUrl debe ser una cadena y es requerido
};

export default ResidentCard; // Exportar el componente correcto