import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavBar } from '../../components/NavBar/NavBar';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { ResourceMap } from '../../components/ResourceMap/ResourceMap';
import { GreenBotSpeedDial } from '../../components/GreenBotSpeedDial/GreenBotSpeedDial';

export const GreenBot = () => {

    return (
        <main>
            <NavBar />
            <ResourceMap />
            <BottomNav />
            <GreenBotSpeedDial />
        </main>
    );
};
