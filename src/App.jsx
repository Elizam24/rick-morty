import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import ResidCard from './components/ResidCard';
import ResidentList from './components/ResidentList';
import Search from './components/search'; 
import './App.css';


function App() {
    const [location, setLocation] = useFetch(); 
    const [locationId, setLocationId] = useState(1); 

    useEffect(() => {
        setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
    }, [locationId]);

    return (
        <div>
            <div className='hero' />
            <div className='container'>
                <Search setLocationId={setLocationId} />
                <ResidCard location={location} />
                <ResidentList residents={location?.residents} />
            </div>
        </div>
    );
}

export default App;
