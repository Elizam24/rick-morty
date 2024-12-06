import '../styles/ResidCard.css';


function ResidCard({ location }) {
  return (
    <div class="cover">
    {/* <img src='7' alt="Cover" /> */}
          /<div className="content"> {/* Cambiado a div y className */}?//        

        <div className='ResidCard'>
          <h2>{location?.name || 'Unknown Location'}</h2> 
          <div className="ResiCard_container">
            <div className='ResidCard_item'>
              <h3 className='ResidCard_item-title'>Type</h3>
              <p className='ResidCard_item-data'>{location?.type || 'Unknown Type'}</p>
            </div>
            <div className='ResidCard_item'>
              <h3 className='ResidCard_item-title'>Dimension</h3>
              <p className='ResidCard_item-data'>{location?.dimension || 'Unknown Dimension'}</p>
            </div>
            <div className='ResidCard_item'>
              <h3 className='ResidCard_item-title'>Population</h3>
              <p className='ResidCard_item-data'>{location?.residents?.length || 0}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidCard;