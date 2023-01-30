import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const steps = ["Shipping address", "Payment details", "Review your order"];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Food Delivery Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();
export default function Checkout3() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/cart1/${id}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const steps = ["Shipping address", "Payment details", "Review your order"];
  let text = 0;
  const navigate = useNavigate();
  for (let i = 0; i < data.length; i++) {
    text += Number(data[i].Price);
  }

  const handleNext = async () => {
    console.log(Number(text));
    const post_data = {
      Status: 1,
      User_Id: id,
      Price: text,
    };
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.post(
      "http://127.0.0.1:8000/saveorder/",
      post_data,
      config
    );
    console.log("ji,", res.data);
    console.log(data[0].id);
    data.map(async (x) => {
      const post_data1 = {
        Order_Id: res.data.id,
        Food_Id: x.id,
      };
      const res1 = await axios.post(
        "http://127.0.0.1:8000/saveorderitems/",
        post_data1,
        config
      );
      console.log("item ", 0);
    });

    navigate(`/checkoutfinal/${id}`);
  };
  const handleBack = () => {
    navigate(`/checkout2/${id}`);
  };
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Food Delivery
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Order summary
              </Typography>
              <List disablePadding>
                {data.map((product) => (
                  <ListItem key={product.Name} sx={{ py: 1, px: 0 }}>
                    <ListItemText
                      primary={product.Name}
                      secondary={product.Tag}
                    />
                    <Typography variant="body2">Rs. {product.Price}</Typography>
                  </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Rs.{" "}
                    {data
                      .reduce((acc, item) => acc + 1 * item.Price, 0)
                      .toFixed(2)}
                  </Typography>
                </ListItem>
              </List>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ mt: 2 }}
                  ></Typography>
                  {/* <Typography gutterBottom>Ganesh</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
                </Grid>
                {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}
              </Grid>
            </React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                Next
                {/* {activeStep === steps.length - 1 ? 'Place order' : 'Next'} */}
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
