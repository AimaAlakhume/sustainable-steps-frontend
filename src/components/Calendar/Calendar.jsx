import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { customColours } from '../../utils/CustomColours/CustomColours';

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
}

export const DateCalendarServerRequest = ({ onDateChange }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [highlightedDays, setHighlightedDays] = useState([]);

    const fetchEntries = async (date) => {
        setIsLoading(true);
        try {
            const year = date.year();
            const month = date.month() + 1;
            const response = await fetch(`${baseUrl}/entries?year=${year}&month=${month}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const daysWithEntries = data
                .filter(entry => {
                    return dayjs(entry.date).isSame(date, 'month');
                })
                .map(entry => dayjs(entry.date).date());

            console.log("Days with entries:", daysWithEntries);

            setHighlightedDays(daysWithEntries);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchEntries(initialValue);
    }, []);

    const handleMonthChange = (date) => {
        fetchEntries(date);
    };

    const onChangeHandler = (value) => {
        onDateChange?.(value);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                sx={{
                    backgroundColor: customColours['off-white'],
                    borderRadius: '1.5rem',
                    marginTop: '2rem',
                    boxShadow: '1px 1px 3px #82A3A1'
                }}
                onChange={onChangeHandler}
                value={initialValue}
                loading={isLoading}
                onMonthChange={handleMonthChange}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{ day: ServerDay }}
                slotProps={{
                    day: (params) => {
                        const dayOfMonth = dayjs(params.day).date();
                        return {
                            hasEntry: highlightedDays.includes(dayOfMonth), 
                            outsideCurrentMonth: params.outsideCurrentMonth, 
                        };
                    },
                }}
            />
        </LocalizationProvider>
    );
};
