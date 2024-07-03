import './WasteWise.scss';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { NavBar } from '../../components/NavBar/NavBar';

const baseUrl = 'http://localhost:8080/guide';

const createData = (material, isRecyclable, bin, examples, exceptions, tips) => {
    return { material, isRecyclable, bin, examples, exceptions, tips };
}

export const WasteWise = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(baseUrl);
                console.log(res.data);
                const formattedRows = res.data.map(item => createData(
                    item.material,
                    item.isRecyclable ? "Yes" : "No",
                    item.bin,
                    item.examples,
                    item.exceptions,
                    item.tips
                ));
                setRows(formattedRows);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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

    return (
        <>
            <NavBar />
            <TableContainer component={Paper} sx={{ padding: '1rem' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Material</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Recyclable?</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Bin</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Examples</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Exceptions</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColors['olivine'],
                                    fontFamily: 'Raleway Bold',
                                    fontSize: '1.25rem'
                                }}>Tips</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.material}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Bold'
                                }}>{row.material}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Semi Bold'
                                }}>{row.isRecyclable}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Semi Bold'
                                }}>{row.bin}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Semi Bold'
                                }}>{row.examples}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Semi Bold'
                                }}>{row.exceptions}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColors['charcoal'],
                                    fontFamily: 'Raleway Semi Bold'
                                }}>{row.tips}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
