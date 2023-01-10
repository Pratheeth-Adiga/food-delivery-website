import React from "react";
import { Grid,Typography,Button,Link } from "@mui/material";
import EditMenuCard from "./editmenucard";

export default function EditMenu(){
    return(
        <Grid pt={1} pl={1} pr={1} component="main">
            <Grid mb={1} backgroundColor="#">
                <Typography variant="h5">Edit Menu</Typography>
            </Grid>
                <EditMenuCard/>
            <Grid container>
                <Grid item xs={11}></Grid>
                <Grid item xs={1} pt={2}>
                    <Link href="/newitem" underline="none">
                        <Button variant="contained" color="success">Add Item</Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid> 
            
    )
}