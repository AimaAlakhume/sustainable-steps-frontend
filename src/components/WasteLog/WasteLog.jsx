import './WasteLog.scss';
import React from 'react';
import { WasteEntries } from '../WasteEntries/WasteEntries';
import { WasteGoals } from '../WasteGoals/WasteGoals';

const baseUrl = 'http://localhost:8080';

export const WasteLog = ({ selectedDate }) => {

    return (
        <main className='main'>
            <article className='diary'>
                <WasteEntries selectedDate={selectedDate} baseUrl={baseUrl} />
                <WasteGoals baseUrl={baseUrl} />
            </article>
        </main>
    )
}