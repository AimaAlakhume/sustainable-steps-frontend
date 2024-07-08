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
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { customColours } from '../../utils/CustomColours/CustomColours';

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


    return (
        <>
            <NavBar />
            <TableContainer component={Paper} sx={{ padding: '1rem' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
                                    fontSize: '1.25rem'
                                }}>Material</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
                                    fontSize: '1.25rem'
                                }}>Recyclable?</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
                                    fontSize: '1.25rem'
                                }}>Bin</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
                                    fontSize: '1.25rem'
                                }}>Examples</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
                                    fontSize: '1.25rem'
                                }}>Exceptions</TableCell>
                            <TableCell align="left"
                                sx={{
                                    color: customColours['green-1'],
                                    fontFamily: 'Playpen Sans',
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
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.material}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.isRecyclable}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.bin}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.examples}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.exceptions}</TableCell>
                                <TableCell align="left" sx={{
                                    color: customColours['charcoal'],
                                    fontFamily: 'Playpen Sans'
                                }}>{row.tips}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <BottomNav />
        </>
    );
}


// drag and drop
// water bucket icon
// quiz
// dnd react - venn
// right below the game, have an animation that shows progres. a progress bar would be good
// maybe have the plants grow
// streak-based
// only have a few plant images
// 

// a grid of untapped plots then have them click on a plot
// give each plant a timestamp

// drag and drop sandbox (venn & ruth)

// talk to sean