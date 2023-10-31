import React from "react";
import { useNavigate } from 'react-router-dom';

const Play = () => {
    const navigate = useNavigate();
    const goToGame = () => {
        localStorage.setItem('score', 0);
        navigate("/game");
    };

    return (
        <>
            <div className="static h-screen bg-slate-400">
                <div className="h-full mx-20 bg-slate-900">

                    <div className="h-full flex items-center justify-center bg-slate-900">
                        <div className="grid grid-cols-1 gap-4">

                            <h1 className="col-start-1 col-span-3 text-white text-center">The Game</h1>

                            <h1 className="mb-8 col-start-1 col-span-3 text-white text-center">Rock Paper Scissors</h1>

                            <button type="button" onClick={() => goToGame()}
                                className="ml-12 py-2.5 px-5 mr-2 mb-2 text-sm font-medium 
                            text-gray-900 focus:outline-none bg-white rounded-lg 
                            border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                            focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
                            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                            dark:hover:bg-gray-700">
                                START GAME
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Play;