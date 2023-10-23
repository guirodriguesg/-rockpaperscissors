import { useState } from 'react'
import React from "react";
import { useParams } from 'react-router-dom';

const Game = () => {
    const [count, setCount] = useState(0);
    const {option} = useParams();

    return (
        <div>{option}</div>
    )
}

export default Game;