import './NavBar.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const NavBar = () => {
    return (
        <header className='nav'>
            <NavLink to={'/'}><AccountCircleRoundedIcon /></NavLink>
        </header>
    )
}