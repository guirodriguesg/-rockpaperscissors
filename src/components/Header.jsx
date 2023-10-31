import React from "react";


const Headers = (props) => {
    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 right-0">
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                            <a href="/">
                                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">RockPaperScissors</span>
                            </a>
                            <div className="flex items-center">
                                <span className="mr-6 text-sm text-gray-500 dark:text-white">Your Score {props.count} pt</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Headers;