import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import store from "../../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let idli = "https://www.thespruceeats.com/thmb/6j6Ne_4F62_uigRCvTZYVykcHhc=/2122x1415/filters:fill(auto,1)/idli-56a510b63df78cf772862c34.jpg";
let dosa = "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg";
let roti = "https://3.bp.blogspot.com/-TsR1mrtpIic/WTgVxZcV4KI/AAAAAAAACWQ/g626zbTr0EwI_lGHlCRA9VO3SvV1ROe-gCLcB/s1600/loonapix_14968509663081167873.jpg";
let uppit = "https://i.ytimg.com/vi/r_s15RTEZlk/maxresdefault.jpg";
let noodles = "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Garlic-Noodles-Thumbnail.jpg";
let samosa = "https://curlytales.com/wp-content/uploads/2019/11/Samosa-Recipe.jpg";
let panipuri = "https://1.bp.blogspot.com/-MjhYOpRFJeM/UbchEdUhDVI/AAAAAAAACcE/HTdJ-EghQlc/s1600/pani+puri.JPG";
let abc_list = [idli,dosa,roti,uppit,noodles,samosa,panipuri];

function FeaturedPost(props) {
    const { post } = props;
    const state = store.getState();
    const User = state.auth.user;
    const navigate=useNavigate()
    const addToCart = (id) => {
        console.log("here")
        const post_data = {
          Food_Id: id,
          User_Id: User.id,
          Quantity: 1,
        };
        axios.post("http://127.0.0.1:8000/cart/", post_data);
        navigate(`/cart/${User.id}`);
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
            image={abc_list[2]}
            alt={post.imageLabel}
          />
        </Card>
        
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
