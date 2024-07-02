import './WasteDiary.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { NavBar } from '../../components/NavBar/NavBar.jsx';
import { DateCalendarServerRequest } from '../../components/Calendar/Calendar.jsx';
import { WasteLog } from '../../components/WasteLog/WasteLog.jsx';
import { Colorize } from '@mui/icons-material';

export const WasteDiary = () => {

    return (
        <>
            <NavBar />
            <div className='large-wrapper'>
                <DateCalendarServerRequest />=
                <AddIcon 
                sx={{ color: '#9FC490' }}
                />
                <WasteLog />
            </div>
        </>
    )
}
