import React from 'react';
import './GardenGrid.scss';
import Plant from '../Plant/Plant';

export const GardenGrid = ({ plants }) => {
    return (
        <div className="garden-grid">
            {plants.map((plant, index) => (
                <Plant key={index} type={plant.type} />
            ))}
        </div>
    );
}
