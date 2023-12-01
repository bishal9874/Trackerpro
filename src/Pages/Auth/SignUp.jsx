import React, { useState } from 'react';
import { TextField, Box, Button, CircularProgress } from '@mui/material';
import PasswordPros from '../Components/PasswordPros';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Components/firebase';
import { useNavigate } from 'react-router-dom';

import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    pass: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (fieldName) => (event) => {
    setValues((prev) => ({ ...prev, [fieldName]: event.target.value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', pass: '' };

    // Basic validation example (you can add more complex validation as needed)
    if (!values.name.trim()) {
      valid = false;
      newErrors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      valid = false;
      newErrors.email = 'Email is required';
    }

    if (!values.pass.trim()) {
      valid = false;
      newErrors.pass = 'Password is required';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        setLoading(true);
        const res = await createUserWithEmailAndPassword(auth, values.email, values.pass);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log(res);
        setLoading(false);
        navigate('/');
      } catch (err) {
        setLoading(false);
        console.error(err.message);

        // Handle different Firebase authentication errors
        if (err.code === 'auth/weak-password') {
          setErrorMsg('Password should be at least 6 characters');
        } else {
          setErrorMsg(err.message);
        }
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="l_main">
      <div className="flexCenter signup_container innerWidth">
        <img src="src/assets/trackproLogo.png" alt="" width={250} />
        <Box component="form">
          <div className="inputs_container">
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              variant="outlined"
              margin="normal"
              onChange={handleChange('name')}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={handleChange('email')}
              error={!!errors.email}
              helperText={errors.email}
            />
            <PasswordPros
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={handleChange('pass')}
              error={!!errors.pass}
              helperText={errors.pass}
            />
          </div>
          <div className="flexCenter signup_button_section">
            <button
              type="button"
              className="signup_button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Signup'}
            </button>
          </div>
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <p style={{ color: 'black' }}>
            Already have an account?{' '}
            <a style={{ color: 'green', cursor: 'pointer' }} href="/">
              Sign in
            </a>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;