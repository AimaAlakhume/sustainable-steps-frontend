import './NavBar.scss';
import * as React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const NavBar = () => {
    return (
        <header className='nav'>
            <HomeRoundedIcon /> 
            <CreateRoundedIcon />
            <GrassRoundedIcon />
            <AccountCircleRoundedIcon />
        </header>
    )
}