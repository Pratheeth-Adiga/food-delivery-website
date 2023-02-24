import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "../../store";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const theme = createTheme();

export default function Blog() {
  const state = store.getState();
  const User = state.auth.user;

  const { resid } = useParams();
  console.log(resid);
  const navigate = useNavigate();
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
  const [data1, setData1] = useState([]);
  const fetchData1 = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/restdetails/${resid}/`
    );
    const res = await response.data;
    console.log(res);
    setData1(res);
  };
  useEffect(() => {
    fetchData1();
    console.log(typeof data);
  }, []);
  const addToCart = (id) => {
    const post_data = {
      Food_Id: id,
      User_Id: User.id,
      Quantity: 1,
    };
    axios.post("http://127.0.0.1:8000/cart/", post_data);
    navigate(`/cart/${User.id}`);
  };
    const gotoCart = () => {
        navigate(`/cart/${User.id}`);
  };

  const mainFeaturedPost = {
    title: data1[0]?.Name,
    description: data1[0]?.Descr,
    manager: data1[0]?.Mgr_name,
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
  };
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <React.Fragment>
          <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Button size="small" href="/album">
              Go Back
            </Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            ></Typography>
                      <Button variant="outlined" size="small" onClick={() => { gotoCart() }}>
              Cart
            </Button>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "space-between", overflowX: "auto" }}
          ></Toolbar>
        </React.Fragment>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {data.length === 0 ? (
            <h3>This restaurant hasn't uploaded their Menus yet. Come again later</h3>
          ) : (
            <></>
          )}
          <Grid container spacing={4}>
            {data?.map((x) => (
              <>
                <FeaturedPost key={x?.id} post={x} />
              </>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
