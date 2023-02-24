import * as React from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import { json } from "react-router-dom";

function preventDefault(event) {
  event.preventDefault();
}

export default function ReportContent() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/getreport/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
    console.log("Hi",);
    
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Foody Web- A Project By Pratheeth Adiga and Priyanka Rose Varghese
      </Typography>
      <Typography component="h4" variant="h7" color="success" gutterBottom>
        This table contains all the essential reports of our website
      </Typography>

      <Divider sx={{ my: 1 }} />
      <Typography variant="h7" color="success" gutterBottom>
        Total Number of registered Users: {data.user}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h7" color="success" gutterBottom>
        Total Number of registered Restaurants: {data.rest}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h7" color="success" gutterBottom>
        Total Number of Orders Placed: {data.total}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h7" color="success" gutterBottom>
        Total Number of Orders Delivered successfully: {data.delivered}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h7" color="success" gutterBottom>
        Total Number of Orders waiting to be Processed: {data.pending}
          </Typography>
    </React.Fragment>
  );
}
