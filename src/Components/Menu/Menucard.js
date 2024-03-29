import React from "react";
import { Grid, Card, CardContent, Typography, Button,Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { load_user } from "../../actions/auth";
import { connect } from "react-redux";
import { useContext } from "react";
import { ReactReduxContext } from "react";
import store from "../../store";
function MenuCard({ match, user }) {
  //const { store } = useStore(ReactReduxContext)
  // // console.log(store)
  // const x = useSelector((state) => state.user);
  // console.log(x)
  const state = store.getState();
  const User = state.auth.user;
  // const {uid,email}=User
  // const uid = User.id
  // console.log(User.id)
  const { resid } = useParams();
  const navigate = useNavigate();
  console.log(resid);
    const [count, setCount] = useState(0);
    const [qty, setQty] = useState(0);

 
  //restaurant/<str:pk>/
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/restaurant/${resid}/`
    );
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log(typeof data);
  }, []);
    
  const addToCart = (id) => {
    const post_data = {
      Food_Id: id,
      User_Id: User.id,
      Quantity: 1
    };
    axios.post("http://127.0.0.1:8000/cart/", post_data);
    navigate(`/cart/${User.id}`);
  };

  return (
    <Grid pt={1} pl={1} pr={1} component="main">
      {data.length === 0 ? (
        <h4>No Menu available at the moment</h4>
      ) : (
        <div>
          <h4>The Menu Card:</h4>
          <Grid container>
            <Grid item xs={7} pl={11}>
              <h5>Menu Item</h5>
            </Grid>
            <Grid item xs={1} pl={16}>
              <h5>Price</h5>
            </Grid>
            {/* <Grid item xs={1} pl={20}>
              <h5>Quantity</h5>
            </Grid> */}
          </Grid>
          {data.map((x) => (
          <Paper elevation={4}>
            <Card key={x?.id}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img
                      src="http://chinabuffetatlantic.com/custom/3.jpg"
                      alt="food"
                      width="75px"
                      height="75px"
                    ></img>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="h6">{x?.Name}</Typography>
                    <Typography variant="body3">{x?.Tag} </Typography>
                  </Grid>
                  <Grid item xs={1} pt={2} pl={6}>
                    Rs. {x?.Price}
                  </Grid>  
                  <Grid item xs={2} pt={7} >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => addToCart(x?.id)}
                    >
                      Add to cart
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            </Paper>
          ))}
        </div>
      )}
    </Grid>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { load_user })(MenuCard);
