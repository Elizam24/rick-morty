import React, { useState, useRef } from 'react';
import '../styles/search.css'

function Search({ setLocationId }) {
    const [error, setError] = useState('');
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");
        const id = parseInt(inputRef.current.value);
        console.log(typeof id);

        if (isNaN(id)) {
            setError('X Invalid number');
            setTimeout(() => { setError(""); }, 3000);
            return; // Asegúrate de que el return esté aquí.
        }

        if (id < 1 || id > 126) {
            setError('X el numero debe estar entre 1 y 126');
            setTimeout(() => { setError(""); }, 3000);
            return; // Asegúrate de que el return esté aquí.
        }

        
        setLocationId(id);
        e.target.reset(); // Resetea el formulario
    };

    return (
        <>
            <form onSubmit={onSubmit} className='search'>
                <input 
                    type="text" 
                    ref={inputRef} 
                    placeholder="Enter a number" 
                    className='search_input' 
                />
                <button className='search_btn' type="submit">Search</button>
            </form>
            {error && <p className='message_error' style={{ color: 'red' }}>{error}</p>}
        </>
    );
}

export default Search