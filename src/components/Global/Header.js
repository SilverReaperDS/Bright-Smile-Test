import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    const storedUser = localStorage.getItem('username');
    setUsername(storedUser);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Implants', path: '/implants' },
    { label: 'Invisalign', path: '/invisalign' },
    { label: 'Cosmetic', path: '/cosmetic' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? '#0db1ad' : 'rgba(13, 177, 173, 0.85)',
          backdropFilter: 'blur(6px)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              BrightSmile
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 2,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                color="inherit"
                sx={{
                  fontWeight: isActive(path) ? 700 : 400,
                  borderBottom: isActive(path) ? '2px solid white' : 'none',
                  borderRadius: 0,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 1,
            }}
          >
            {username ? (
              <>
                <Typography sx={{ color: 'white' }}>Hi, {username}</Typography>
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" color="inherit">
                  Login
                </Button>
                <Button component={Link} to="/register" color="inherit">
                  Register
                </Button>
              </>
            )}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <List>
            {navLinks.map(({ label, path }) => (
              <ListItem
                button
                key={path}
                component={Link}
                to={path}
                selected={isActive(path)}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          {username ? (
            <>
              <Typography sx={{ mb: 1 }}>Hi, {username}</Typography>
              <Button variant="outlined" fullWidth onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                fullWidth
                sx={{ mb: 1, backgroundColor: '#0db1ad' }}
              >
                Login
              </Button>
              <Button component={Link} to="/register" fullWidth>
                Register
              </Button>
            </>
          )}
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
}
