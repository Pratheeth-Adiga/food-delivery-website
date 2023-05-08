import * as React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

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
    </React.Fragment>
  );
}
