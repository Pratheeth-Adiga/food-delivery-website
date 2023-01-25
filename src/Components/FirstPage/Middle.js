import React from "react";
import { Grid,Typography } from "@mui/material";

export default function Middle(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor="#2b1e16" color='white'>
            <Grid item xs={4}>
                <p>
                    <Grid container pl={1}>
                    <Grid container justifyContent='center' pt={2}>
                    <img src="https://webstockreview.net/images/clipart-food-character-1.png" alt="random-img" height={100} width={100}/>
                    </Grid>
                    <Typography pl={10} pt={3}>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nisi magnam incidunt. Tempore ab vero maiores accusantium, quae error architecto! */}
                            Get all your restaurant and food needs at one place.
                            “Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”
                    </Typography>
                    </Grid>
                </p>
            </Grid> 
            <Grid item xs={4}>
                <p>
                    <Grid container pl={1}>
                    <Grid container justifyContent='center' pt={2}>
                    <img src="https://webstockreview.net/images/clipart-restaurant-restaurant-worker-3.png" alt="random-img" height={100} width={100}/>
                    </Grid>
                    <Typography pl={10} pt={3}>
                            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nisi magnam incidunt. Tempore ab vero maiores accusantium, quae error architecto! */}
                            We provide excellent customer service.
                    "There is a spiritual aspect to our lives — when we give, we receive — when a business does something good for somebody, that somebody feels good about them!"
                    </Typography>
                    </Grid>
                </p>
            </Grid> 
            <Grid item xs={4}>
                <p>
                    <Grid container pl={1}>
                    <Grid container justifyContent='center' pt={2}>
                    <img src="https://www.a1wreckers.com.au/wp-content/uploads/2021/03/There-Are-No-Hidden-Charges.png" alt="random-img" height={100} width={100}/>
                    </Grid>
                    <Typography pl={12} pt={3}>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nisi magnam incidunt. Tempore ab vero maiores accusantium, quae error architecto! */}
                            No hidden Charges.
                            Price quoted is the total price to the Customer as quoted in any quotation, proposal, tender or other document supplied to the Customer
                    </Typography>
                    </Grid>
                </p>
            </Grid> 
        </Grid>
    )
}