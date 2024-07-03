import './WasteDiary.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { NavBar } from '../../components/NavBar/NavBar.jsx';
import { DateCalendarServerRequest } from '../../components/Calendar/Calendar.jsx';
import { WasteLog } from '../../components/WasteLog/WasteLog.jsx';

const customColors = {
    'oxford-blue': '#011936',
    'rich-black': '#020D1A',
    'charcoal': '#465362',
    'camridge-blue': '#82A3A1',
    'olivine': '#9FC490',
    'green-tea': '#C0DFA1',
    'vanilla': '#DEDCA0',
    'off-white': '#f7f4f0'
}

export const WasteDiary = () => {

    return (
        <>
            <NavBar />
            <div className='large-wrapper'>
                <DateCalendarServerRequest />
                <WasteLog />
            </div>
        </>
    )
}
