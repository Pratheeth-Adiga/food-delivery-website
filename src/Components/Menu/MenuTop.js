import React from "react";
import { Grid,Avatar,Link } from "@mui/material";
import stringAvatar from "../UserField/stringAvatar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from 'react-bootstrap/Badge';

export default function Top(){
    return(
        <div>
            <Grid container>
            <Grid pl={1}>
                <img src="https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" alt='logo' height="50px" width="50px"></img>
            </Grid>
          
                <Grid item xs={1} pl={1} pt={2}>
                    <Link href="/cart" underline="none">
                        <ShoppingCartIcon />
                    </Link>   
                </Grid>
                {/* <Grid item xs={1} pt={1} pl={1}>
                    <Link href="/cprofile" underline="none">
                        <Avatar {...stringAvatar('Priyanka')} />
                    </Link>
                </Grid> */}
            </Grid>
        </div>
    )
}