import React from "react";
import { logout } from "../../actions/auth";
import stringAvatar from "../UserField/stringAvatar";
import { Avatar, Box, Grid, Link, Button,Typography } from "@mui/material";

export default function CartTop({logout}){
    return(
        <div>
            <Grid container>
        
            <Grid pl={1}>
                <img src="https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" alt='logo' height="50px" width="50px"></img>
            </Grid>
          
            <Grid item xs={1} pt={2} pl={120}>
                    <Button
                        variant="outlined"
                        onClick={logout}
                        href='/'
                    >
                        Logout
                    </Button>
                </Grid>
                <Grid item xs={1} pt={1} pl={15}>
                    <Link href="/cprofile" underline="none">
                        <Avatar {...stringAvatar("Priyanka")}/>
                    </Link>
                </Grid>
                </Grid>
            <Grid container>
                <Grid xs={12} pl={1} backgroundColor="#ff7e5d" pt={1} pb={1}>
                    <Typography variant="h4">My Cart</Typography>
                </Grid>
            </Grid>
        </div>
    )
}