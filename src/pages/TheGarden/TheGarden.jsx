import './TheGarden.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soilImage from '../../assets/images/soil-plot.svg';
import { NavBar } from '../../components/NavBar/NavBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { GardenSpeedDial } from '../../components/GardenSpeedDial/GardenSpeedDial';


const goalsUrl = 'http://localhost:8080/goals';
const shedUrl = 'http://localhost:8080/shed';

const randomType = (types) => {
    return types[Math.floor(Math.random() * types.length)];
};

export const TheGarden = () => {
    const [availablePlants, setAvailablePlants] = useState(0);
    const [gridState, setGridState] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resGoals = await axios.get(goalsUrl);
                const completedGoals = resGoals.data.filter(goal => goal.isComplete === true);
                setAvailablePlants(completedGoals.length);

                const resGrid = await axios.get(shedUrl);
                const gridData = Array(30).fill(null).map((_, index) => {
                    const plot = resGrid.data[index];
                    return plot ? { planted: true, image: plot.image } : { planted: false, image: null };
                });

                setGridState(gridData);

                for (const goal of completedGoals) {
                    await axios.put(`${goalsUrl}/${goal.id}`, {
                        ...goal,
                        isComplete: 'deprecated'
                    });
                }

                const resTypes = await axios.get(`${shedUrl}/types`);
                setTypes(resTypes.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = async (index) => {
        if (availablePlants > 0 && !gridState[index].planted) {
            try {
                const type = randomType(types);
                const newPlant = { type };

                const resPost = await axios.post(shedUrl, newPlant);
                setAvailablePlants(prev => prev - 1);

                const newGridState = [...gridState];
                newGridState[index] = {
                    ...newGridState[index],
                    planted: true,
                    image: resPost.data.image
                };
                setGridState(newGridState);

            } catch (error) {
                console.error('Error adding plant:', error);
            }
        }
    };

    return (
        <>
            <NavBar />
            <main className='container__main'>
                <div className="container__grid">
                    {gridState.map((plot, index) => (
                        <div className="container__obj" key={index}>
                            <img
                                key={index}
                                src={plot.planted ? plot.image : soilImage}
                                alt={plot.planted ? 'Planted plot' : 'Empty soil plot'}
                                onClick={() => handleClick(index)}
                                className={`soil-plot ${plot.planted ? 'planted' : ''}`}
                            />
                        </div>
                    ))}
                </div>
                <GardenSpeedDial />
            </main>
            <BottomNav />
        </>
    );
};

