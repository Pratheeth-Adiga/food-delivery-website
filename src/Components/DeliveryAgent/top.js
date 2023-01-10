import React from "react";
import { Grid,Avatar,Link,Button } from "@mui/material";
import stringAvatar from "../UserField/stringAvatar";

export default function Top(){
    return(
        <div>
            <Grid container>
            <Grid pl={1}>
                <img src="https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" alt='logo' height="50px" width="50px"></img>
            </Grid>
            <Grid item xs={10}>
                {/* <Typography variant="body2">Food Website</Typography> */}
            </Grid>
            <Grid pr={1} pt={1}>
                <Button variant="outlined">
                    Logout
                </Button>
            </Grid>
                <Grid item pt={1}>
                    <Link href="/dprofile" underline="none">
                    <Avatar {...stringAvatar("Priyanka")} />
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}