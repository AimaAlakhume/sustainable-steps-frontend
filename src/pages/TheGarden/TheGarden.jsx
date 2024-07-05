import React, { useState } from 'react';
import {GardenGrid} from '../../components/GardenGrid/GardenGrid';
import {Plant} from '../../components/Plant/Plant';
import { NavBar } from '../../components/NavBar/NavBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';

export const TheGarden = () => {
    const [plants, setPlants] = useState([]);

    const handlePlantSelected = (newPlantType) => {
        setPlants([...plants, { type: newPlantType }]);
    };

    return (
        <main>
            <NavBar />
            <div>
                {/* WasteDiaryConnection (now integrated) */}
                <div>
                    <label>
                        <input
                            type="radio"
                            name="plant"
                            value="tomato"
                            onChange={handlePlantSelected}
                        /> Tomato
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="plant"
                            value="carrot"
                            onChange={handlePlantSelected}
                        /> Carrot
                    </label>
                    {/* Add more radio buttons for other plants */}
                </div>
                <GardenGrid plants={plants} />
            </div>
            <BottomNav />
        </main>
    );
}
