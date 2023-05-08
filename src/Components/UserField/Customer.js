import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
        Food Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Customer() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    Name: "",
    Username: "",
    Mobile: "",
    Addr: "",

  });

  const { Name, Username, Mobile, Addr } = formData;

  const onChange = (e) => {
    console.log("heloooo");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const post_data = {
      Addr: Addr,
      User_Id: id,
      Username: Username,
      Mobile: Mobile,
      Name: Name,
    };
    axios.delete(`http://127.0.0.1:8000/deletedupprofile/${id}/`)
    axios.post(`http://127.0.0.1:8000/postcprofile/${id}/`, post_data);
    navigate(`/cprofile/${id}`)
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>F</Avatar>
          <Typography component="h1" variant="h5">
            Fill in your profile details
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="Name"
                  autoFocus
                  onChange={e => onChange(e)}
                  value={Name}
                  type='Name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                  onChange={e => onChange(e)}
                  value={Username}
                  type='Username'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   margin="normal"
                   required
                   fullWidth
                   id="Mobile"
                   label="Mobile"
                   name="Mobile"
                   autoComplete="Mobile"
                   autoFocus
                   onChange={e => onChange(e)}
                   value={Mobile}
                   type='Mobile'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                   margin="normal"
                   required
                   fullWidth
                   id="Addr"
                   label="Address"
                   name="Addr"
                   autoComplete="Addr"
                   autoFocus
                   onChange={e => onChange(e)}
                   value={Addr}
                   type='Addr'
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
