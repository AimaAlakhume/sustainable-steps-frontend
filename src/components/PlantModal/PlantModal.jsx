import './PlantModal.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import plantNotifierIcon from '../../assets/images/plant-notifier.png';

const baseUrl = 'http://localhost:8080';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '3rem'
};

export const PlantModal = ({ open, close }) => {

    const [plantAmount, setPlantAmount] = useState(0);

    const getPlantAmount = async () => {
        try {
            const res = await axios.get(`${baseUrl}/goals`);
            const completedGoals = res.data.filter(goal => goal.isComplete === true);
            setPlantAmount(completedGoals.length);
        } catch (error) {
            console.error('Error getting info from plant shed:', error);
            setError('Could not load plant shed.');
        }
    }

    useEffect(() => {
        getPlantAmount();
    }, []);

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <h2 className='title'> your plant shed </h2>
                    <div className='container'>
                        <img src={plantNotifierIcon} className='notifier__icon' />
                        <p className='notifier'>
                            You have <span className='highlighted'>{plantAmount}</span> plant(s) ready to be placed in your garden!
                        </p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
