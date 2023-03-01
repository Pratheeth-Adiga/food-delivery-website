import React from "react";
import { Grid, Button, Typography, Card, CardContent,Paper } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

let idli = "https://www.thespruceeats.com/thmb/6j6Ne_4F62_uigRCvTZYVykcHhc=/2122x1415/filters:fill(auto,1)/idli-56a510b63df78cf772862c34.jpg";
let dosa = "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg";
let roti = "https://3.bp.blogspot.com/-TsR1mrtpIic/WTgVxZcV4KI/AAAAAAAACWQ/g626zbTr0EwI_lGHlCRA9VO3SvV1ROe-gCLcB/s1600/loonapix_14968509663081167873.jpg";
let uppit = "https://i.ytimg.com/vi/r_s15RTEZlk/maxresdefault.jpg";
let noodles = "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Garlic-Noodles-Thumbnail.jpg";
let samosa = "https://curlytales.com/wp-content/uploads/2019/11/Samosa-Recipe.jpg";
let panipuri = "https://1.bp.blogspot.com/-MjhYOpRFJeM/UbchEdUhDVI/AAAAAAAACcE/HTdJ-EghQlc/s1600/pani+puri.JPG";
let abc_list = [idli,dosa,roti,uppit,noodles,samosa,panipuri];

export default function Orders() {
  const { id,oid } = useParams();
    console.log(oid)
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/restItems/${id}/${oid}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log(typeof data);
  }, []);
    const navigate = useNavigate()
   
  return (
    <div>
      {data.length === 0 ? (
        <h4>Nothing in Order</h4>
      ) : (
        <div>
          <Typography variant="h4" pt={3} pb={4} pl={2}>The Orders which are Pending:</Typography>
          <Paper elevation={2}>
          <Card>
            {data.map((x) => (
              <CardContent>
                <Grid container>
                    <Grid item xs={2} pl={5}>
                    <img
                      src={x?.Url}
                      alt="food"
                      width="100px"
                      height="100px"
                    >
                    </img>
                    </Grid>
                    <Grid item xs={3} pt={2}>
                            <Typography variant="h5">
                                {x?.Name}
                            </Typography>
                            <Typography variant="body">
                                 Quantity: 1
                            </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    {/* <Grid item xs={1} pt={4}>
                      <Button variant="contained" color="success">
                        Completed
                      </Button>
                    </Grid>
                    <Grid item xs={2} pt={4} pl={3}>
                      <Button variant="contained" color="error">
                        Cancel Order
                      </Button>
                    </Grid> */}

                </Grid>
              </CardContent>
            ))}
          </Card>
          </Paper>
        </div>
      )}
    </div>
  );
}
