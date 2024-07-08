import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soilImage from '../../assets/images/soil-plot.svg';
import plantImage from '../../assets/images/flowers/blue-flower.png'; // Path to your plant image
import './TheGarden.scss';

export const TheGarden = () => {
    const [availablePlants, setAvailablePlants] = useState(0);
    const [gridState, setGridState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/goals');
                const completedGoals = response.data.filter(goal => goal.isComplete);
                setAvailablePlants(completedGoals.length);
                setGridState(Array(24).fill(false)); // Initialize grid state

                // Clear data (replace with actual delete logic)
                for (const goal of completedGoals) {
                    await axios.delete(`http://localhost:8080/goals/${goal.id}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once on mount

    const handleClick = (index) => {
        if (availablePlants > 0) {
            setAvailablePlants(availablePlants - 1);
            setGridState(prevGrid => prevGrid.map((planted, i) => (i === index ? true : planted)));
        }
    };

    return (
        <div className="grid-container">
            {gridState.map((planted, index) => (
                <img
                    key={index}
                    src={planted ? plantImage : soilImage}
                    alt={planted ? 'Planted plot' : 'Empty soil plot'}
                    onClick={() => handleClick(index)}
                    className={`soil-plot ${planted ? 'planted' : ''}`}
                />
            ))}
        </div>
    );
};

