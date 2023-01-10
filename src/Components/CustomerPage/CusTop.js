import React from "react";
import { Avatar, Box,Grid,Link,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import stringAvatar from "../UserField/stringAvatar";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const CusTop=({logout})=> {
    return(
        <Box>
            <Grid container>
                <Grid item xs={9}>
                    <img src= "https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" width='60px' height='60px' alt='logo'></img> 
                </Grid>
                <Grid item xs={1} pt={2} pl={10}>
                    <Link href="/cart" underline="none"><ShoppingCartIcon/></Link>   
                </Grid>
                <Grid item xs={1} pt={1} pl={1}>
                    <Button
                        variant="outlined"
                        onClick={logout}
                        href='/'
                    >
                        Logout
                    </Button>
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{logout})(CusTop);