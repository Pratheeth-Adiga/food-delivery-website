// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import {useState} from 'react'
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { verify } from '../actions/auth';
// import {connect} from 'react-redux'
// import { Navigate } from 'react-router-dom'



// const theme = createTheme();

// const Activate = ({  verify,match}) => {

// const [verified, setVerified] = useState(false);

// const verify_account = e => {
//     const uid = match.params.uid;
//     const token = match.params.token;

//     verify(uid, token);
//     setVerified(true);
// };
//   if (verified) {
//     return <Navigate replace to='/login'/>
//   }
 
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Login
//           </Typography>
//           <Box component="form" onSubmit={e=>verify_account(e)} noValidate sx={{ mt: 1 }}>
            
//             <Button
//               type='submit'
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Log In
//             </Button>
            
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

// const mapStateToProps = state =>({
//     isAuthenticated :state.auth.isAuthenticated
// })
// export default connect(mapStateToProps, {verify })(Activate);