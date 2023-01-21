import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios   from "axios";
export default function CartCard() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const food=[]
    const fetchData = async() => {
        const response = await axios.get(`http://127.0.0.1:8000/cart1/${id}/`)
        const res = await response.data
        console.log(res)
        setData(res)

    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <Grid pt={1} pl={1} pr={1} component="main">
            {data.length === 0 ? <h2>Cart is empty :/    
                <a href="/customerpage">Click here to go back</a>
            </h2>:
            <Card>
                {data.map((x) => {
                    return(
                    <CardContent >
                        <Grid container>
                            <Grid item xs={1}>
                                <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h6">{x?.Name}</Typography>
                                <Typography variant="body3">{x?.Tag}</Typography>
                            </Grid>
                            <Grid item xs={1} pt={3} pl={13}>
                                    {x?.Price}
                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick=''>+</Button>
                                <Button onClick=''>-</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                )})}
                </Card>
}
            </Grid> 
    )
}