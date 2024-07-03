import './WasteLog.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { UnstyledInputBasic } from '../InputBox/InputBox';
import Checkbox from '@mui/material/Checkbox';
import PlantModal from '../PlantModal/PlantModal';

const baseUrl = 'http://localhost:8080/entries';

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

// let navigate = useNavigate();

const handleChange = () => {
    return (
        <PlantModal />
    )
    // navigate('/garden');
}

export const WasteLog = () => {
    return (
        <main className='main'>
            <article className='diary'>
                <section className='diary__entries'>
                    <div className='header'>
                        <h2 className='diary__entries__title'>Today's Waste</h2>
                        <button className='cta'>
                            <AddIcon 
                            sx={{ color: customColors['oxford-blue'] }}
                            />
                            <h3 className='cta__text'>log waste</h3>
                        </button>
                    </div>
                    <section className='diary__entry'>
                        <section className='diary__entry__details'>
                            <h4>Plastic water bottle</h4>
                            <p className='diary__label'>reused</p>
                        </section>
                        <section className='diary__entry__quantity'>
                            <p> 4 </p>
                        </section>
                    </section>
                    <section className='diary__entry'>
                        <section className='diary__entry__details'>
                            <h4>Plastic water bottle</h4>
                            <p className='diary__label'>reused</p>
                        </section>
                        <section className='diary__entry__quantity'>
                            <p> 4 </p>
                        </section>
                    </section>
                    <section className='diary__entry'>
                        <section className='diary__entry__details'>
                            <h4>Plastic water bottle</h4>
                            <p className='diary__label'>reused</p>
                        </section>
                        <section className='diary__entry__quantity'>
                            <p> 4 </p>
                        </section>
                    </section>
                    <section className='diary__entry'>
                        <section className='diary__entry__details'>
                            <h4>Plastic water bottle</h4>
                            <p className='diary__label'>reused</p>
                        </section>
                        <section className='diary__entry__quantity'>
                            <p> 4 </p>
                        </section>
                    </section>
                </section>
                <section className='diary__goals'>
                    <h2 className='diary__goals__title'>My Goals</h2>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                        onChange={handleChange}
                        sx={{
                            color: '#DAE2ED',
                            '&.Mui-checked': {
                                color: '#9FC490',
                            }
                        }}
                        />
                    </section>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                        onChange={handleChange}
                        sx={{
                            color: '#DAE2ED',
                            '&.Mui-checked': {
                                color: '#9FC490',
                            }
                        }}
                        />
                    </section>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                        onChange={handleChange}
                        sx={{
                            color: '#DAE2ED',
                            '&.Mui-checked': {
                                color: '#9FC490',
                            }
                        }}
                        />
                    </section>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                        onChange={handleChange}
                        sx={{
                            color: '#DAE2ED',
                            '&.Mui-checked': {
                                color: '#9FC490',
                            }
                        }}
                        />
                    </section>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                        onChange={handleChange}
                        sx={{
                            color: '#DAE2ED',
                            '&.Mui-checked': {
                                color: '#9FC490',
                            }
                        }}
                        />
                    </section>
                </section>
            </article>
        </main>
    )
}