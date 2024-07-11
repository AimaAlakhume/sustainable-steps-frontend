import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export const GreenBotMarkerModal = ({ open, close, title, text }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <h2 className='garden-info__title'>{title}</h2>
                    <div className='garden-info__text'>{text}</div>
                </Box>
            </Modal>
        </div>
    );
}

