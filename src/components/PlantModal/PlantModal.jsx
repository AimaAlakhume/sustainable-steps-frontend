import './PlantModal.scss';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import plantNotifierIcon from '../../assets/images/plant-notifier.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '3rem'
};

const titleStyle = {
    textAlign: 'center',
    fontFamily: 'Playpen Sans',
    fontWeight: 600
}

export const PlantModal = ({ open, close }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='title'> your plant shed </h2>
                    <div className='container'>
                        <img src={plantNotifierIcon} className='notifier__icon' />
                        <p className='notifier'>
                            You have <span className='highlighted'>4</span> plants ready to be placed in your garden!
                        </p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
