import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import { customColours } from '../../utils/CustomColours/CustomColours';
import { GardenInfoModal } from '../GardenInfoModal/GardenInfoModal';
import { PlantModal } from '../PlantModal/PlantModal';

export const GardenSpeedDial = () => {
    const [infoModalOpen, setInfoModalOpen] = useState(false);
    const [shedModalOpen, setShedModalOpen] = useState(false);

    const handleInfoClose = () => {
        setInfoModalOpen(false);
    }

    const handleShedClose = () => {
        setShedModalOpen(false);
    }

    return (
        <>
        <GardenInfoModal open={infoModalOpen} close={handleInfoClose} />
        <PlantModal open={shedModalOpen} close={handleShedClose} />
            <Box sx={{ height: 120, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 0, right: 0 }}
                    icon={<SpeedDialIcon />}
                    FabProps={{
                        sx: {
                            bgcolor: customColours['rich-black'],
                            '&:hover': {
                                bgcolor: customColours['rich-black'],
                            }
                        }
                    }}
                >

                    <SpeedDialAction
                        key={'Your Plants'}
                        icon={<YardRoundedIcon />}
                        tooltipTitle={'Your Plants'}
                        onClick={() => shedModalOpen ? handleShedClose : setShedModalOpen(true)}
                    />
                    <SpeedDialAction
                        key={'Info'}
                        icon={<InfoRoundedIcon />}
                        tooltipTitle={'Info'}
                        onClick={() => infoModalOpen ? handleInfoClose : setInfoModalOpen(true)}
                    />
                </SpeedDial>
            </Box>
        </>
    );
}