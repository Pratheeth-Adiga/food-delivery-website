import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartCard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const food = [];
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/cart1/${id}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const [data1, setData1] = useState([...data])
  
  // const change = (e, id) => {
  //   const { value } = e.target
  //   setData1((x) =>
  //     x?.map((list, index) =>
  //     index===id?{...list,x:value}:list)
  //   )
  // }
  const [qty, setQty] = useState(1);
  const deleteOne = (foodid) => {
    axios.delete(`http://127.0.0.1:8000/cartdeleteItem/${id}/${foodid}/`);
    window.location.reload(false);
  };
  const [price, setPrice] = useState(0);

  return (
    <Grid pt={1} pl={1} pr={1} component="main">
      {data.length === 0 ? (
        <h2>
          Cart is empty :/
          <a href="/customerpage">Click here to go back</a>
        </h2>
      ) : (
        <>
          <Grid container>
            <Grid item xs={7} pl={10}>
              <h5>Menu Item</h5>
            </Grid>
            <Grid item xs={1} pl={14}>
              <h5>Price</h5>
            </Grid>
           
          </Grid>
          <Card >
            {data.map((x,i) => {
              return (
                <CardContent>
                  <Grid container>
                    <Grid item xs={1}>
                      <img
                        src="http://chinabuffetatlantic.com/custom/3.jpg"
                        alt="food"
                        width="65px"
                        height="65px"
                      ></img>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="h6">{x?.Name}</Typography>
                      <Typography variant="body3">{x?.Tag}</Typography>
                    </Grid>
                    <Grid item xs={1} pt={3} pl={0.01}>
                      {x?.Price }
                    </Grid>
                    {/* <Grid item xs={1} pt={2} pl={10}>
                   
                      <input
                        type="text"
                        onChange={(e) => change(e,i)}
                        
                        name="qty"
                        value={x.Quantity} 
                      />
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => deleteOne(x?.id)}
                    >
                      Save
                    </Button> */}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteOne(x?.id)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </CardContent>
              );
            })}
          </Card>
        </>
      )}
      <h4>
        Total Price: Rs.
        {data.reduce((acc, item) => acc + 1 * item.Price, 0).toFixed(2)}
      </h4>
    </Grid>
  );
}
