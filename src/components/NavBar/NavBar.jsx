import './NavBar.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

export const NavBar = () => {
    return (
        <header className='nav'>
            <NavLink to={'/'}><HomeRoundedIcon /></NavLink>
            <NavLink to={'/diary'}><CreateRoundedIcon /></NavLink>
            <NavLink to={'/garden'}><GrassRoundedIcon /></NavLink>
            <NavLink to={'/guide'}><ArticleRoundedIcon /></NavLink>
            <NavLink to={'/greenbot'}><LanguageRoundedIcon /></NavLink>
            <NavLink to={'/'}><AccountCircleRoundedIcon /></NavLink>
        </header>
    )
}