import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import {connect} from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reset_password } from '../actions/auth'; 

const theme = createTheme();

const Resetpass = ({reset_password}) => {
 
  const [formData, setFormData] = useState({
    email: '',
});

const { email} = formData;
const [requestSent,setRequestSent]=useState(false)
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();
    setRequestSent(true)
  reset_password(email);
};
  if (requestSent) {
    return <Navigate replace to='/'/>
  }


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
            Enter Registered Email
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
            
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default connect(null, {reset_password })(Resetpass);