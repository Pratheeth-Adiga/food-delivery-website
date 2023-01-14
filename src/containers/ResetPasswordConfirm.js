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
import { Navigate,useParams } from 'react-router-dom'
import { reset_password_confirm } from '../actions/auth'; 

const theme = createTheme();

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  //localhost:3000/:uid/:token
    const {uid,token} = useParams()
   
  const [formData, setFormData] = useState({
      new_password: '',
      re_new_password:''
});

const { new_password,re_new_password} = formData;
const [requestSent,setRequestSent]=useState(false)
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();
    
   
    setRequestSent(true)
  reset_password_confirm(uid, token, new_password, re_new_password);
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
              name="new_password"
              label="New Password"
              type="password"
              id="password"
              minLength='6'
              autoComplete="current-password"
              value={new_password}
              onChange={e => onChange(e)}
                      />
             <TextField
              margin="normal"
              required
              fullWidth
              name="re_new_password"
              label="Confirm Password"
              type="password"
              id="password"
              minLength='6'
              autoComplete="current-password"
              value={re_new_password}
              onChange={e => onChange(e)}
            />
            
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm & Submit
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default connect(null, {reset_password_confirm })(ResetPasswordConfirm);