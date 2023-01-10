import React from "react";
import { Avatar, Box,Grid,Link } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import stringAvatar from "../UserField/stringAvatar";

export default function CusTop(){
    return(
        <Box>
            <Grid container>
                <Grid item xs={10}>
                    <img src= "https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" width='60px' height='60px' alt='logo'></img> 
                </Grid>
                <Grid item xs={1} pt={1.5} pl={10}>
                    <Link href="/cart" underline="none"><ShoppingCartIcon/></Link>   
                </Grid>
                <Grid item xs={1} pt={0.5}>
                    <Link href="/cprofile" underline="none">
                        <Avatar {...stringAvatar("Priyanka")}/>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}