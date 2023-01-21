import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "@mui/material";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
      <div>
                <ComponentToPrint ref={(el) => (componentRef = el)} />
        <ReactToPrint
          trigger={() => <Button color="success" variant="contained">Print</Button>}
          content={() => componentRef}
        />


      </div>
  );
}

class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <p>Project by Pratheeth and Priyanka </p>
          <p>Insert content here</p>
        </div>
      );
    }
  }
  