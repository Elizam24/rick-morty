
 import '../styles/ResidentList.css'
import ResidentCardComponent from './ResidentCard';

function ResidentList({ residents }) {
  return (
    <div className='cards'>
      {residents?.map(resident => {
        const residentSplit = resident.split('/');
        const id = residentSplit[residentSplit.length - 1];

        return (
          <ResidentCardComponent key={id} url={resident} />
        );
      })}
    </div>
  );
}

export default ResidentList;