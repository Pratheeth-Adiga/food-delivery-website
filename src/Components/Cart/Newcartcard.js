import React from "react";
import { Button, Typography,Grid,Paper,Card,CardContent,TextField, Divider } from "@mui/material";

export default function NewCartCard(){
    return(
        <div>
        <Grid container pt={2} pl={2} spacing={3}>
            <Grid item xs={7}>
                <Paper elevation={5}>
                    <Typography variant="h4" pl={2} pt={2} pb={2}>
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
            <Grid item xs={4}>
                <Paper elevation={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" pb={1} pl={1}>
                                Summary
                            </Typography>
                            <Divider/>
                            <Typography variant="body2" pt={1} pl={1}>
                                Products:   $69
                            </Typography>
                            <Typography variant="body2" pt={1} pl={1}>
                                Delivery Charges:   $69
                            </Typography>
                            <Divider/>
                            <Typography variant="body2" pt={1} pl={1}>
                                Total Amount:   $69
                            </Typography>
                            <Grid container justifyContent="flex-end" pt={2}>
                            <Button color="success" variant="contained">
                                Checkout
                            </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>

        <Grid container pt={3} pl={2}>
        <Grid item xs= {7}>
            <Paper elevation={5}>
               
                <Typography variant="h5" pl={2} pt={2}>
                    Expected Delivery
                </Typography>
                <Divider/>
                <Typography variant="body1" pl={2} pt={2} pb={2}>
                    Within 50 mins
                </Typography>
            </Paper>
        </Grid>
        </Grid>
    </div>
    )
}