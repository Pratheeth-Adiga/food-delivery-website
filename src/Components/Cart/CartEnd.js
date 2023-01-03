import React from "react";
import { Grid,Button,Box } from "@mui/material";

export default function CartEnd(){
    return(
        <Box component="footer">
            <Grid container pt={2} mb={2} direction="row" justifyContent="center" alignItems="flex-end">
                <Grid item>
                    <Button variant="contained" color="error">Remove all items</Button>
                </Grid>
                <Grid item xs={9}></Grid>
                <Grid>
                    <Button variant="contained" color="success">Checkout</Button>
                </Grid>
            </Grid>
        </Box>
    )
}