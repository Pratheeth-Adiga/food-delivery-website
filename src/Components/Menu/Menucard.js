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
            {!data ?  <h6>No Menu available at the moment</h6>:(<div><h6>The Menu Card:</h6>
                    <Card key={data?.GST_no}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                    </Grid>
                                    <Grid item xs={7}>                      
                                        <Typography variant="h6">{data?.Name}</Typography>
                                        <Typography variant="body3">{data?.Tag} </Typography>
                                    </Grid>
                                    <Grid item xs={1} pt={3} pl={15}>
                                        1   
                                    </Grid>
                                    <Grid item xs={1} pl={3}>
                                        <Button  onClick=''>+</Button>
                                        <Button  onClick=''>-</Button>
                                    </Grid>
                                    <Grid item pt={2} pl={4}>
                                        <Button variant="contained" color="success">Add to cart</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                </Card>
                </div>)}
            </Grid> 
                
                
       
      
    )
}