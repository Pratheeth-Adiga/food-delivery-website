import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button,Grid } from "@mui/material";

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

class ComponentToPrint extends React.Component {
    render() {
      return (
        <Grid pl={2}>
          <p>Project by Pratheeth and Priyanka </p>
          <p>Insert content here</p>
        </Grid>
      );
    }
  }
  