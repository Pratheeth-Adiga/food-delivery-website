import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signup } from "../../actions/auth";
import { connect } from "react-redux";
import { useState} from "react";
import { Navigate } from "react-router-dom";
const theme = createTheme();


const SignUp = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    re_password: "",  
  });

  const { email, password, re_password} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    
    e.preventDefault();
    if (password === re_password) {
      console.log("here");
      signup(email, password, re_password);
      setAccountCreated(true);
    }
  };
  
  if (isAuthenticated) {
    return <Navigate replace to="/browse" />;
  }

  
  if (accountCreated) {
    return <Navigate replace to="/login" />
   
  }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => onChange(e)}
              value={email}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label=" Create Password"
              onChange={(e) => onChange(e)}
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="re_password"
              label=" Confirm Password"
              onChange={(e) => onChange(e)}
              type="password"
              id="re_password"
              value={re_password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp)
