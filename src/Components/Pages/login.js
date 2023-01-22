import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel,Checkbox,Link } from '@mui/material';
import { login } from '../../actions/auth'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
import { Navigate } from 'react-router-dom'
import { checkAuthenticated, load_user } from '../../actions/auth';
import store from '../../store';

const theme = createTheme();

const Login = ({  login, isAuthenticated }) => {
 
  const [formData, setFormData] = useState({
    email: '',
    password: '' 
});

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    login(email, password);
};
  const navigate=useNavigate()
const state = store.getState();
  const User = state.auth.user;
  if (isAuthenticated) {
    console.log("jee")
    navigate(`/role/${User.id}`)
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={e=>onSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => onChange(e)}
              value={email}
              type='email'

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              minLength='6'
              autoComplete="current-password"
              value={password}
              onChange={e => onChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="http://localhost:3000/reset-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = state =>({
    isAuthenticated :state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login })(Login);