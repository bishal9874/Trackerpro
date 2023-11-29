import { TextField, Box, Button, Typography, CircularProgress, Icon } from '@mui/material';
import React from 'react';
import PasswordPros from '../Components/PasswordPros';
import './Login.css';

export const Login = () => {
  return (
    <div className="l_main">
      <div className="flexCenter login_container innerWidth">
        <img src="src/assets/trackproLogo.png" alt="" width={250} />
        <Box component="form">
          <div className="inputs_container">
            <TextField id="email" name="email" label="Email" variant="outlined" margin="normal" />
            <PasswordPros
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
          </div>
          <div className="flexCenter login_butto_section">
            <button type="submit" className="login_button">
              login
            </button>
            <a style={{ alignContent: 'center', cursor: 'pointer', color: 'black' }}>forget password</a>
          </div>
          <p style={{color:"black"}}> Didn't have account ? <a style={{cursor:"pointer", color:"green", }} href='\signup'>Sign Up</a></p>
          <div className="flexCenter social_icons" style={{marginTop:"20px",justifyContent:"space-evenly"}}>
            <img src="src/assets/google-icon.png" alt="" width={80}/>
            <img src="src/assets/facebook.png" style={{borderRadius:"50px"}} alt="" width={65}/>
            <img src="src/assets/twitter.png" alt="" width={70}/>
            
            
          </div>
        </Box>
      </div>
    </div>
  );
};
