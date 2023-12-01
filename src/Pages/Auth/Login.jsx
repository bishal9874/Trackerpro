import React, { useState } from 'react';
import { TextField, Box, Button, CircularProgress } from '@mui/material';
import PasswordPros from '../Components/PasswordPros';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (fieldName) => (event) => {
    setValues((prev) => ({ ...prev, [fieldName]: event.target.value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      // Simple validation
      if (!values.email.trim() || !values.password.trim()) {
        setError('Please enter both email and password.');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      console.log('Login successful:', user);
      navigate('/dashboard'); // Redirect to the home page after successful login
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="l_main">
      <div className="flexCenter login_container innerWidth">
        <img src="src/assets/trackproLogo.png" alt="" width={250} />
        <Box component="form">
          <div className="inputs_container">
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={handleChange('email')}
            />
            <PasswordPros
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={handleChange('password')}
            />
          </div>
          <div className="flexCenter login_button_section">
            <button
              type="button"
              className="login_button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </button>
            <a style={{ alignContent: 'center', cursor: 'pointer', color: 'black' }}>
              Forget password
            </a>
          </div>
          <p style={{ color: 'black' }}>
            Didn't have an account?{' '}
            <a style={{ cursor: 'pointer', color: 'green' }} href="/signup">
              Sign Up
            </a>
          </p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="flexCenter social_icons" style={{ marginTop: '20px', justifyContent: 'space-evenly' }}>
            <img src="src/assets/google-icon.png" alt="" width={80} />
            <img src="src/assets/facebook.png" style={{ borderRadius: '50px' }} alt="" width={65} />
            <img src="src/assets/twitter.png" alt="" width={70} />
          </div>
        </Box>
      </div>
    </div>
  );
};
