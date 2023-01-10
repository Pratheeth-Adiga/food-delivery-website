import React from "react";
import { Grid,Box } from "@mui/material";
import Order from "./order";

export default function Restaurant(){
    return(
        <div>
            <Grid container>
                <Grid xs={12}>
                    <Box>
                        <Order/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}