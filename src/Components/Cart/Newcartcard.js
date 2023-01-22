import React from "react";
import { Button, Typography,Grid,Paper,Card,CardContent,TextField } from "@mui/material";

export default function NewCartCard(){
    return(
        <Grid container pt={2} pl={2}>
            <Grid item xs={7}>
                <Paper elevation={5}>
                    <Typography variant="h4" pl={2}>
                        Cart - x items
                    </Typography>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item>
                                <img src="https://www.rd.com/wp-content/uploads/2018/12/shutterstock_1161597079.jpg" alt="a" width="120px" height="120px" ></img>
                                </Grid>
                                <Grid item pl={2}>
                                    <Typography variant="h5">
                                        Food Name
                                    </Typography>
                                    <Typography variant="h6">
                                        Price
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}></Grid>
                                <Grid item xs={1}>
                                    <Button>+</Button>
                                    <TextField
                                        id="readonly"
                                        label="Quantity"
                                        size="small"
                                        type="number"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    <Button>-</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item>
                                <img src="https://www.rd.com/wp-content/uploads/2018/12/shutterstock_1161597079.jpg" alt="a" width="120px" height="120px" ></img>
                                </Grid>
                                <Grid item pl={2}>
                                    <Typography variant="h5">
                                        Food Name
                                    </Typography>
                                    <Typography variant="h6">
                                        Price
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}></Grid>
                                <Grid item xs={1}>
                                    <Button>+</Button>
                                    <TextField
                                        id="readonly"
                                        label="Quantity"
                                        size="small"
                                        type="number"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        />
                                    <Button>-</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                                        
                </Paper>
            </Grid>

        </Grid>
    )
}