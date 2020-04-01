import React from 'react';
import './Button.css';

const Button = ({ vieillir }) => {
    return (
        <div>
            <button onClick={vieillir}>
            Vieillir de 2 ans
            </button>
        </div>
    )
}

export default Button;