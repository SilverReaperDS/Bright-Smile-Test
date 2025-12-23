// src/pages/Login/Login.js
import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { postLogin } from '../../services/api';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Paper,
  Link,
  Fade,
} from '@mui/material';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await postLogin({ username, password });
      alert(`Welcome, ${username}!`);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '187px',
        mb: '187px',
        background: 'linear-gradient(135deg, #e6f7f9, #d0f0f4)',
        fontFamily: `'Segoe UI', sans-serif`,
      }}
    >
      <Fade in timeout={500}>
        <Paper
          elevation={3}
          sx={{
            p: '2.5rem 2rem',
            borderRadius: '12px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            width: '100%',
            maxWidth: '380px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'fadeIn 0.5s ease',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: '1.5rem',
              fontSize: '1.8rem',
              color: '#00796b',
              fontWeight: 600,
            }}
          >
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              width: '100%',
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '0.75rem 1rem',
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '0.75rem 1rem',
                },
              }}
            />

            {error && (
              <Typography
                sx={{
                  color: '#d32f2f',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  mt: '0.5rem',
                }}
              >
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              sx={{
                padding: '0.75rem',
                backgroundColor: '#26a69a',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#00796b',
                },
              }}
            >
              Log In
            </Button>
          </Box>

          <Typography
            className="register-link"
            sx={{
              mt: '1rem',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}
          >
            Don&apos;t have an account?{' '}
            <Link
              component={RouterLink}
              to="/register"
              sx={{
                color: '#00796b',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Register
            </Link>
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
}
