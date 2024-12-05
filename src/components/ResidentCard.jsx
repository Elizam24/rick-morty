import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/ResidentCard.css';


const ResidentCardComponent = ({ url }) => {
    const [resident, setResident] = useFetch();

    useEffect(() => {
        setResident(url);
    }, [url, setResident]);

    const getStatusIcon = (status) => {
        const statusLower = status?.toLowerCase();

        if (statusLower === 'alive') {
            return <span className="icon green-circle">🟢</span>; 
        } else if (statusLower === 'dead') {
            return <span className="icon red-circle">🔴</span>; 
        } else {
            return <span className="icon gray-circle">⚪</span>; 
        }
    };

    return (
        <div className='card'>
            <div className='card_image'>
                <img className='card_image-img' src={resident?.image} alt={resident?.name} />
                <span className='card_status'>{getStatusIcon(resident?.status)}</span>
            </div>
            <div className='card_body'>
              <h3 className='card_name'> {resident?.name}</h3>

            <div className='card_info'>
                <span className='card_info-item'></span>
                     <span className='card_info-label'>Species</span>
                <span>{resident?.species}</span>
            </div>
            <div className='card_info-item'>
                <span className='card_info-label'>Origin</span>
                <span>{resident?.origin?.name}</span>
            </div>
            <div className='card_info-item'>
                <span className='card_info-label'>Episodes where appears</span>
                <span>{resident?.episode?.length}</span>
            </div>
        </div>
        </div>
    );
}

export default ResidentCardComponent;