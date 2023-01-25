import { useRef } from "react";
import ReactToPrint from "react-to-print";
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems, secondaryListItems } from "./listItems";
// import Title from "./Title";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReportContent from "./ReportContent";
import { Button } from "@mui/material";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
      <div>
        <ComponentToPrint ref={(el) => (componentRef = el)} />
        <ReactToPrint
          trigger={() => <Grid container justifyContent='flex-end' pr={2}><Button color="success" variant="contained">Print</Button></Grid>}
          content={() => componentRef}
        />
      </div>
  );
}
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Foody Web
      </Link>{"/"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


class ComponentToPrint extends React.Component {
    render() {
      return (
        
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <ReportContent />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
       
      );
    }
  }
  