import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
export default function MenuCard({match}) {
    const { id } = useParams();
    console.log(id)
    //restaurant/<str:pk>/
    const [data,setData]=useState([])
    const fetchData = async() => {
        const response = await axios.get(`http://127.0.0.1:8000/restaurant/${id}/`)
        const res = await response.data
        console.log(res)
        setData(res)
    }
    useEffect(() => {
        fetchData()
        console.log(typeof(data))
    }, [])
    
    return (
      
        <Grid pt={1} pl={1} pr={1} component="main">
            {data.length===0 ? <h4>No Menu available at the moment</h4> : (<div>
                <h4>The Menu Card:</h4>
                <Grid container>
                    <Grid item xs={7} pl={10}>
                        <h5>Menu Item</h5>
                    </Grid>
                    <Grid item xs={1}  pl={19}>
                                  <h5>Price</h5>
                    </Grid>
                    <Grid item xs={1} pl={23}>
                    <h5>Quantity</h5>
                                </Grid>
                </Grid>
                {data.map((x) =>
                    <Card key={data?._id}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="h6">{x?.Name}</Typography>
                                    <Typography variant="body3">{x?.Tag} </Typography>
                                </Grid>
                                <Grid item xs={1}  pt={2} pl={6}>
                                 {x?.Price}
                                </Grid>
                                <Grid item xs={1} pt={2} pl={18}>
                                    1
                                </Grid>
                                <Grid item xs={1} pl={3}>
                                    <Button onClick=''>+</Button>
                                    <Button onClick=''>-</Button>
                                </Grid>
                                <Grid item pt={2} pl={4}>
                                    <Button variant="contained" color="success">Add to cart</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                )}
                </div>)}
            </Grid> 
                
                
       
      
    )
}