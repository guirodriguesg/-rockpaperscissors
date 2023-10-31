import React from 'react';

const Choice = (props) => {
    return (
        <>
            <div key={props.title} className="m-6">
                <button onClick={props.click} disabled={props.disabled}>
                    <img src={props.url} alt={props.alt} className={props.className} />
                    <span>{props.title}</span>
                </button>
            </div>
        </>
    )
}

export default Choice;