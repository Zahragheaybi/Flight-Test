import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, CssBaseline, Link, Grid, Box, Typography, Container, FormControl, } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import JalaliDatePicker from './JalaliDatePicker';
import ComboBox from "./ComboBox"
import { useNavigate } from "react-router-dom";

import { getSearch } from "../services/flightService";


const theme = createTheme();
export default function Search(props) {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();
    useEffect(() => {
        //console.log("from:", from)
        //console.log("to:", to)
        console.log("date....:", date.toISOString().split('T')[0])
    }, [date])





    const handleClick = () => {
        navigate(`/flight/${from.id}/${to.id}/${date.toISOString().split('T')[0]}`)
        // const fetchData = async () => {
        //     try {
        //         //setState({ ...state, loading: true });
        //         let obj = {
        //             from: from.id,
        //             to: to.id,
        //             departureDate: date.toISOString().split('T')[0]
        //         }
        //         const result = await getSearch(obj);
        //         console.log("result", result);
        //         // setState({
        //         //     ...state,
        //         //     loading: false,
        //         //     contact: contactData,
        //         //     groups: groupsData,
        //         // });
        //     } catch (err) {
        //         console.log(err);
        //         //setState({ ...state, loading: false });
        //     }
        // };

        // fetchData();






        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <TravelExploreIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        جستجوی پرواز
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                                    <ComboBox title="مبداً" value={from} change={(value) => setFrom(value)} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                                    <ComboBox title="مقصد" value={to} change={(value) => setTo(value)} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                                    <JalaliDatePicker value={date} change={(value) => setDate(value)} />

                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                                    <Button
                                        onClick={handleClick}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        جستجو
                                    </Button>
                                </FormControl>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}