import './PlantModal.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #3c4043',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
};

const PlantModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} className="learn-more-btn">Learn more</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        AI Overview
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        AI Overviews in Google Search provide quick summaries of information from various sources, aimed at making it easier to understand topics quickly. It's important to note that this feature uses experimental AI technology, which Google continues to refine based on user feedback.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default PlantModal;