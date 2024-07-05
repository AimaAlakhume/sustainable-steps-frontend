import './AddWasteItem.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { customColours } from '../../utils/CustomColours/CustomColours';

export const AddWasteItem = () => {
    return (
        <section className='main-wrap'>
            <FormControl defaultValue="" required>
                <Label sx={{ 
                    fontWeight: '600',
                    fontSize: '.75rem',
                    textTransform: 'uppercase'
                }}>item</Label>
                <StyledInput />
                <HelperText />
                <Label sx={{
                    fontWeight: '600',
                    fontSize: '.75rem',
                    textTransform: 'uppercase'
                }}>quantity</Label>
                <StyledInput />
                <HelperText />
            </FormControl>
            <div className='dropdowns'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="category-label"                        
                        sx={{ 
                            margin: '.5rem 0',
                            textTransform: 'uppercase',
                            fontSize: '.75rem',
                            fontFamily: 'Playpen Sans',
                            fontWeight: '600',
                            color: customColours['rich-black']
                        }}>category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={'metal'}>metal</MenuItem>
                            <MenuItem value={'plastic'}>plastic</MenuItem>
                            <MenuItem value={'organic'}>organic</MenuItem>
                            <MenuItem value={'e-waste'}>e-waste</MenuItem>
                            <MenuItem value={'paper'}>paper</MenuItem>
                            <MenuItem value={'glass'}>glass</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="action-label" 
                        sx={{ 
                            margin: '.5rem 0',
                            textTransform: 'uppercase',
                            fontSize: '.75rem',
                            fontFamily: 'Playpen Sans',
                            fontWeight: '600',
                            color: customColours['rich-black']
                        }}>action taken</InputLabel>
                        <Select
                            labelId="action-label"
                            id="action"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={'disposed'}>disposed</MenuItem>
                            <MenuItem value={'composted'}>composted</MenuItem>
                            <MenuItem value={'reused'}>reused</MenuItem>
                            <MenuItem value={'recycled'}>recycled</MenuItem>
                            <MenuItem value={'donated'}>donated</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </section>
    );
}

const StyledInput = styled(Input)(
    ({ theme }) => `

    .${inputClasses.input} {
    width: 320px;
    font-family: 'Playpen Sans';
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
        border-color: ${customColours['rich-black']};
    }

    &:focus {
        outline: 0;
        border-color: ${customColours['rich-black']};
        box-shadow: 0 0 0 3px ${customColours['green-1']};
    }
    }
`,
);

const Label = styled(({ children, className }) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
        if (formControlContext?.filled) {
            setDirty(true);
        }
    }, [formControlContext]);

    if (formControlContext === undefined) {
        return <p>{children}</p>;
    }

    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return (
        <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
            {children}
            {required ? ' *' : ''}
        </p>
    );
})`
    font-family: 'Playpen Sans';
    font-weight: 300;
    font-size: 0.875rem;
    margin-bottom: 4px;

    &.invalid {
        color: red;
    }
`;

const HelperText = styled((props) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
        if (formControlContext?.filled) {
            setDirty(true);
        }
    }, [formControlContext]);

    if (formControlContext === undefined) {
        return null;
    }

    const { required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
`;

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
