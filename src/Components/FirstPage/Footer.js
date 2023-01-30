import React from 'react';
import Grid from '@mui/material/Grid';

export default function Footer(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='black' color='white'>
            <Grid item xs={4} pl={13}>
                <p><strong>Project by</strong></p>
                <p>Pratheeth Adiga(20GACSE049)</p>
                <p>Priyanka Rose Varghese(20GACSE050)</p>
            </Grid>
            <Grid item xs={4} pl={14}>
                <p>About us</p>
                <p>Contact Us: foodyweb050@gmail.com</p>
            </Grid>
            <Grid item xs={4} pl ={15}>
                <p>Under the Guidance of </p>
                <p>Dr. Champa. H. N </p>
                <p>Punith Kumar</p>
            </Grid>
        </Grid>
    )
}