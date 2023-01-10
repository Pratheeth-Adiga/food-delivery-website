import React from 'react';
import Grid from '@mui/material/Grid';

export default function Footer(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='black' color='white'>
            <Grid item xs={4} pl={1}>
                <p><strong>Project by</strong></p>
                <p>Pratheeth Adiga(20GACSE049)</p>
                <p>Priyanka Rose Varghese(20GACSE050)</p>
                {/* <p>Company</p> */}
            </Grid>
            <Grid item xs={4}>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Legal</p>
                <p>Our Locations</p>
            </Grid>
            <Grid item xs={4}>
                <p>Under the Guidence of </p>
                <p>Dr. Champa. H. N </p>
                {/* <p>Legal</p> */}
                {/* <p>Legal</p> */}
            </Grid>
        </Grid>
    )
}