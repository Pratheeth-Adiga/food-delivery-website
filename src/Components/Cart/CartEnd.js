import React from "react";
import { Grid,Button,Box,Link } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CartEnd() {
    const { id } = useParams();
    const deleteAll = () => {
        console.log("here")
        axios.delete(`http://127.0.0.1:8000/cartdelete/${id}/`)
        window.location.reload(false)
    }
    const navigate = useNavigate();
    const checkout = () => {
        navigate(`/checkout/${id}`)
    }
    return(
        <Box component="footer">
            <Grid container pt={2} mb={2} direction="row" justifyContent="center" alignItems="flex-end">
                <Grid item>
                    <Button variant="contained" color="error" onClick={()=>deleteAll()}>Remove all items</Button>
                </Grid>
                <Grid item xs={9}>
                
                </Grid>
                <Grid>
                    
                        <Button variant="contained" color="success" onClick={checkout}>Checkout</Button>
                    
                </Grid>
            </Grid>
        </Box>
    )
}