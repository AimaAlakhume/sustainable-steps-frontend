import './WasteLog.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnstyledInputBasic } from '../InputBox/InputBox';
import Checkbox from '@mui/material/Checkbox';
import { customColours } from '../../utils/CustomColours/CustomColours';
import dayjs from 'dayjs';

const baseUrl = 'http://localhost:8080';

export const WasteLog = ({ selectedDate }) => {
    const navigate = useNavigate();
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState(null);

    const getAllEntries = async () => {
        try {
            const res = await axios.get(
                `${baseUrl}/entries`, 
                { params: { date: selectedDate.format('YYYY-MM-DD') } }
            );
            setEntries(res.data);
        } catch (error) {
            console.error('Error fetching diary entries:', error);
            setError('Could not load diary entries.');
        }
    };

    useEffect(() => {
        getAllEntries();
    }, [selectedDate]);

    const handleTick = () => {
        setTimeout(() => {
            navigate('/garden');
        }, 1000);
    }

    return (
        <main className='main'>
            <article className='diary'>
                <section className='diary__entries'>
                    <h2 className='diary__entries__title'>
                    {selectedDate.isSame(dayjs(), 'day')
                            ? 'Today' 
                            : selectedDate.format('MMM D, YYYY')
                        }
                    </h2>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        entries.map(entry => (
                            <section key={entry.id} className='diary__entry'>
                                <section className='diary__entry__details'>
                                    <h4>{entry.item}</h4>
                                    <p className='diary__label'>{entry.action_taken}</p>
                                </section>
                                <section className='diary__entry__quantity'>
                                    <p>{entry.quantity}</p>
                                </section>
                            </section>
                        ))
                    )}
                </section>
                <section className='diary__goals'>
                    <h2 className='diary__goals__title'>My Goals</h2>
                    <section className='diary__goals__input'>
                        <UnstyledInputBasic />
                        <Checkbox
                            onChange={handleTick}
                            sx={{
                                color: customColours['soft-grey'],
                                '&.Mui-checked': {
                                    color: customColours['green-2'],
                                }
                            }}
                        />
                    </section>
                </section>
            </article>
        </main>
    )
}