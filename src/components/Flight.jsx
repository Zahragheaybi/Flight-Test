import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import Avatar from '@mui/material/Avatar';
import { getSearch } from "../services/flightService";

const Flight = () => {
    const [flights, setFlight] = useState([])
    const { from, to, date } = useParams()
    useEffect(() => {
        (async () => {
            try {
                let obj = {
                    from: from,
                    to: to,
                    departureDate: date
                }
                const result = await getSearch(obj);
                console.log(result.data.list)
                if (result.data.success) { setFlight(result.data.list) } else {
                    alert(result.data.error.msg)
                }
            } catch (err) {
                console.log(err);
            }
        })();


    }, [from, to, date])

    return (<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center",
            '& > :not(style)': {
                m: 1,
                width: 128,
            },
        }}
    >
        {flights.map((item, index) => (
            <Card sx={{ minWidth: 275 }} key={index} >
                <CardContent>
                    <Avatar alt="pic" src={item.airlineLogo} />
                    <Typography variant="h5" component="div">
                        {item.airelineNamePersian}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        شماره پرواز: {item.flightNumber}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        نوع هواپیما: {item.aircraft}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        تومان: {item.adultPrice}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.arrivalDateM}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">اطلاعات بیشتر</Button>
                </CardActions>
            </Card>
        ))}
    </Box>
    )
}
export default Flight