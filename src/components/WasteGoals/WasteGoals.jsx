import './WasteGoals.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnstyledInputBasic } from '../InputBox/InputBox';
import Checkbox from '@mui/material/Checkbox';
import { customColours } from '../../utils/CustomColours/CustomColours';

export const WasteGoals = ({ baseUrl }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [existingGoals, setExistingGoals] = useState([]);
    const [newGoal, setNewGoal] = useState('');
    const [editingGoalId, setEditingGoalId] = useState(null); // Track goal being edited

    const getAllGoals = async () => {
        try {
            const res = await axios.get(`${baseUrl}/goals`);
            const incompleteGoals = res.data.filter(goal => !goal.isComplete);
            setExistingGoals(incompleteGoals);
        } catch (error) {
            console.error('Error fetching existing goals:', error);
            setError('Could not load existing goals.');
        }
    };

    useEffect(() => {
        getAllGoals();
    }, []);

    const handleTick = () => {
        setTimeout(() => {
            navigate('/garden');
        }, 750);
    }

    const handleInputChange = (index, value) => {
        if (index === existingGoals.length) {
            setNewGoal(value); // New goal input
        } else {
            setExistingGoals(prevGoals =>
                prevGoals.map((goal, i) => (i === index ? { ...goal, goal: value } : goal))
            );
            setEditingGoalId(index); // Mark goal as being edited
        }
    };


    const handleBlur = async (index, goalText) => {
        if (goalText.trim() === '') return; // Don't save empty goals

        try {
            if (index === existingGoals.length) { // New goal
                await axios.post(`${baseUrl}/goals`, { goal: goalText, isComplete: false });
                setNewGoal('');
                getAllGoals(); // Refresh the goal list
            } else if (editingGoalId !== null) { // Existing goal update
                await axios.put(`${baseUrl}/goals/${existingGoals[index].id}`, {
                    ...existingGoals[index],
                    goal: goalText
                });
                setEditingGoalId(null); // Clear editing state
            }
        } catch (err) {
            console.error(err);
            setError('Failed to save goal.');
        }
    };

    const handleCheckboxChange = async (index) => {
        try {
            await axios.put(`${baseUrl}/goals/${existingGoals[index].id}`, {
                ...existingGoals[index],
                isComplete: true
            });
            getAllGoals();
        } catch (err) {
            console.error(err);
            setError('Failed to update goal.');
        }
    };

    return (
        <section className='diary__goals'>
            <h2 className='diary__goals__title'>My Goals</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    {existingGoals.map((goal, index) => (
                        <section className='diary__goals__input' key={index}>
                            <UnstyledInputBasic
                                value={editingGoalId === index ? goal.goal : goal.goal || ''}
                                onBlur={(e) => handleBlur(index, e.target.value)}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                            <Checkbox
                                checked={goal.isComplete}
                                onChange={() => handleCheckboxChange(index)}
                                sx={{
                                    color: customColours['soft-grey'],
                                    '&.Mui-checked': {
                                        color: customColours['green-2'],
                                    }
                                }}
                            />
                        </section>
                    ))}

                    {Array.from({ length: Math.max(1, 5 - existingGoals.length) }, (_, index) => (
                        <section className='diary__goals__input' key={index + existingGoals.length}>
                            <UnstyledInputBasic
                                value={index === 0 ? newGoal : ''}
                                onBlur={(e) => handleBlur(index + existingGoals.length, e.target.value)}
                                onChange={(e) => handleInputChange(index + existingGoals.length, e.target.value)}
                            />
                            <Checkbox
                                sx={{
                                    color: customColours['soft-grey'],
                                    '&.Mui-checked': {
                                        color: customColours['green-2'],
                                    }
                                }}
                            />
                        </section>
                    ))}
                </>
            )}
        </section>
    );
}
