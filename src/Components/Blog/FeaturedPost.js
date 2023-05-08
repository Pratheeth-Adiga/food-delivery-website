import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import store from "../../store";
import axios from "axios";

function FeaturedPost(props) {
    const { post } = props;
    const state = store.getState();
    const User = state.auth.user;
    const addToCart = (id) => {
        console.log("here")
        const post_data = {
          Food_Id: id,
          User_Id: User.id,
          Quantity: 1,
        };
      axios.post("http://127.0.0.1:8000/cart/", post_data);
      alert('Add to Cart successful');
      };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.Name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.Tag}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.Descr}
            </Typography>
            <Button variant="outlined" color="success" onClick={()=>{addToCart(post.id)}}>
          Add to cart
        </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.Url}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
