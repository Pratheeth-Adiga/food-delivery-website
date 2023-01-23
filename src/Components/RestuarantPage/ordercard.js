import React from "react";
import { Grid, Button, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderCard() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/restOrder/${id}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log(typeof data);
  }, []);
  const navigate = useNavigate();
  const checkItems = (oid) => {
    navigate(`/restaurantorders/${id}/${oid}`);
  };
    const handlecomplete = (oid) => {
        axios.put(`http://127.0.0.1:8000/putstatus/${oid}/`)
        window.location.reload(false);
        
    }
  return (
    <div>
      {data.length === 0 ? (
        <h4>No Orders available at the moment</h4>
      ) : (
                  <div>
                      <h2>Number of Orders Left: {data.length}</h2>
          <h4>The Menu Card:</h4>
          <Card>
            {data.map((x) => (
              <CardContent key={x?.Order_Id}>
                <Grid container>
                  <Grid item xs={1}>
                    <h3>{x?.Order_Id}</h3>
                    <img
                      src="http://chinabuffetatlantic.com/custom/3.jpg"
                      alt="food"
                      width="65px"
                      height="65px"
                    ></img>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6">{x?.Name}</Typography>
                    <Typography variant="body3">Quantity</Typography>
                  </Grid>
                  <Grid item justifyContent="center" pt={2}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => checkItems(x?.Order_Id)}
                    >
                      Check Order
                    </Button>
                  </Grid>
                  <Grid item justifyContent="center" pt={2}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() =>handlecomplete(x?.Order_Id)}
                    >
                      Order Complete
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
