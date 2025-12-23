// src/pages/Contact.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#fff' }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" id="contact-heading" sx={{ fontWeight: 600, color: '#0db1ad' }}>
            Contact Us
          </Typography>
          <Typography id="contact-desc" sx={{ mt: 1 }}>
            We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
          </Typography>
        </Box>

        <Box
          component="form"
          role="form"
          aria-describedby="contact-desc"
          noValidate
          onSubmit={(e) => e.preventDefault()}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Your Name"
            placeholder="Your Name"
            variant="outlined"
            required
            fullWidth
            autoComplete="name"
          />
          <TextField
            id="email"
            name="email"
            label="Your Email"
            placeholder="Your Email"
            type="email"
            variant="outlined"
            required
            fullWidth
            autoComplete="email"
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone Number (optional)"
            placeholder="Phone Number (optional)"
            type="tel"
            variant="outlined"
            fullWidth
            autoComplete="tel"
          />
          <TextField
            id="message"
            name="message"
            label="Your Message"
            placeholder="Your Message"
            multiline
            rows={6}
            variant="outlined"
            required
            fullWidth
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              aria-label="Send message"
              sx={{
                backgroundColor: '#0db1ad',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '6px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#178e8b',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
