import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

export const GoalTracking = () => {
    const [goals, setGoals] = useState([
        { text: "Drink water", completed: false },
        { text: "Exercise", completed: false },
        { text: "Meditate", completed: false }
    ]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleGoalComplete = (index) => {
        const newGoals = [...goals];
        newGoals[index].completed = true;
        setGoals(newGoals);

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            navigate('/game');
        }, 3000);
    };

    return (
        <div>
            {goals.map((goal, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={goal.completed}
                        onChange={() => handleGoalComplete(index)}
                    />
                    <label>{goal.text}</label>
                </div>
            ))}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                You received a new plant!
            </Modal>
        </div>
    );
}
