import { useState } from 'react'
import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Play = () => {
    const [count, setCount] = useState(0);
    const [selectionPlayerOne, setSelectionPlayerOne] = useState('');


    return (

        <>
            <select value={selectionPlayerOne} onChange={e => setSelectionPlayerOne(e.target.value)}>
                <option value="Rock">Rock</option>
                <option value="Paper">Paper</option>
                <option value="Scissors">Scissors</option>
            </select>
            <p>Your favorite fruit: {selectionPlayerOne}</p>
            <button>
                <Link to={`/game/${selectionPlayerOne}`}>play</Link>
            </button>
        </>
    )
}

export default Play;