import './GardenInfoModal.scss';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export const GardenInfoModal = ({ open, close }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='garden-info__title'> Welcome to the Garden! </h2>
                    <div className='garden-info__text'>
                        Earn new and exciting plants by achieving your goals, and watch your garden flourish as you add them to your collection.
                        <br></br><br></br>
                        <span className='garden-info__text--emphasised'>Keep an eye out for a community garden coming soon!</span>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
