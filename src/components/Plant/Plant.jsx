import React from 'react';

export const Plant = ({ type }) => {
    const plantImage = `/images/${type}.png`; // Adjust the path as needed

    return (
        <div className="plant">
            <img src={plantImage} alt={type} />
        </div>
    );
}

export default Plant;
