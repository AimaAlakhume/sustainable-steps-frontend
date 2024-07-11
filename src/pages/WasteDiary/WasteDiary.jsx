import './WasteDiary.scss';
import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar.jsx';
import { DateCalendarServerRequest } from '../../components/Calendar/Calendar.jsx';
import { WasteLog } from '../../components/WasteLog/WasteLog.jsx';
import { BottomNav } from '../../components/BottomNav/BottomNav.jsx';
import { AddWasteItem } from '../../components/AddWasteItem/AddWasteItem.jsx';
import earthDoodle from '../../assets/doodles/earth-doodle.svg';
import emphasisDoodle from '../../assets/doodles/emphasis-doodle.svg';
import scribble from '../../assets/doodles/scribble.svg';
import goGreenDoodle from '../../assets/doodles/go_green-doodle.svg';
import grassDoodle from '../../assets/doodles/grass-doodle.svg';
import flowerDoodle from '../../assets/doodles/flower-doodle.svg';
import sunDoodle from '../../assets/doodles/sun-doodle.svg';
import dayjs from 'dayjs';

export const WasteDiary = () => {

    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleDateChange = (newDate) => {
        setSelectedDate(dayjs(newDate));
    };

    console.log(selectedDate);

    return (
        <>
            <NavBar />
            <main className='large-wrapper'>
                <img src={earthDoodle} className='doodle doodle--earth' />
                <img src={emphasisDoodle} className='doodle doodle--emphasis' />
                <img src={scribble} className='doodle doodle--scribble' />
                <img src={goGreenDoodle} className='doodle doodle--arrow' />
                <img src={grassDoodle} className='doodle doodle--grass' />
                <img src={flowerDoodle} className='doodle doodle--flower' />
                <img src={sunDoodle} className='doodle doodle--sun' />
                <section className='top-section'>
                    <div className='calendar-wrapper'>
                        <DateCalendarServerRequest onDateChange={handleDateChange} />
                    </div>
                    <AddWasteItem />
                </section>
                <WasteLog selectedDate={selectedDate} />
            </main>
            <BottomNav />
        </>
    )
}
