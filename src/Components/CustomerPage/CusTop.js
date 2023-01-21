import React from "react";
import { Avatar, Box,Grid,Link,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import stringAvatar from "../UserField/stringAvatar";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import SearchBar from "../FirstPage/SearchBar";
import store from "../../store";

const CusTop = ({ logout }) => {
    const state = store.getState();
    const User = state.auth.user
    console.log(User)
    
    return(
        <Box>
            <Grid container>
                <Grid item xs={4}>
                    <img src= "https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" width='60px' height='60px' alt='logo'></img> 
                </Grid>
                <Grid item xs={5}>
                <div class="search">
                  <p>
                    <SearchBar />
                  </p>
                </div>
              </Grid>
                <Grid item xs={1} pt={2} pl={10}>
                    <Link to={`/cart`} underline="none"><ShoppingCartIcon/></Link>   
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
                        {User===null?<Avatar {...stringAvatar("Priyanka")}/>:<Avatar {...stringAvatar(User.email)}/>}
                        
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