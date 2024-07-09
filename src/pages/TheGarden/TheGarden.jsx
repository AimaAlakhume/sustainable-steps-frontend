import './TheGarden.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soilImage from '../../assets/images/soil-plot.svg';
import plantImage from '../../assets/images/flowers/blue-flower.png'; // Path to your plant image
import { NavBar } from '../../components/NavBar/NavBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';

const goalsUrl = 'http://localhost:8080/goals';
const shedUrl = 'http://localhost:8080/shed';

export const TheGarden = () => {
    const [availablePlants, setAvailablePlants] = useState(0);
    const [gridState, setGridState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(goalsUrl);
                const completedGoals = res.data.filter(goal => goal.isComplete === true);
                console.log(completedGoals);
                setAvailablePlants(completedGoals.length);
                setGridState(Array(24).fill(false)); // Initialize grid state

                for (const goal of completedGoals) {
                    await axios.put(`${goalsUrl}/${goal.id}`, {
                        ...goal,
                        isComplete: 'deprecated'
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = (index) => {
        if (availablePlants > 0) {
            setAvailablePlants(availablePlants - 1);
            setGridState(prevGrid => prevGrid.map((planted, i) => (i === index ? true : planted)));
        }
    };

    return (
        <>
            <NavBar />
            <main className='container__main'>
                <div className="container__grid">
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
            </main>
            <BottomNav />
        </>
    );
};

