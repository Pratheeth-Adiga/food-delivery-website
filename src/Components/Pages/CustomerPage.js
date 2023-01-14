import FoodCards from "../CustomerPage/RestuarantCard";
import CusTop from "../CustomerPage/CusTop";
import { Grid } from "@mui/material";

export default function CustomerPage(){
    return(
        <div>
            <CusTop/>
             <Grid container pl={2} spacing={1}>
                <Grid item><FoodCards/></Grid>
                
            </Grid>  
        </div>
    )
}