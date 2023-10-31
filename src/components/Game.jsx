import React, { useState, useEffect } from 'react';
import Header from "./Header.jsx";
import Choice from "./Choice.jsx";

const itemsChoice = [
    { title: "Rock", url: "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png", alt: "rock" },
    { title: "Paper", url: "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png", alt: "paper" },
    { title: "Scissors", url: "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png", alt: "scissors" },
];

const reload = () => {
    window.location.reload();
}

const choiceCPU = () => {
    return itemsChoice[Math.floor(Math.random() * itemsChoice.length)];
}

const Game = () => {
    const [score, setScore] = useState();
    const [showResult, setShowResult] = useState(false);
    const [cpuChoice, setCpuCohice] = useState();
    const [playerWin, setPlayerWin] = useState("");

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore));
        } else {
            setScore(0);
        }
        return () => {
            setScore(0);
            setShowResult(false);
        };
    }, []);



    const goToResult = (choice) => {
        setShowResult(false);

        var item = choiceCPU();
        const results = {
            rock: { win: "scissors", lose: "paper" },
            paper: { win: "rock", lose: "scissors" },
            scissors: { win: "paper", lose: "rock" },
        };

        setCpuCohice(item.title);

        if (choice === item.alt) {
            setPlayerWin("Draw!");
        } else if (results[choice].win === item.alt) {
            setPlayerWin("You Win!");
            setScore(score + 1);
            localStorage.setItem('score', score + 1);
        } else {
            setPlayerWin("You Lose!");
        }
        setTimeout(() => {
            setShowResult(true);
        }, 500);
    };



    return (
        <>
            <Header count={score} />
            <div className="static h-screen">
                <div className="h-full flex items-center justify-center bg-slate-500">
                    {
                        !showResult && 
                        <div className="mb-40">
                            <div className="flex items-center justify-center m-20">
                                <span className="text-2xl">MAKE YOUR CHOICE!</span>
                            </div>
                            <div className="inline-flex ml-14 bg-slate-600/50 shadow-lg shadow-slate-600/50">
                                {
                                    itemsChoice.map(item => {
                                        return (
                                            <Choice key={item.title} className="w-10 h-10" click={() => goToResult(item.alt)}
                                                title={item.title} url={item.url} alt={item.alt} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    {
                        showResult &&
                        <div className="mb-20 mr-10">
                            <div className="text-center grid grid-cols-1 gap-4">
                                <span className="text-xl my-12 ml-8">Computer chose {cpuChoice}.</span>
                                <span className="text-xl ml-8 my-16">{playerWin}</span>
                                <button type="button" className="ml-12 py-2.5 px-5 mr-2 mb-2 text-sm font-medium 
                            text-gray-900 focus:outline-none bg-white rounded-lg 
                            border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                            focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
                            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                            dark:hover:bg-gray-700" onClick={() => reload()}>Play Again</button>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </>

    )
}



export default Game;