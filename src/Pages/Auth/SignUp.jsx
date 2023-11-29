
import { TextField, Box, Button, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import './Signup.css'; 
const SignUp = () => {
  return (
    <div className="l_main">
    <div className="flexCenter signup_container innerWidth">
      <img src="src/assets/trackproLogo.png" alt="" width={250} />
      <Box component="form">
        <div className="inputs_container">
          <TextField id="fullName" name="fullName" label="Full Name" variant="outlined" margin="normal" />
          <TextField id="email" name="email" label="Email" variant="outlined" margin="normal" />
          <TextField id="password" name="password" label="Password" type="password" variant="outlined" margin="normal" />
        </div>
        <div className="flexCenter signup_button_section">
          <button type="submit" className="signup_button">
            Signup
          </button>
        </div>
        {/* <div className="flexCenter social_icons" style={{ marginTop: "20px", justifyContent: "space-evenly" }}>
          <img src="src/assets/google-icon.png" alt="" width={80} />
          <img src="src/assets/124010.png" style={{ borderRadius: "50px" }} alt="" width={70} />
          <img src="src/assets/twitter.png" alt="" width={70} />
        </div> */}
        <p style={{color:"black"}}>
          Already have account ? <a style={{color:"green", cursor:"pointer"}} href="/">sign in</a>
        </p>
      </Box>
    </div>
  </div>
  )
}

export default SignUp