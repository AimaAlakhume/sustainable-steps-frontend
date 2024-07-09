import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { customColours } from '../../utils/CustomColours/CustomColours';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const initialValue = dayjs(new Date());

const ServerDay = (props) => {
    const { hasEntry, day, outsideCurrentMonth, ...other } = props;
    return (
        <Badge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={hasEntry ? "🌱" : undefined}
        >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </Badge>
    );
};

export const DateCalendarServerRequest = ({ onDateChange }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [highlightedDays, setHighlightedDays] = useState({});
    const [currentDate, setCurrentDate] = useState(initialValue);

    const getEntries = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${baseUrl}/entries`);
            const entryData = res.data;
            const daysWithEntries = {};
            entryData.forEach(entry => {
                const entryDate = dayjs(entry.date).format('YYYY-MM-DD');
                daysWithEntries[entryDate] = true;
            });
            setHighlightedDays(daysWithEntries);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getEntries();
    }, []);

    const handleMonthChange = (date) => {
        setCurrentDate(date);
    };

    const onChangeHandler = (value) => {
        onDateChange?.(value);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {isLoading ? (
                <DayCalendarSkeleton />
            ) : (
                <DateCalendar
                    sx={{
                        backgroundColor: customColours['off-white'],
                        borderRadius: '1.5rem',
                        marginTop: '2rem',
                        boxShadow: '1px 1px 3px #82A3A1'
                    }}
                    onChange={onChangeHandler}
                    value={currentDate}
                    onMonthChange={handleMonthChange}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{ day: ServerDay }}
                    slotProps={{
                        day: (params) => ({
                            hasEntry: !!highlightedDays[dayjs(params.day).format('YYYY-MM-DD')],
                            outsideCurrentMonth: params.outsideCurrentMonth,
                        }),
                    }}
                />
            )}
        </LocalizationProvider>
    );
};
