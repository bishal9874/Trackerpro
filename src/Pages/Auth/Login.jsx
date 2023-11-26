import { TextField,
  Box,
  Alert,
  Typography,
  CircularProgress, } from '@mui/material'
import React from 'react'
import PasswordPros from '../Components/PasswordPros'
import './Login.css'
export const Login = () => {
  return (
    
    <div className="flexCenter login_container">
    <img src="src/assets/trackproLogo.png" alt="" width={250}/>
    <Box component="form" >
    <div className="inputs_container">
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      {/* {server_error.email ? (
        <Typography style={{ fontSize: 12, color: "red" }}>
          {" "}
          {server_error.email[0]}
        </Typography>
      ) : null} */}
      {/* <TextField
        id="rationId"
        name="rationId"
        label="Ration ID"
        variant="outlined"
        margin="normal"
        
      /> */}
      {/* {server_error.rationId ? (
        <Typography style={{ fontSize: 12, color: "red" }}>
          {" "}
          {server_error.rationId[0]}
        </Typography>
      ) : null} */}
      <PasswordPros
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
      />
      {/* {server_error.password ? (
        <Typography style={{ fontSize: 12, color: "red" }}>
          {" "}
          {server_error.password[0]}
        </Typography>
      ) : null} */}
    </div>
    <div className="flexCenter login_butto_section ">
    {/* {isLoading ? (
    <CircularProgress />
  ) : (
    <button type="submit" className="login_button" >
      login
    </button>
  )} */}
   <button type="submit" className="login_button" >
      login
    </button>

  <a style={{alignContent:"center", cursor:"pointer"}}>forget password</a>
    </div>
  
  </Box>
    </div>
    
    
  )
}
