import './WasteEntries.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import trashcanIcon from '../../assets/images/empty-trashcan.svg';

export const WasteEntries = ({ selectedDate, baseUrl }) => {
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
            console.error('Error fetching diary entries:', entryRetrievalError);
            setError('Could not load diary entries.');
        }
    };

    useEffect(() => {
        getAllEntries();
    }, [selectedDate]);

    return (
        <section className='diary__entries'>
            <h2 className='diary__entries__title'>
                {selectedDate.isSame(dayjs(), 'day')
                    ? 'Today'
                    : selectedDate.format('MMM D, YYYY')
                }
            </h2>
            {error ? (
                <p>{error}</p>
            ) : entries.length > 0 ? (
                entries.map(entry => (
                    <section key={entry.id} className='diary__entry'>
                        <section className='diary__entry__details'>
                            <h4 className='diary__entry__item-name'>{entry.item}</h4>
                            <p className='diary__label'>{entry.action_taken}</p>
                        </section>
                        <section className='diary__entry__quantity'>
                            <p>{entry.quantity}</p>
                        </section>
                    </section>
                ))
            ) : (
                <div className='diary__no-entries'>
                    <img src={trashcanIcon} className='diary__no-entries__icon' />
                    <p className='diary__no-entries__text'>No waste logged today</p>
                </div>
            )}
        </section>
    )
}