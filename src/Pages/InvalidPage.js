import React from "react";
import { Grid } from "@mui/material";

export default function InvalidPage(){
    return(
        <Grid container>
            <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <h1>ERROR 404:</h1>
                    <h2>Page Doesn't Exist</h2>
                </Grid>     
            <Grid item xs={5}></Grid>
        </Grid>
    )
}