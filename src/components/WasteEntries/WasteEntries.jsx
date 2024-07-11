import './WasteEntries.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

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
                    ) : (
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
                    )}
                </section>
    )
}