import React from "react";
import { Card,Grid,Typography,Button,CardContent } from "@mui/material";

export default function EditMenuCard(){
    return(
        <div>
                <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                </Grid>
                                <Grid item xs={10}>                      
                                    <Typography variant="h6">Item Name</Typography>
                                    <Typography variant="body3">Price</Typography>
                                </Grid>
                                <Grid item justifyContent="center" pt={2}>
                                    <Button variant="contained" color="error">Delete</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
        </div>
    )
}