import { useRef } from "react";
import ReactToPrint from "react-to-print";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ReportContent from "./ReportContent";
import { Button } from "@mui/material";

export default function PrintComponent() {
  let componentRef = useRef();
  return (
      <div>
        <ComponentToPrint ref={(el) => (componentRef = el)} />
        <ReactToPrint
          trigger={() => <Grid container justifyContent='flex-end'>
            <Grid item xs = {10}></Grid>
              <Grid item>
                <Button color="success" variant="contained">
                  Print
                </Button>
              </Grid>
            <Grid item xs={1}></Grid>
          </Grid>}
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
      <Link color="inherit" href="/">
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
  