import './NavBar.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const NavBar = () => {
    return (
        <header className='nav'>
            <Link to={'/'}><HomeRoundedIcon /></Link>
            <Link to={'/diary'}><CreateRoundedIcon /></Link>
            <Link to={'/garden'}><GrassRoundedIcon /></Link>
            <Link to={'/'}><AccountCircleRoundedIcon /></Link>
        </header>
    )
}