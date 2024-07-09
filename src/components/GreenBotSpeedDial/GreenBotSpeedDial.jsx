import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { customColours } from '../../utils/CustomColours/CustomColours';
import { markerColours } from '../../utils/MarkerColours/MarkerColours';
import { GreenBotMarkerModal } from '../GreenBotMarkerModal/GreenBotMarkerModal';


export const GreenBotSpeedDial = () => {
    const [recyclingModalOpen, setRecyclingModalOpen] = useState(false);
    const [activismModalOpen, setActivismModalOpen] = useState(false);
    const [resourcesModalOpen, setResourcesModalOpen] = useState(false);

    const handleRecyclingClose = () => {
        setRecyclingModalOpen(false);
    }

    const handleActivismClose = () => {
        setActivismModalOpen(false);
    }

    const handlesResourcesClose = () => {
        setResourcesModalOpen(false);
    }

    return (
        <>
            <GreenBotMarkerModal
                open={recyclingModalOpen}
                close={handleRecyclingClose}
                title={'Recycling Centers & Initiatives'}
                text={'Find nearby recycling centers and initiatives that make it easy to properly dispose of your waste and reduce your environmental footprint.'}
            />
            <GreenBotMarkerModal
                open={activismModalOpen}
                close={handleActivismClose}
                title={'Environmental Activism'}
                text={'Discover local organizations, events, and opportunities to advocate for a greener future. Get involved and help drive positive change in your community.'}
            />
            <GreenBotMarkerModal
                open={resourcesModalOpen}
                close={handlesResourcesClose}
                title={'Educational Resources'}
                text={'Explore a wealth of educational resources, workshops, and materials focused on sustainable living. Learn about reducing waste, conserving energy, and adopting eco-friendly practices.'}
            />

            <Box sx={{ height: 0, transform: 'translateZ(0px)', flexGrow: 1 }}>
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
                        key={'Activism'}
                        icon={<CircleRoundedIcon sx={{ color: markerColours['activism-yellow'] }} />}
                        tooltipTitle={'Activism'}
                        onClick={() => activismModalOpen ? handleActivismClose : setActivismModalOpen(true)}
                    />
                    <SpeedDialAction
                        key={'Resources'}
                        icon={<CircleRoundedIcon sx={{ color: markerColours['resource-blue'] }} />}
                        tooltipTitle={'Resources'}
                        onClick={() => resourcesModalOpen ? handleResourcesClose : setResourcesModalOpen(true)}
                    />
                    <SpeedDialAction
                        key={'Recycling'}
                        icon={<CircleRoundedIcon sx={{ color: markerColours['recycling-green'] }} />}
                        tooltipTitle={'Recycling'}
                        onClick={() => recyclingModalOpen ? handleRecyclingClose : setRecyclingModalOpen(true)}
                    />
                </SpeedDial>
            </Box>
        </>
    );
}